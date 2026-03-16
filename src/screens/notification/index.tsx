import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
;
import { useNotificationViewModel } from './NotificationViewModel';
import { Images } from '../../utils/images';

const NotificationScreen = () => {
  const { goBack, notificationData } = useNotificationViewModel();

  const renderItem = () => (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>
        <Image
          source={Images.notification}
          style={styles.notificationIcon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Order Delivered</Text>
        <Text style={styles.description}>
          Your order #12345 has been successfully delivered to the destination.
        </Text>
        <Text style={styles.time}>2 hours ago</Text>
      </View>
    </View>
  );

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
        <Text style={styles.headerTitle}>Notifications</Text>
        <View style={styles.headerSpacer} />
      </View>

      <FlatList
        data={notificationData}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
