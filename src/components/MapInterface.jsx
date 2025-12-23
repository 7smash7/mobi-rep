import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { NavigationArrow, MagnifyingGlass } from '@phosphor-icons/react';
import './MapInterface.css';

// Fix Leaflet marker icons
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const STORE_POS = [45.7579, 4.8322]; // 5 rue de la barre, Lyon 2 (Approx)
const USER_POS_MOCK = [45.7620, 4.8250]; // Nearby Lyon point
const ROUTE_PATH = [
    USER_POS_MOCK,
    [45.7600, 4.8280],
    [45.7590, 4.8300],
    STORE_POS
];

const RoutingAnim = ({ start }) => {
    const map = useMap();
    useEffect(() => {
        if (start) {
            map.flyTo(STORE_POS, 15, { duration: 1.5 });
        }
    }, [start, map]);
    return null;
};

const MapInterface = () => {
    const [search, setSearch] = useState('');
    const [showRoute, setShowRoute] = useState(false);
    const [activeStore, setActiveStore] = useState(null);

    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            setShowRoute(true);
            setActiveStore({
                name: "Mobirep Lyon",
                address: "5 rue de la barre, 69002 Lyon",
                hours: "10:00 - 19:00",
                eta: "8 min (Vélo)",
                details: ["Prendre Quai Jules Courmont", "Tourner à droite rue de la Barre"]
            });
        }
    };

    const openNativeMap = () => {
        // Open Apple Maps or Google Maps
        const addressEnc = encodeURIComponent("5 rue de la barre, 69002 Lyon");
        window.open(`https://maps.apple.com/?daddr=${addressEnc}`, '_blank');
    };

    return (
        <div className="map-interface-container">
            <div className="map-overlay-ui">
                <form className="search-bar glass-card" onSubmit={handleSearch}>
                    <MagnifyingGlass size={20} className="search-icon" />
                    <input
                        type="text"
                        placeholder="Votre position ou domicile..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button type="submit" className="btn-go">
                        <NavigationArrow size={20} weight="fill" />
                    </button>
                </form>

                {activeStore && (
                    <div className="store-popup glass-card fade-in-up">
                        <div className="popup-header">
                            <h3>{activeStore.name}</h3>
                            <span className="eta-badge">{activeStore.eta}</span>
                        </div>
                        <p className="address">{activeStore.address}</p>
                        <p className="hours text-green">Ouvert • {activeStore.hours}</p>

                        <div className="route-steps">
                            {activeStore.details.map((step, i) => (
                                <div key={i} className="route-step-item">
                                    <span className="step-dot"></span> {step}
                                </div>
                            ))}
                        </div>

                        <button className="btn-navigate" onClick={openNativeMap}>
                            Y aller <NavigationArrow size={16} weight="bold" style={{ marginLeft: 8 }} />
                        </button>
                    </div>
                )}
            </div>

            <MapContainer center={STORE_POS} zoom={13} scrollWheelZoom={true} className="leaflet-map-view">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                {/* CartoDB Light simulates Apple Maps clean look */}

                <Marker position={STORE_POS}>
                    <Popup>Mobirep Paris - Expert Apple</Popup>
                </Marker>

                {showRoute && (
                    <>
                        <Marker position={USER_POS_MOCK} opacity={0.7}>
                            <Popup>Votre position</Popup>
                        </Marker>
                        <Polyline positions={ROUTE_PATH} color="#0071E3" weight={5} opacity={0.8} dashArray="10, 10" />
                        <RoutingAnim start={showRoute} />
                    </>
                )}
            </MapContainer>
        </div>
    );
};

export default MapInterface;
