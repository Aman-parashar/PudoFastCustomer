import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { COLORS } from '../../../utils/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import styles from './styles';
import { useWebViewModel } from './WebViewModel';
import { Images } from '../../../utils/images';

const WebViewScreen = () => {
  const { title, url, loading, goBack, onLoadStart, onLoadEnd } = useWebViewModel();

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
        <Text style={styles.headerTitle}>{title}</Text>
        <View style={styles.headerRightPlaceholder} />
      </View>

      <View style={styles.webviewContainer}>
        <WebView
          source={{ uri: url }}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          style={styles.webview}
        />
        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={COLORS.PRIMARY} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default WebViewScreen;
