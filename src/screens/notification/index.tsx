import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Swipeable } from 'react-native-gesture-handler';
import { Images } from '../../utils/images';
import Header from '../../components/common/Header';
import NavigationService from '../../navigation/NavigationService';
import {
  useNotificationViewModel,
  NotificationItem,
} from './NotificationViewModel';
import styles from './styles';

const NotificationScreen = () => {
  const { notifications, totalCount, isLoading, deleteNotification, clearAll } =
    useNotificationViewModel();

  const renderRightActions = (id: string) => {
    return (
      <TouchableOpacity
        style={styles.deleteAction}
        onPress={() => deleteNotification(id)}
      >
        <Text style={styles.deleteActionText}>Delete</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <Swipeable
      renderLeftActions={() => renderRightActions(item.id)}
      overshootLeft={false}
    >
      <View style={styles.notificationCard}>
        <View style={styles.cardLeft}>
          <View style={styles.iconCircle}>
            <Image source={Images.notificationBell} style={styles.bellIcon} />
          </View>
          <Text style={styles.timeText}>{item.time}</Text>
        </View>
        <View style={styles.cardRight}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.bodyText}>{item.body}</Text>
        </View>
      </View>
    </Swipeable>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
    </View>
  );

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Image source={Images.notificationReceived} style={styles.emptyImage} />
      <Text style={styles.emptyTitle}>No Notification Received</Text>
    </View>
  );

  const ClearButton = () => (
    <TouchableOpacity onPress={clearAll} style={styles.clearBtn}>
      <Text style={styles.clearBtnText}>Clear</Text>
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
        <Header
          type="step"
          title="Notifications"
          onBack={() => NavigationService.goBack()}
          rightComponent={totalCount > 0 ? <ClearButton /> : null}
        />
      </View>
      <SectionList
        sections={notifications}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={[
          styles.listContent,
          totalCount === 0 && {
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
        stickySectionHeadersEnabled={false}
        ListEmptyComponent={isLoading ? null : renderEmptyState}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default NotificationScreen;
