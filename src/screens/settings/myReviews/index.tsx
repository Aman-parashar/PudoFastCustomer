import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { Rating } from 'react-native-ratings';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useMyReviewsViewModel } from './MyReviewsViewModel';
import { Images } from '../../../utils/images';

import Header from '../../../components/common/Header';

const MyReviewsScreen = () => {
  const {
    goBack,
    reviewsData,
    averageRating,
    totalReviewsCount,
    ratingStats,
    activeFilter,
    setActiveFilter,
    filters,
    isLoading,
  } = useMyReviewsViewModel();

  const renderRatingBar = (rating: number, count: number) => {
    const percentage =
      totalReviewsCount > 0 ? (count / totalReviewsCount) * 100 : 0;
    return (
      <View key={rating} style={styles.ratingBarRow}>
        <Text style={styles.ratingNumber}>{rating}</Text>
        <Image source={Images.star} style={styles.smallStar} />
        <View style={styles.progressBarBg}>
          <View style={[styles.progressBarFill, { width: `${percentage}%` }]} />
        </View>
      </View>
    );
  };

  const renderFilterTab = (rating: number | 'All') => {
    const isActive = activeFilter === rating;
    return (
      <TouchableOpacity
        key={rating}
        style={[styles.filterTab, isActive && styles.activeFilterTab]}
        onPress={() => setActiveFilter(rating)}
      >
        <Text style={[styles.filterText, isActive && styles.activeFilterText]}>
          {rating}
        </Text>
        <Image
          source={Images.star}
          style={[styles.filterStar, isActive && styles.activeFilterStar]}
        />
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <Image source={item.image} style={styles.userImage} />
        <View style={styles.reviewInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map(star => (
              <Image
                key={star}
                source={Images.star}
                style={[
                  styles.cardStar,
                  {
                    tintColor:
                      star <= item.rating ? COLORS.SECONDARY : COLORS.BORDER,
                  },
                ]}
              />
            ))}
          </View>
        </View>
      </View>
      <Text style={styles.reviewText}>{item.comment}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={Images.navShadow}
          style={styles.navShadow}
          resizeMode="stretch"
        />
        <Header type="step" title="My Reviews" onBack={goBack} />
      </View>

      <FlatList
        data={reviewsData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <View style={styles.overallRatingContainer}>
              <Text style={styles.bigRatingText}>{averageRating}</Text>
              <View style={styles.bigStarsRow}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Image
                    key={star}
                    source={Images.star}
                    style={[
                      styles.bigStar,
                      {
                        tintColor:
                          star <= parseFloat(averageRating)
                            ? COLORS.SECONDARY
                            : COLORS.BORDER,
                      },
                    ]}
                  />
                ))}
              </View>
            </View>

            <View style={styles.breakdownContainer}>
              {[5, 4, 3, 2, 1].map(rating =>
                renderRatingBar(
                  rating,
                  ratingStats[rating as keyof typeof ratingStats],
                ),
              )}
            </View>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterContainer}
            >
              {filters.map(renderFilterTab)}
            </ScrollView>
          </View>
        }
        contentContainerStyle={styles.scrollContent}
        ListEmptyComponent={() => (
          isLoading ? (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
              <Text>Loading reviews...</Text>
            </View>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
              <Text>No reviews found</Text>
            </View>
          )
        )}
      />
    </SafeAreaView>
  );
};

export default MyReviewsScreen;
