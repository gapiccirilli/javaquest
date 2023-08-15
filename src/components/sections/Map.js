import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styles from "./Map.module.css";
import { useState } from "react";

export default function Home() {
    const [position, setPosition] = useState([47.36930, 8.54181]);

    return (
      <section className={`${styles.mapContainer} sections`}>
        <MapContainer center={position} zoom={13} scrollWheelZoom={true} className={styles.map}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
            contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            url='https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    );
  }