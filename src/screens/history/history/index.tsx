import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useHistoryViewModel } from './HistoryViewModel';
import { Images } from '../../../utils/images';

const HistoryScreen = () => {
  const { navigateToDeliveryDetails, historyData } = useHistoryViewModel();

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigateToDeliveryDetails(`PF123${item}45`)}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.orderId}>Order #12345</Text>
        <Text style={styles.status}>Delivered</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.addressRow}>
        <View style={styles.dotGreen} />
        <Text style={styles.addressText}>123 Pickup St, City</Text>
      </View>
      <View style={styles.addressRow}>
        <View style={styles.dotBlue} />
        <Text style={styles.addressText}>456 Delivery Ave, City</Text>
      </View>
      <View style={styles.cardFooter}>
        <Text style={styles.date}>12 Oct 2023, 10:30 AM</Text>
        <Text style={styles.price}>$25.00</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>History</Text>
        </View>
      </View>

      <FlatList
        data={historyData}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No history found</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default HistoryScreen;
