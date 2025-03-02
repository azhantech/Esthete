import {Dimensions, PixelRatio, Platform, StatusBar} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';
import {dummyImages} from '../Assets/Images';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const STATUSBAR_HEIGHT = StatusBar.currentHeight || 0;
export const BOTTOMBAR_HEIGHT =
  ((Platform.OS === 'ios' ? initialWindowMetrics?.insets.bottom : 0) || 0) +
  (SCREEN_HEIGHT - STATUSBAR_HEIGHT) * 0.01 * 8;

export const vh = (Dimensions.get('window').height - STATUSBAR_HEIGHT) * 0.01;
export const vw = Dimensions.get('window').width * 0.01;

export const width = vw * 80;

export const appShadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.04,
  elevation: 5,
};

const widthBaseScale: number = SCREEN_WIDTH / 390;
const heightBaseScale: number = SCREEN_HEIGHT / 844;

function normalize(size: number, based: 'width' | 'height' = 'width'): number {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

export const heightPixel = (size: number): number => {
  return normalize(size, 'height');
};

export const widthPixel = (size: number): number => {
  return normalize(size, 'width');
};

export const font = (size: number): number => {
  return heightPixel(size);
};

export const skinConcerns = [
  {id: 1, text: 'Acne Scars', image: dummyImages.product_1},
  {id: 2, text: 'Black/WhiteHeads', image: dummyImages.skin.skinOily},
  {id: 3, text: 'Dark Undereyes', image: dummyImages.skin.skinDry},
  {id: 4, text: 'Dullness', image: dummyImages.skin.skinCombination},
  {id: 5, text: 'Hyper-Pigmentation', image: dummyImages.skin.skinAcne},
  {id: 6, text: 'Roughness', image: dummyImages.tone.Light},
  {id: 7, text: 'Large Pores', image: dummyImages.tone.Dark},
  {id: 8, text: 'Sensitivity', image: dummyImages.tone.MediumDark},
  {id: 9, text: 'Wrinkles', image: dummyImages.tone.Medium},
];
export const skinType = [
  {id: 1, text: 'Normal', image: dummyImages.skin.skinNormal},
  {id: 2, text: 'Dry', image: dummyImages.skin.skinDry},
  {id: 3, text: 'oily', image: dummyImages.skin.skinOily},
  {id: 4, text: 'Combination', image: dummyImages.skin.skinCombination},
  {id: 5, text: 'Acne', image: dummyImages.skin.skinAcne},
];

export const hairTypes = [
  {id: 1, text: 'Colly', image: dummyImages.hair.colly},
  {id: 2, text: 'Curly', image: dummyImages.hair.straight},
  {id: 3, text: 'Wavy', image: dummyImages.hair.curly},
  {id: 4, text: 'Straight', image: dummyImages.hair.straight},
];
export const hairConcern = [
  {id: 2, text: 'Hair Loss', image: dummyImages.hair.straight},
  {id: 1, text: 'Split Ends', image: dummyImages.hair.colly},
  {id: 3, text: 'Dandruff', image: dummyImages.hair.curly},
  {id: 4, text: 'Frizz', image: dummyImages.hair.straight},
  {id: 6, text: 'Dullness', image: dummyImages.hair.colly},
  {id: 5, text: 'Dryness', image: dummyImages.hair.colly},
];
export const hairColor = [
  {id: 1, text: 'Blonde', image: dummyImages.hair.straight},
  {id: 2, text: 'Black', image: dummyImages.hair.colly},
  {id: 3, text: 'Red', image: dummyImages.hair.curly},
];
export const skinTone = [
  {id: 1, text: 'Light', image: dummyImages.tone.Light},
  {id: 2, text: 'Medium', image: dummyImages.tone.MediumTone},
  {id: 5, text: 'Medium Dark', image: dummyImages.tone.MediumDark},
  {id: 6, text: 'Dark', image: dummyImages.tone.Dark},
];
