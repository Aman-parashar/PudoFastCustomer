import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useDeliveryMilesViewModel } from './DeliveryMilesViewModel';
import { Images } from '../../../utils/images';

const DeliveryMilesScreen = () => {
  const { miles, setMiles, goBack, continueToTransitDetails } = useDeliveryMilesViewModel();

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
        <Text style={styles.headerTitle}>Delivery Miles</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.label}>Estimated Delivery Miles</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={miles}
              onChangeText={setMiles}
              keyboardType="numeric"
            />
            <Text style={styles.unit}>Miles</Text>
          </View>
          <Text style={styles.info}>
            The cost of delivery depends on the distance between pickup and
            delivery locations.
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Order Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Base Fare</Text>
            <Text style={styles.summaryValue}>$10.00</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Distance Charge ({miles} miles)</Text>
            <Text style={styles.summaryValue}>${(parseFloat(miles || '0') * 3).toFixed(2)}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.summaryRow}>
            <Text style={styles.totalLabel}>Total Estimated Cost</Text>
            <Text style={styles.totalValue}>${(10 + parseFloat(miles || '0') * 3).toFixed(2)}</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={continueToTransitDetails}
        >
          <LinearGradient
            colors={[COLORS.PRIMARY, COLORS.SECONDARY]}
            style={styles.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.continueText}>CONTINUE</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryMilesScreen;
