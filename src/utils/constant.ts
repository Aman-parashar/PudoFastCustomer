import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  width,
  height,
};


export const landscapeMode = 'landscape';
export const portraitMode = 'portrait';
export const pricePerMile = 1.5;
export const STRIPE_PUBLISHABLE_KEY =
  'pk_live_51RRw12KK7KsIbaa0Ypr2fc4y1dRWFu7GD6hkltedR9as33JlJWooEoNmPOFkk28HQOQ0jQC5zTuQxPhLcBEBKqyX00dALFwrx2';
export const backGroundImage = {
  height: dimensions.height * 0.3,
  width: dimensions.width,
};
