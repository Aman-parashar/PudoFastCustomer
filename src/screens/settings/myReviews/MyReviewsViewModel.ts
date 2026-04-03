import { useState, useEffect } from 'react';
import NavigationService from '../../../navigation/NavigationService';
import { ProfileService } from '../../../services/ProfileService';
import { Images } from '../../../utils/images';

export const useMyReviewsViewModel = () => {
  const [activeFilter, setActiveFilter] = useState<number | 'All'>('All');
  const [isLoading, setIsLoading] = useState(false);
  const [averageRating, setAverageRating] = useState('0.0');
  const [totalReviewsCount, setTotalReviewsCount] = useState(0);
  const [ratingStats, setRatingStats] = useState({
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  });
  const [reviewsData, setReviewsData] = useState<any[]>([]);

  useEffect(() => {
    fetchReviews();
  }, [activeFilter]);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const filterValue = activeFilter === 'All' ? 'All' : activeFilter.toString();
      const response = await ProfileService.getMyReviews(filterValue);
      
      if (response?.code === "1") {
        const data = response?.data;
        
        let avgRating = data?.average?.[0]?.total_rating || 0;
        setAverageRating(Number(avgRating).toFixed(1));

        const r5 = Number(data?.avgRate5?.[0]?.five || 0);
        const r4 = Number(data?.avgRate4?.[0]?.four || 0);
        const r3 = Number(data?.avgRate3?.[0]?.three || 0);
        const r2 = Number(data?.avgRate2?.[0]?.two || 0);
        const r1 = Number(data?.avgRate1?.[0]?.one || 0);
        
        const total = r5 + r4 + r3 + r2 + r1;
        setTotalReviewsCount(total);
        
        setRatingStats({
          5: r5,
          4: r4,
          3: r3,
          2: r2,
          1: r1,
        });

        const mappedReviews = (data?.userRate || []).map((item: any, index: number) => ({
          id: index.toString(),
          name: item.full_name,
          rating: Number(item.rating),
          comment: item.review,
          image: item.profile_image && item.profile_image.startsWith('http') 
            ? { uri: item.profile_image } 
            : Images.userPlaceholder,
        }));
        setReviewsData(mappedReviews);
      }
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const goBack = () => {
    NavigationService.goBack();
  };

  const filters: (number | 'All')[] = ['All', 5, 4, 3, 2, 1];

  return {
    goBack,
    reviewsData,
    averageRating,
    totalReviewsCount,
    ratingStats,
    activeFilter,
    setActiveFilter,
    filters,
    isLoading,
  };
};
