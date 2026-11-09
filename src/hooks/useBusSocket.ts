import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { normalizeBus } from "../types/bus";
import type { BusLocation, StatusConnection } from "../types/bus";

const WS_URL = import.meta.env.VITE_WS_URL as string;
const TOPIC = "/topic/location";
const STALE_AFTER_MS = 30_000;

export function useBusSocket(busId: string) {
    const [bus, setBus] = useState<BusLocation | null>(null);
    const [status, setStatus] = useState<StatusConnection>("connecting");
    const [lastMessageAt, setLastMessageAt] = useState<number | null>(null);
    const [now, setNow] = useState(() => Date.now());

    useEffect(() => {
        const client = new Client({
            brokerURL: WS_URL,
            reconnectDelay: 5000,

            onConnect: () => {
                setStatus("connected");
                client.subscribe(TOPIC, (message) => {
                    try{
                        const data = normalizeBus(JSON.parse(message.body));
                        if(!data || data.busId !== busId) return;
                        setBus(data);
                        setLastMessageAt(Date.now());
                    } catch {
                        console.warn("Mensagem inválida em", TOPIC, message.body);
                    }
                });
            },
            onWebSocketClose: () => setStatus ("reconnecting"),
            onWebSocketError: () => setStatus("reconnecting"),
            onStompError: (frame) => {
                console.error("Erro STOMP:", frame.headers["message"]);
                setStatus("reconnecting");
            },
        });
        
        client.activate();

        function onVisible() {
            if(document.visibilityState === "visible" && !client.connected) {
                client.deactivate().then(() => client.activate());
            }
        }

        document.addEventListener("visibilitychange", onVisible);

        const clock = window.setInterval(() => setNow(Date.now()), 5000);

        return () => {
            client.deactivate();
            window.clearInterval(clock);
            document.removeEventListener("visibilitychange", onVisible);
        }
    }, [busId]);

    const isStale = lastMessageAt !== null && (now - lastMessageAt) > STALE_AFTER_MS;

    return { bus, status, isStale };
}