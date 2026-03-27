import { useState } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { Images } from '../../../utils/images';

export const useMyReviewsViewModel = () => {
  const [activeFilter, setActiveFilter] = useState(5);

  const goBack = () => {
    NavigationService.goBack();
  };

  const ratingStats = {
    5: 8,
    4: 3,
    3: 1,
    2: 0,
    1: 0,
  };

  const averageRating = '4.0';
  const totalReviewsCount = 12;

  const reviewsData = [
    {
      id: '1',
      name: 'Name Here',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo augue.',
      image: Images.userPlaceholder,
    },
    {
      id: '2',
      name: 'Name Here',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo augue.',
      image: Images.userPlaceholder,
    },
    {
      id: '3',
      name: 'Name Here',
      rating: 4,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a leo augue.',
      image: Images.userPlaceholder,
    },
  ];

  const filters = [5, 4, 3, 2, 1];

  return {
    goBack,
    reviewsData,
    averageRating,
    totalReviewsCount,
    ratingStats,
    activeFilter,
    setActiveFilter,
    filters,
  };
};
