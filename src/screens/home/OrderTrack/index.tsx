import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavigationService from '../../../navigation/NavigationService';
import { Images } from '../../../utils/images';
import SwipeButton from '../../../components/common/SwipeButton';
import CommonModal from '../../../components/common/CommonModal';
import { useOrderTrackViewModel, OrderStatus } from './OrderTrackViewModel';
import styles, { PURPLE } from './styles';
import Container from '../../../components/common/Container';

const OrderTrackScreen = () => {
  const {
    status,
    pickupAddress,
    dropAddress,
    distance,
    time,
    handleSwipeComplete,
    confirmDelivery,
    cancelDelivery,
    handleChat,
    swipeButtonTitle,
    isDeliveredModalVisible,
  } = useOrderTrackViewModel();

  const pickupCoords = { latitude: 28.6139, longitude: 77.209 }; // Delhi (Pickup)
  const dropCoords = { latitude: 28.5355, longitude: 77.391 }; // Noida (Drop)
  const driverCoords = { latitude: 28.5744, longitude: 77.3126 }; // Midway (Driver)

  const isWayToDrop =
    status === OrderStatus.ON_THE_WAY_TO_DELIVER ||
    status === OrderStatus.DELIVER;
  const isWayToPickup =
    status === OrderStatus.START_PICKUP ||
    status === OrderStatus.ORDER_PICKED_UP;

  const mapRef = useRef<MapView | null>(null);

  // Note: Replace with your actual Google Maps API Key
  const GOOGLE_MAPS_APIKEY = 'AIzaSyBQxXusfTXnTAqcTOk26ajk4V6ng4Ndhrc';

  return (
    <Container container={{ marginTop: -60 }}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: driverCoords.latitude,
          longitude: driverCoords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker coordinate={pickupCoords}>
          <View style={styles.markerContainer}>
            <View style={[styles.markerDot, { backgroundColor: '#4CAF50' }]} />
          </View>
        </Marker>
        <Marker coordinate={dropCoords}>
          <View style={styles.markerContainer}>
            <View style={[styles.markerDot, { backgroundColor: '#2196F3' }]} />
          </View>
        </Marker>
        <Marker coordinate={driverCoords}>
          <View style={styles.driverMarker}>
            <Image
              source={Images.driver}
              style={styles.driverIcon}
              tintColor="#FFF"
            />
          </View>
        </Marker>

        <MapViewDirections
          origin={pickupCoords}
          destination={driverCoords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor={isWayToPickup ? 'red' : '#666'}
          onReady={result => {
            if (mapRef.current) {
              mapRef.current?.fitToCoordinates(result.coordinates, {
                edgePadding: { top: 100, right: 50, bottom: 100, left: 50 },
                animated: true,
              });
            }
          }}
        />

        <MapViewDirections
          origin={driverCoords}
          destination={dropCoords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor={isWayToDrop ? 'red' : '#666'}
        />
      </MapView>

      <SafeAreaView style={styles.overlay} pointerEvents="box-none">
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => NavigationService.goBack()}
            style={styles.backBtn}
          >
            <Image source={Images.arrowLeft} style={styles.chatIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleChat} style={styles.chatBtn}>
            <Image
              source={Images.chatUnSelected}
              style={styles.chatIcon}
              tintColor="#FFF"
            />
          </TouchableOpacity>
        </View>

        {/* Top Info Card */}
        <View style={styles.topCard}>
          <View style={styles.infoRow}>
            <View style={[styles.dot, { backgroundColor: '#4CAF50' }]} />
            <View style={styles.addressInfo}>
              <Text
                style={[
                  styles.addressLabel,
                  { color: isWayToPickup ? PURPLE : '#888' },
                ]}
              >
                {isWayToPickup ? 'Pickup Requested' : 'Pickup Address'}
              </Text>
              <Text style={styles.addressText}>{pickupAddress}</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <View style={[styles.dot, { backgroundColor: '#2196F3' }]} />
            <View style={styles.addressInfo}>
              <Text
                style={[
                  styles.addressLabel,
                  { color: isWayToDrop ? PURPLE : '#888' },
                ]}
              >
                {isWayToDrop ? 'On the way to Deliver' : 'Dropoff Address'}
              </Text>
              <Text style={styles.addressText}>{dropAddress}</Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }} />

        {/* Bottom Info Card */}
        <View style={styles.statsCard}>
          <View style={styles.statsRow}>
            <View style={styles.stat}>
              <Image
                source={Images.wayToPickUp}
                style={styles.statIcon}
                tintColor={PURPLE}
              />
              <Text style={styles.statText}>{distance}</Text>
            </View>
            <View style={styles.vDivider} />
            <View style={styles.stat}>
              <Image
                source={Images.clock}
                style={styles.statIcon}
                tintColor={PURPLE}
              />
              <Text style={styles.statText}>{time}</Text>
            </View>
          </View>
        </View>

        <View style={styles.swipeContainer}>
          <SwipeButton
            key={status}
            onSwipeComplete={handleSwipeComplete}
            title={swipeButtonTitle}
          />
        </View>
      </SafeAreaView>

      <CommonModal
        visible={isDeliveredModalVisible}
        onClose={cancelDelivery}
        title="Order Delivered"
        image={Images.delivered}
        message="Order delivered Successfully."
        showButtons={true}
        onYes={confirmDelivery}
        onNo={cancelDelivery}
      />
    </Container>
  );
};

export default OrderTrackScreen;
