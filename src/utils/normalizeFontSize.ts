import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const BASE_WIDTH = 375;

export const normalizeFontSize = (size: number): number => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  const newSize = size * scale;

  if (Platform.OS === 'web') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize * 0.3));
  }

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
