import { Dimensions, PixelRatio, Platform, StatusBar } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0
export const BOTTOMBAR_HEIGHT =
  ((Platform.OS === 'ios' ? initialWindowMetrics?.insets.bottom : 0) || 0) +
  (SCREEN_HEIGHT - STATUSBAR_HEIGHT) * 0.01 * 8;

export const vh = (Dimensions.get('window').height - STATUSBAR_HEIGHT) * 0.01
export const vw = Dimensions.get('window').width * 0.01

export const width = "90%"

export const appShadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
}

const widthBaseScale: number = SCREEN_WIDTH / 390;
const heightBaseScale: number = SCREEN_HEIGHT / 844;

function normalize(size: number, based: 'width' | 'height' = 'width'): number {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const heightPixel = (size: number): number => {
  return normalize(size, 'height');
};

export const widthPixel = (size: number): number => {
  return normalize(size, 'width');
};

export const font = (size: number): number => {
  return heightPixel(size);
};