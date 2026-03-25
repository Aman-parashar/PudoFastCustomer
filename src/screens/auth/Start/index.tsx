import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { useStartViewModel } from './StartViewModel';
import { Images } from '../../../utils/images';
import Container from '../../../components/common/Container';

const StartScreen = () => {
  const { navigateToLogin, navigateToSignUp } = useStartViewModel();

  return (
    <Container>
      <Image
        source={Images.lunchBGImage}
        style={styles.bgImage}
        resizeMode="cover"
      />

      <View style={styles.content}>
        {/* Logo stays at top */}
        <Image
          source={Images.welcomeLogoImage}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Bottom group: welcome text + buttons */}
        <View style={styles.bottomGroup}>
          <View style={styles.textContainer}>
            <Text style={styles.welcome}>WELCOME</Text>
            <Text style={styles.description}>
              Efficient delivery made easy. No more missed deliveries or endless
              wait times.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={navigateToLogin}
            >
              <Text style={styles.loginText}>LOG IN</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={navigateToSignUp}
            >
              <Text style={styles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default StartScreen;
