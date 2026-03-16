import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { Rating } from 'react-native-ratings';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useMyReviewsViewModel } from './MyReviewsViewModel';
import { Images } from '../../../utils/images';

const MyReviewsScreen = () => {
  const { goBack, reviewsData, averageRating, totalReviewsCount } = useMyReviewsViewModel();

  const renderItem = () => (
    <View style={styles.reviewCard}>
      <View style={styles.reviewHeader}>
        <View style={styles.userInfo}>
          <Image
            source={Images.userPlaceholder}
            style={styles.userImage}
          />
          <View>
            <Text style={styles.userName}>Driver Name</Text>
            <Text style={styles.date}>12 Oct 2023</Text>
          </View>
        </View>
        <Rating
          type="custom"
          ratingCount={5}
          startingValue={4}
          imageSize={15}
          readonly
          tintColor="#F9F9F9"
          ratingBackgroundColor={COLORS.BORDER}
        />
      </View>
      <Text style={styles.reviewText}>
        Great service! The package was delivered on time and the driver was very
        professional.
      </Text>
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
        <Text style={styles.headerTitle}>My Reviews</Text>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.ratingSummary}>
        <Text style={styles.averageRating}>{averageRating}</Text>
        <View style={styles.ratingStars}>
          <Rating
            type="custom"
            ratingCount={5}
            startingValue={parseFloat(averageRating)}
            imageSize={25}
            readonly
            tintColor={COLORS.WHITE}
            ratingBackgroundColor={COLORS.BORDER}
          />
          <Text style={styles.totalReviews}>Based on {totalReviewsCount} reviews</Text>
        </View>
      </View>

      <FlatList
        data={reviewsData}
        renderItem={renderItem}
        keyExtractor={item => item.toString()}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

export default MyReviewsScreen;
