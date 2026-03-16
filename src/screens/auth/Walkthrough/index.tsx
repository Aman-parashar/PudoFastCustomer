import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import styles, { width } from './styles';
import { useWalkthroughViewModel } from './WalkthroughViewModel';
import { Images } from '../../../utils/images';

import { dimensions } from '../../../utils/constant';
import { Button } from '../../../components/common/Button';
import { FONTS } from '../../../utils/fonts';
import Container from '../../../components/common/Container';

const WalkthroughScreen = () => {
  const {
    currentIndex,
    flatListRef,
    handleNext,
    handleSkip,
    onScrollEnd,
    walkthroughData,
  } = useWalkthroughViewModel();

  const renderItem = ({ item, index }: any) => (
    <View style={styles.slide}>
      <View style={{ height: dimensions.height * 0.3, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={item.image}
          style={styles.mainImage}
          resizeMode="contain"
        />
      </View>
      <View style={{ height: dimensions.height * 0.1 }} />
      <View style={styles.bottomContainer}>
        <Image
          source={Images.tutorialBottomImage}
          style={styles.bottomBg}
          resizeMode="stretch"
        />

        <View style={styles.content}>
          <Image
            source={item.countImage}
            style={styles.countImage}
            resizeMode="contain"
          />

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Button title={index === walkthroughData.length - 1 ? 'GET STARTED' : 'NEXT'} onPress={handleNext} style={{ width: '70%', marginTop: 10 }} textStyle={{ fontFamily: FONTS.SANTRAL_BOLD }} />


          {index < walkthroughData.length - 1 && (
            <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
              <Text style={styles.skipText}>SKIP</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={walkthroughData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          onScrollEnd(index);
        }}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default WalkthroughScreen;
