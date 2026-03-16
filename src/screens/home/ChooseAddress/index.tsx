import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useChooseAddressViewModel } from './ChooseAddressViewModel';
import { Images } from '../../../utils/images';

const ChooseAddressScreen = () => {
  const { type, search, setSearch, goBack, confirmAddress } = useChooseAddressViewModel();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
        >
          <Image
            source={Images.arrowLeft}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {type === 'pickup' ? 'Pickup Address' : 'Delivery Address'}
        </Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image
            source={Images.search}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Search Address"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={confirmAddress}
        >
          <Text style={styles.confirmText}>CONFIRM ADDRESS</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChooseAddressScreen;
