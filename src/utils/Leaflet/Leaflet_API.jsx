import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import venues from "./leaflet.json";
import "leaflet/dist/leaflet.css";
import Card from "./index";
import "../../assets/styles/components.css";

function Map() {

  return (
    <MapContainer
      center={[50.33835562786822, -4.795074254148329]}
      zoom={20}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {venues.map((p) => {
        return (
          <div key={p.id}>
            <Marker position={[p.longitude, p.latitude]}>
              <Popup>
                <Card venue={p} />
              </Popup>
            </Marker>
          </div>
        );
      })}
    </MapContainer>
  );
}

export default Map;
