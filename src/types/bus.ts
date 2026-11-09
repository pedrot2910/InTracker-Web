export type StatusConnection = "connecting" | "reconnecting" | "connected" | "disconnected" | "error";

export type BusLocation = {
    busId: string;
    latitude: number;
    longitude: number;
    velocidade: number;
    satelites: number;
    gpsFix: boolean;
    hdop: number;
    createdAt: string | null;
}

export function normalizeBus(raw: any): BusLocation | null {
    if (typeof raw?.latitude !== "number" || typeof raw?.longitude !== "number") {
        return null;
    }

    return {
        busId: raw.busId,
        latitude: raw.latitude,
        longitude: raw.longitude,
        velocidade: raw.velocidade ?? 0,
        satelites: raw.satelites ?? 0,
        gpsFix: raw.gpsFix ?? raw.gps_fix ?? false,
        hdop: raw.hdop ??99,
        createdAt: raw.createdAt ?? raw.created_at ?? null,
    }
}