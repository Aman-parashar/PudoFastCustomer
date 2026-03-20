import { useState, useRef } from 'react';
import { FlatList } from 'react-native';
import NavigationService from '../../../navigation/NavigationService';
import { RouteConstant } from '../../../navigation/Constant';
import { Images } from '../../../utils/images';

export const walkthroughData = [
  {
    id: '1',
    title: 'Pickup Parcel TEXT',
    description:
      'Sit back and relax while we take care of your delivery needs. Schedule a pickup, and a PUDO Driver will be at your service.',
    image: Images.tutorialImageOne,
    countImage: Images.one,
  },
  {
    id: '2',
    title: 'GOING TO DELIVERY TEXT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis at mauris vehicula',
    image: Images.tutorialImageTwo,
    countImage: Images.two,
  },
  {
    id: '3',
    title: 'PARCEL DELIVERED TEXT',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed felis at mauris vehicula',
    image: Images.tutorialImageThree,
    countImage: Images.three,
  },
];

export const useWalkthroughViewModel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < walkthroughData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      NavigationService.navigate(RouteConstant.Start);
    }
  };

  const handleSkip = () => {
    NavigationService.navigate(RouteConstant.Start);
  };

  const onScrollEnd = (index: number) => {
    setCurrentIndex(index);
  };

  return {
    currentIndex,
    flatListRef,
    handleNext,
    handleSkip,
    onScrollEnd,
    walkthroughData,
  };
};
