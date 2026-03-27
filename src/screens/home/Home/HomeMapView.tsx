import { StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { Images } from '../../../utils/images'
import styles from './styles'

type Props = {}

const HomeMapView = (props: Props) => {
    const mapRef = useRef(null)
    const userLocation = {
        latitude: 28.6200,
        longitude: 77.2100,
    };
    return (

        <View style={styles.mapContainer}>
            <MapView
                ref={mapRef}
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                    image={Images.mapPinRed}

                />
            </MapView>
        </View>


    )
}

export default HomeMapView

