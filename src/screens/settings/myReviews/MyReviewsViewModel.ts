import NavigationService from '../../../navigation/NavigationService';

export const useMyReviewsViewModel = () => {
  const goBack = () => {
    NavigationService.goBack();
  };

  const reviewsData = [1, 2, 3, 4, 5];
  const averageRating = '4.0';
  const totalReviewsCount = 12;

  return {
    goBack,
    reviewsData,
    averageRating,
    totalReviewsCount,
  };
};
