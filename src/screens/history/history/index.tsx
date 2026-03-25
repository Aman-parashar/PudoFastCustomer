import React from 'react';
import { View, Text, SectionList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import styles from './styles';
import { useHistoryViewModel } from './HistoryViewModel';
import Header from '../../../components/common/Header';
import CustomTabs from '../../../components/common/CustomTabs';
import HistoryCard from '../../../components/common/HistoryCard';
import { Images } from '../../../utils/images';

const TABS = [
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' },
];

const HistoryScreen = () => {
  const {
    selectedTab,
    setSelectedTab,
    historyData,
    onTrack,
    onCancel,
    onReview,
    onReport,
    navigateToDeliveryDetails,
    navigateToNotifications,
  } = useHistoryViewModel();

  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const isFromSettings = route.params?.isFromSettings;
  const headerTitle = route.params?.title || 'History';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        {isFromSettings ? (
          <Header
            type="step"
            title={headerTitle}
            onBack={() => navigation.goBack()}
          />
        ) : (
          <Header type="home" onNotificationPress={navigateToNotifications} />
        )}
      </View>
      <CustomTabs
        tabs={TABS}
        activeTab={selectedTab}
        onTabPress={setSelectedTab}
      />

      <SectionList
        sections={historyData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <HistoryCard
            order={item}
            onTrack={onTrack}
            onCancel={onCancel}
            onReview={onReview}
            onReport={onReport}
            onDetails={navigateToDeliveryDetails}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.sectionLine} />
          </View>
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
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
