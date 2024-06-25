import React from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import styles from '../CSS/Map.module.css';
import { Country, State, City } from 'country-state-city';
import { useTranslation } from 'react-i18next';



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
    "Şehir Gezisi",
    "Festival",
    "Spor Etkinliği",
    "Tiyatro",
    "Sinema",
    "Yürüyüş",
    "Kayak Turu",
    "Yüzme",
    "Antik Kent Gezisi",
    "Değer"
];

function Map({ userType }) {
    const { t } = useTranslation();
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyC0w2OzfJObKLfYNdvAF9xlFkVzf9MH0bA"
    });

    const eventLocations = [
        {
            id: 1,
            name: 'Ankara',
            position: { lat: 39.9334, lng: 32.8597 },
            description: '30 Ağustos Yürüyüşü',

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
        },
        {
            id: 5,
            name: 'Rize',
            position: { lat: 41.0201, lng: 40.5234 },
            description: 'Kayak Turu'
        },
        {
            id: 6,
            name: 'Erzurum',
            position: { lat: 39.9042, lng: 41.2657 },
            description: 'Çay Toplama '
        },
        {
            id: 7,
            name: 'İstanbul',
            position: { lat: 41.0082, lng: 28.9784 },
            description: 'Tiyatro '
        },
        {
            id: 8,
            name: 'Antalya',
            position: { lat: 36.8969, lng: 30.7133 },
            description: 'Plaj Voleybolu '
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
        const turkishProvinces = State.getStatesOfCountry('TR');
        setProvinces(turkishProvinces);
    }, []);

    useEffect(() => {
        if (selectedProvince) {
            const provinceData = provinces.find(prov => prov.name === selectedProvince);
            if (provinceData) {
                const provinceDistricts = City.getCitiesOfState('TR', provinceData.isoCode);
                setDistricts(provinceDistricts);
            }
        }
    }, [selectedProvince]);



    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds({ lat: 36.0, lng: 26.0425 }, { lat: 42.1078, lng: 44.7936 });
        map.fitBounds(bounds);
        setMap(map);
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, []);

    const handleAddMarker = () => {
        if (!city || !district) {

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

        if (userType === 'user') {
            if (window.confirm(`Bu etkinliğe katılmak istiyor musunuz?`)) {

                const updatedMarkers = markers.map(m => {
                    if (m.id === marker.id) {

                        return { ...m, joined: true };
                    }
                    return m;
                });
                setMarkers(updatedMarkers);
            }
        }
    };

    const handleInfoWindowClose = () => {
        setSelectedMarker(null);
    };

    const handleEditMarker = () => {
        //güncelleme yapacak olduğum

    };

    const handleDeleteMarker = () => {
        const updatedMarkers = markers.filter(marker => marker.id !== selectedEvent.id);
        setMarkers(updatedMarkers);
        setSelectedEvent(null);
        setSelectedMarker(null);
    };

    return isLoaded ? (
        <div className={styles.container}>
            {userType === 'admin' && (

                <div className={styles.aktivite} style={{ marginBottom: '10px' }}>

                    <h2>{t('new_events')}</h2>

                    <div className={styles.form}>

                        <label>{t('select_province')}</label>
                        <select value={selectedProvince} onChange={e => setSelectedProvince(e.target.value)} required>
                            <option value="">{t('select_province')}</option>
                            {provinces.map(province => (
                                <option key={province.isoCode} value={province.name}>{province.name}</option>
                            ))}
                        </select>


                        <label>{t('select_district')}</label>
                        <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} required disabled={!selectedProvince}>
                            <option value="">{t('select_district')}</option>
                            {districts.map(district => (
                                <option key={district.isoCode} value={district.isoCode}>{district.name}</option>
                            ))}
                        </select>

                        <label>{t('social_activity')}</label>
                        <select value={selectedActivity} onChange={e => setSelectedActivity(e.target.value)} required disabled={!selectedDistrict}>
                            <option value="">{t('select_activity')}</option>
                            {socialActivities.map((activity, index) => (
                                <option key={index} value={activity}>{activity}</option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" onClick={handleAddMarker}>{t('add marker')}</button>
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
                        key={`event-${event.id}`}
                        position={event.position}
                        onClick={() => handleMarkerClick(event)}

                    />
                ))}
                {markers.map(marker => (
                    <Marker
                        key={`marker-${marker.id}`}
                        position={marker.position}
                        onClick={() => handleMarkerClick(marker)}
                    />
                ))}

                {selectedMarker && selectedEvent && selectedEvent.position && (
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
                                    <p>{t('description')} {selectedMarker.position.lat}</p>
                                    <p>{t('longitude')}:  {selectedMarker.position.lng}</p>
                                </>
                            )}
                            {userType === 'admin' && (
                                <>
                                    <div>
                                        <button onClick={handleEditMarker}>{t('edit')}</button>
                                        <button onClick={handleDeleteMarker}>{t('delete')}</button>
                                    </div>
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


