import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import HomeMapView from './HomeMapView';
import styles from './styles';
import { useHomeViewModel } from './HomeViewModel';
import { Images } from '../../../utils/images';
import CustomButton from '../../../components/common/CustomButton';
import Header from '../../../components/common/Header';
import { COLORS } from '../../../utils/colors';
import AddressBottomSheet from '../../../components/home/AddressBottomSheet';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const HomeScreen = () => {
  const {
    pickupLocation,
    setPickupLocation,
    deliveryLocation, setDeliveryLocation,
    navigateToNotifications,
    navigateToChooseAddress,
    navigateToDeliveryMiles,
  } = useHomeViewModel();

  const [addressType, setAddressType] = React.useState<'pickup' | 'delivery'>(
    'delivery',
  );

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = (type: 'pickup' | 'delivery') => {
    setAddressType(type);
    bottomSheetModalRef.current?.present();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header
          title="Pudo Fast"
          type="home"
          onNotificationPress={navigateToNotifications}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <HomeMapView />

        <View style={styles.addressSection}>
          <Text style={styles.sectionTitle}>Address Details</Text>
          <Text style={styles.sectionSubtitle}>
            Lets us help you with your delivery needs.
          </Text>

          <TouchableOpacity
            style={styles.addressBox}
            onPress={() => handleOpenBottomSheet('pickup')}
          >
            <View style={styles.addressRow}>
              <Image
                source={Images.pickupGreenIcon}
                style={styles.addressIcon}
              />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressLabel}>Pickup Address</Text>
                <Text style={styles.addressValue} numberOfLines={1}>
                  {pickupLocation.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.addressBox, { backgroundColor: COLORS.BOX_BLUE }]}
            onPress={() => handleOpenBottomSheet('delivery')}
          >
            <View style={styles.addressRow}>
              <Image source={Images.dropBlueIcon} style={styles.addressIcon} />
              <View style={styles.addressTextContainer}>
                <Text style={styles.addressLabel}>Delivery Address</Text>
                <Text style={styles.addressValue} numberOfLines={1}>
                  {deliveryLocation.address}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <CustomButton
            title="CONTINUE"
            onPress={navigateToDeliveryMiles}
            style={{ marginTop: 10 }}
          />
        </View>
      </ScrollView>
      <AddressBottomSheet
        bottomSheetModalRef={bottomSheetModalRef}
        onSave={address => {
          if (addressType === 'pickup') {
            setPickupLocation(address);
          } else {
            setDeliveryLocation(address);
          }
        }}
        onChooseFromMap={() =>
          navigateToChooseAddress(addressType, address => {
            if (addressType === 'pickup') {
              setPickupLocation(address);
            } else {
              setDeliveryLocation(address);
            }
          })
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
