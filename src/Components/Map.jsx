import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import styles from '../CSS/Map.module.css';

const containerStyle = {
    width: '100%',
    height: '90vh'
};

const center = {
    lat: 39.9334,
    lng: 32.8597
};
const socialActivities = [
    "Konser",
    "Sergi",
    "Festival",
    "Spor Etkinliği",
    "Tiyatro",
    "Sinema",
    "Yürüyüş",
    "Diğer"
];

function Map({ userType }) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDz37fhV4HK2tlkJsIU3AZcTjkUjhRPbDk"
    });

    const eventLocations = [
        {
            id: 1,
            name: 'Ankara',
            position: { lat: 39.9334, lng: 32.8597 },
            description: '30 Ağustos Yürüyüşü'
        },
        {
            id: 2,
            name: 'İzmir Aliağa',
            position: { lat: 38.8, lng: 26.97 },
            description: 'Yaz Maratonu'
        },
        {
            id: 3,
            name: 'Hatay Arsuz',
            position: { lat: 36.3986, lng: 36.1495 },
            description: '20 Ağustos -25 Ağustos'
        },
        {
            id: 4,
            name: 'Mardin',
            position: { lat: 37.3114, lng: 40.7350 },
            description: 'Mardin Şehir Turu'
        }
    ];
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [selectedProvince, setSelectedProvince] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedActivity, setSelectedActivity] = useState('');

    const [map, setMap] = useState(null);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState(null);

    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        fetchProvinces();
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            fetchDistricts(selectedProvince);
        }
    }, [selectedProvince]);

    const fetchProvinces = async () => {
        try {
            const response = await fetch('https://api.ubilisim.com/turkiye/il');
            const data = await response.json();
            setProvinces(data.data);
        } catch (error) {
            console.error('Error fetching provinces:', error);
        }
    };

    const fetchDistricts = async (province) => {
        try {
            const response = await fetch(`https://api.ubilisim.com/turkiye/ilce?il=${province}`);
            const data = await response.json();
            setDistricts(data.data);
        } catch (error) {
            console.error('Error fetching districts:', error);
        }
    };

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds({ lat: 36.0, lng: 26.0425 }, { lat: 42.1078, lng: 44.7936 });
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const handleAddMarker = () => {
        if (!city || !district || !latitude || !longitude) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }

        const newMarker = {
            id: markers.length + 1,
            name: `Etkinlik ${markers.length + 1}`,
            city,
            district,
            position: {
                lat: parseFloat(latitude),
                lng: parseFloat(longitude)
            },
            description: 'Yeni etkinlik açıklaması'
        };

        setMarkers([...markers, newMarker]);
        setCity('');
        setDistrict('');
        setLatitude('');
        setLongitude('');
        setSelectedActivity('');
    };

    const handleMarkerClick = (marker) => {
        setSelectedEvent(marker);
        setSelectedMarker(marker);
    };

    const handleInfoWindowClose = () => {
        setSelectedMarker(null);
    };

    const handleEditMarker = () => {

    };

    const handleDeleteMarker = () => {
        const updatedMarkers = markers.filter(marker => marker.id !== selectedEvent.id);
        setMarkers(updatedMarkers);
        setSelectedEvent(null);
    };

    return isLoaded ? (
        <div className={styles.container}>
            {userType === 'admin' && (
                <div className={styles.aktivite} style={{ marginBottom: '10px' }}>
                    <h2>Yeni Etkinlikler</h2>
                    <div className={styles.form}>
                        <label>Şehir</label>
                        <select value={selectedProvince} onChange={e => setSelectedProvince(e.target.value)} required>
                            <option value="">Şehir Seçiniz</option>
                            {provinces.map(province => (
                                <option key={province} value={province}>{province}</option>
                            ))}
                        </select>

                        <label>İlçe</label>
                        <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} required disabled={!selectedProvince}>
                            <option value="">İlçe Seçiniz</option>
                            {districts.map(district => (
                                <option key={district} value={district}>{district}</option>
                            ))}
                        </select>
                        <label>Sosyal Aktivite</label>
                        <select value={selectedActivity} onChange={e => setSelectedActivity(e.target.value)} required disabled={!selectedDistrict}>
                            <option value="">Sosyal Aktivite Seçiniz</option>
                            {socialActivities.map(activity => (
                                <option key={activity} value={activity}>{activity}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" onClick={handleAddMarker}>Marker Ekle</button>
                </div>
            )}

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
            >
                {eventLocations.map(event => (
                    <Marker
                        key={event.id}
                        position={event.position}
                        onClick={() => handleMarkerClick(event)}
                    />
                ))}
                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker)}
                    />
                ))}

                {selectedMarker && (
                    <InfoWindow
                        position={selectedEvent.position}
                        onCloseClick={handleInfoWindowClose}
                    >
                        <div>
                            <h2>{selectedEvent.name}</h2>
                            <p>{selectedEvent.description}</p>
                            {selectedMarker.city && selectedMarker.district && (
                                <>
                                    <h2>{selectedMarker.city} - {selectedMarker.district}</h2>
                                    <p>Enlem: {selectedMarker.position.lat}</p>
                                    <p>Boylam: {selectedMarker.position.lng}</p>
                                </>
                            )}
                            {userType === 'admin' && (
                                <>
                                    <button onClick={handleEditMarker}>Düzenle</button>
                                    <button onClick={handleDeleteMarker}>Sil</button>
                                </>
                            )}
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    ) : <></>;
}

export default React.memo(Map);


