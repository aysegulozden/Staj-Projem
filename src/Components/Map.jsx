import React from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useState } from 'react';
import styles from '../CSS/Map.module.css';


const containerStyle = {
    width: '100%',
    height: '90vh'
};

const center = {
    lat: 39.9334,
    lng: 32.8597
};
const eventLocations = [
    {
        id: 1,
        name: 'Etkinlik 1',
        position: { lat: 39.9334, lng: 32.8597 },
        description: 'Etkinlik açıklaması'
    },
    {
        id: 2,
        name: 'Etkinlik 2',
        position: { lat: 40.0, lng: 32.5 },
        description: 'Etkinlik açıklaması'
    }
]
function Map() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDz37fhV4HK2tlkJsIU3AZcTjkUjhRPbDk"
    })

    const [map, setMap] = React.useState(null)
    const [selectedEvent, setSelectedEvent] = React.useState(null);
    const [markers, setMarkers] = useState([]);
    const [selectedMarker, setSelectedMarker] = useState('');

    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds({ lat: 36.0, lng: 26.0425 }, { lat: 42.1078, lng: 44.7936 })
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    const handleAddMarker = () => {
        const newMarker = {
            id: markers.length + 1,
            city,
            district,
            position: {
                lat: parseFloat(latitude),
                lng: parseFloat(longitude)
            }
        };
        setMarkers([...markers, newMarker]);
        setCity('');
        setDistrict('');
        setLatitude('');
        setLongitude('');
    };

    return isLoaded ? (
        <div className={styles.container}>

            <div className={styles.aktivite} style={{ marginBottom: '10px' }}>
                <h2>Yeni Etkinlikler</h2>

                <div className={styles.form}>
                    <label >Şehir</label>
                    <input
                        type="text"
                        placeholder="Şehir Giriniz"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        required
                    />
                    <label >İlçe</label>
                    <input
                        type="text"
                        placeholder="İlçe Adını Giriniz"
                        value={district}
                        onChange={e => setDistrict(e.target.value)}
                        required
                    />
                    <label >Enlem</label>
                    <input
                        type="text"
                        placeholder="Enlem Değerini Giriniz"
                        value={latitude}
                        onChange={e => setLatitude(e.target.value)}
                        required
                    />
                    <label>Boylam</label>
                    <input
                        type="text"
                        placeholder="Boylam Değerini Giriniz"
                        value={longitude}
                        onChange={e => setLongitude(e.target.value)}
                    />

                </div>
                <button type="submit" onClick={handleAddMarker} > Marker Ekle</button>



            </div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={5}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                }}
            >
                {markers.map(marker => (
                    <Marker
                        key={marker.id}
                        position={marker.position}
                        onClick={() => setSelectedMarker(marker)}
                    />
                ))}

                {selectedMarker && (
                    <InfoWindow
                        position={selectedMarker.position}
                        onCloseClick={() => setSelectedMarker(null)}
                    >
                        <div>
                            <h2>{selectedMarker.city} - {selectedMarker.district}</h2>
                            <p>Enlem: {selectedMarker.position.lat}</p>
                            <p>Boylam: {selectedMarker.position.lng}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    ) : <></>;
}

export default React.memo(Map)

