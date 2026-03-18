import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker } from 'react-native-maps';
import styles from './styles';
import { useHomeViewModel } from './HomeViewModel';
import { Images } from '../../../utils/images';
import CustomButton from '../../../components/common/CustomButton';
import Header from '../../../components/common/Header';

const HomeScreen = () => {
  const {
    navigateToNotifications,
    navigateToChooseAddress,
    navigateToDeliveryMiles,
  } = useHomeViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header title="Pudo Fast" type='home' onNotificationPress={navigateToNotifications} />

      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mapContainer}>
          <MapView
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

        <View style={styles.addressSection}>
          <Text style={styles.sectionTitle}>Address Details</Text>
          <Text style={styles.sectionSubtitle}>
            Lets us help you with your delivery needs.
          </Text>

          <TouchableOpacity
            style={styles.addressBox}
            onPress={() => navigateToChooseAddress('pickup')}
          >
            <View style={styles.addressRow}>
              <Image
                source={Images.pickupGreenIcon}
                style={styles.addressIcon}
              />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressLabel}>Pickup Address</Text>
                <Text style={styles.addressValue}>Enter Address</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.addressBox}
            onPress={() => navigateToChooseAddress('delivery')}
          >
            <View style={styles.addressRow}>
              <Image
                source={Images.dropBlueIcon}
                style={styles.addressIcon}
              />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressValue}>Enter Address</Text>
              </View>
            </View>
          </TouchableOpacity>

          <CustomButton title="CONTINUE" onPress={navigateToDeliveryMiles} style={{ marginTop: 10 }} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
