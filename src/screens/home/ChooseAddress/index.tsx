import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import MapView, { Circle, Region, PROVIDER_GOOGLE } from 'react-native-maps';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Geocoder from 'react-native-geocoding';
import * as AppConfig from '../../../config/AppConfig';

import styles from './styles';
import { useChooseAddressViewModel } from './ChooseAddressViewModel';
import { Images } from '../../../utils/images';
import { COLORS } from '../../../utils/colors';
import Container from '../../../components/common/Container';

const ChooseAddressScreen: React.FC = () => {
  const { type, search, setSearch, goBack, confirmAddress } =
    useChooseAddressViewModel();

  const initialRegion: Region = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const [region, setRegion] = useState<Region>(initialRegion);
  const [address, setAddress] = useState<{ address: string, latitude: number, longitude: number }>({ address: '', latitude: 0, longitude: 0 });


  // 👉 debounce timer ref
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 🔁 Reverse Geocode function
  const getAddressFromLatLng = async (lat: number, lng: number) => {
    try {
      const res = await Geocoder.from(lat, lng);
      const formattedAddress: string =
        res.results[0]?.formatted_address || 'Address not found';
      setAddress({ address: formattedAddress, latitude: lat, longitude: lng });

    } catch (error) {
      console.log('Geocoding error:', error);
      setAddress({ address: 'Unable to fetch address', latitude: lat, longitude: lng });
    }
  };

  // 📍 When map stops moving (debounced)
  const handleRegionChangeComplete = (newRegion: Region) => {
    setRegion(newRegion);
    console.log('new region----->', newRegion);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      getAddressFromLatLng(newRegion.latitude, newRegion.longitude);
    }, 600); // ⏱ 600ms debounce
  };

  // 🚀 Load initial address
  useEffect(() => {
    // 👉 Initialize Geocoder
    Geocoder.init(AppConfig.GOOGLE_MAPS_KEY);
    getAddressFromLatLng(initialRegion.latitude, initialRegion.longitude);
  }, []);

  return (
    <Container>
      {/* MapView */}
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        onRegionChangeComplete={handleRegionChangeComplete}
        provider={PROVIDER_GOOGLE}
      >
        <Circle
          center={region}
          radius={500}
          strokeWidth={1}
          strokeColor="rgba(104, 19, 111, 0.3)"
          fillColor="rgba(104, 19, 111, 0.1)"
        />
      </MapView>

      {/* 📍 Fixed Center Marker */}
      <View
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          marginLeft: -20,
          marginTop: -40,
        }}
      >
        <Image
          source={Images.mapPinRed}
          style={{ width: 40, height: 40, resizeMode: 'contain' }}
        />
      </View>

      {/* Header Overlay */}
      <View style={styles.headerOverlay}>
        <TouchableOpacity onPress={goBack} style={styles.backButtonCircle}>
          <Image source={Images.arrowLeft} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitleCenter}>Select Address</Text>
      </View>

      {/* Search Overlay */}
      <View style={styles.searchOverlay}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            placeholderTextColor={COLORS.PLACEHOLDER_TEXTCOLOR}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* 🎯 Current Location Button (logic can be added later) */}
      <TouchableOpacity style={styles.floatingLocationButton}>
        <MaterialCommunityIcons
          name="crosshairs-gps"
          size={24}
          color={COLORS.BLACK}
        />
      </TouchableOpacity>

      {/* Bottom Address Card */}
      <View style={styles.bottomCard}>
        <Text style={styles.cardTitle}>
          {type === 'pickup' ? 'Pickup address' : 'Delivery address'}
        </Text>

        <Text style={styles.cardAddress}>
          {address.address || 'Fetching address...'}
        </Text>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => confirmAddress(address)}
        >
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default ChooseAddressScreen;
