import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import type { BusLocation } from "../../types/bus";

const CAMPUS_CENTER: [number, number] = [-3.688, -40.3499];

const busIcon = new L.DivIcon({
  className: "",
  html: `
    <div style="background: var(--primary, #14b8a6); width: 34px; height: 34px;
      border-radius: 999px; display: flex; align-items: center; justify-content: center;
      border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.3);">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/>
        <path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/>
        <circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
      </svg>
    </div>`,
  iconSize: [34, 34],
  iconAnchor: [17, 17],
});

function FollowBus({ lat, lng }: { lat: number; lng: number }) {
  const map = useMap();
  useEffect(() => {
    map.panTo([lat, lng], { animate: true });
  }, [lat, lng, map]);
  return null;
}

function formatTime(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? null : d.toLocaleTimeString("pt-BR");
}

type Props = { bus?: BusLocation | null; className?: string };

export function CampusMap({ bus, className }: Props) {
  const visible = bus && bus.gpsFix;
  const time = formatTime(bus?.createdAt ?? null);

  return (
    <MapContainer
      center={CAMPUS_CENTER}
      zoom={17}
      scrollWheelZoom={false}
      className={className ?? "h-full w-full"}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {visible && (
        <>
          <Marker position={[bus.latitude, bus.longitude]} icon={busIcon}>
            <Popup>
              {bus.busId} · {Math.round(bus.velocidade)} km/h
              {time && <div className="text-xs">Atualizado às {time}</div>}
            </Popup>
          </Marker>
          <FollowBus lat={bus.latitude} lng={bus.longitude} />
        </>
      )}
    </MapContainer>
  );
}
