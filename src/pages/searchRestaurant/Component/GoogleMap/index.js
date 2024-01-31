import React, {useEffect, useState} from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

export const MapComponent = ({address}) => {

    const [position, setPosition] = useState(null);
    const center = {
        lat: 21.0041,
        lng: 105.8125,
    };

    useEffect(() => {
        const loadMap = () => {
            if (window.google) {
                const geocoder = new window.google.maps.Geocoder();
                geocoder.geocode({address}, (results, status) => {
                    if (status === 'OK') {
                        setPosition(results[0].geometry.location);
                    } else {
                        console.error('Không thể tìm kiếm địa chỉ.');
                    }
                });
            }
        };

        loadMap();
    }, [address]);

    const mapContainerStyle = {
        width: '100%',
        height: '100%',
    };


    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={position || center}
            zoom={15}
        >
            {position && <Marker position={position} title={address}/>}
        </GoogleMap>
    );
};

