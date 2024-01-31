import React, {useState, useEffect, useRef} from 'react';
import {GoogleMap, LoadScript, StandaloneSearchBox, Marker} from '@react-google-maps/api';
import {Input} from "antd";

const MyMapComponent = ({defaultAddress, setValuePlace}) => {
    const searchBoxRef = useRef(null);
    const [position, setPosition] = useState(null);
    const [address, setAddress] = useState(defaultAddress);

    useEffect(() => {
        if (defaultAddress !== address) {
            setAddress(defaultAddress)
        }
    }, [defaultAddress]);

    const onPlacesChanged = () => {
        const places = searchBoxRef.current.getPlaces();

        if (places.length > 0) {
            const location = places[0].geometry.location;
            setPosition({lat: location.lat(), lng: location.lng()});
            setAddress(places[0].formatted_address);
            setValuePlace(places[0].formatted_address)
        }
    };

    useEffect(() => {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({address}, (results, status) => {
            if (status === 'OK') {
                setPosition(results[0].geometry.location);
            } else {
                console.error('Không thể tìm kiếm địa chỉ.');
            }
        });
    }, [address]);

    const center = {
        lat: 21.0041,
        lng: 105.8125,
    };

    return (
        <div>
            <StandaloneSearchBox
                onLoad={(ref) => {
                    searchBoxRef.current = ref;
                    ref.addListener('places_changed', onPlacesChanged);
                }}
            >
                <Input
                    placeholder="Tìm kiếm địa điểm"
                    value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                        setValuePlace(e.target.value);
                    }}
                    style={{
                        width: `100%`,
                        height: `40px`,
                    }}
                />
            </StandaloneSearchBox>

            <GoogleMap
                mapContainerStyle={{width: '100%', height: '350px'}}
                center={position || center}
                zoom={12}
            >
                {position && <Marker position={position} title={address}/>}
            </GoogleMap>
        </div>
    );
};

export default MyMapComponent;
