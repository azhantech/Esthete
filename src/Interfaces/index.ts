import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {Dispatch, ReactNode, SetStateAction} from 'react';
import {
  ImageRequireSource,
  ImageSourcePropType,
  ScrollViewProps,
  StyleProp,
  TextInput,
  TextProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface IText extends TextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  underline?: boolean;
}
export interface IModal {
  open?: boolean;
  close?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  text?: string;
  text1?: string;
  buttons?: any[];
  onClose?: () => void;
  icon?: ImageSourcePropType | boolean;
  btnIcon?: ImageSourcePropType | boolean;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  multiline?: boolean;
  placeholder?: string;
  onRequestClose?: () => void;
  row?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonsWrapperStyle?: StyleProp<ViewStyle>;
  modalView?: StyleProp<ViewStyle>;
  input_wrapper?: StyleProp<ViewStyle>;
  input: boolean;
  headingStyle?: StyleProp<TextStyle>;
}
export interface ISuggestedGroupModal {
  open?: boolean;
  close?: boolean;
  setOpen?: Dispatch<SetStateAction<boolean>>;
  title?: string;
  text?: string;
  text1?: string;
  buttons?: any[];
  onClose?: () => void;
  icon?: ImageSourcePropType | boolean;
  btnIcon?: ImageSourcePropType | boolean;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  multiline?: boolean;
  placeholder?: string;
  onRequestClose?: () => void;
  row?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonsWrapperStyle?: StyleProp<ViewStyle>;
  modalView?: StyleProp<ViewStyle>;
  input: boolean;
  headingStyle?: StyleProp<TextStyle>;
}
export type ITabBar = BottomTabBarProps;
export interface IInput extends TextInput {
  label?: string;
  required?: boolean;
  placeholder: string;
  type?: string;
  left?: ImageRequireSource;
  right?: ImageRequireSource;
  multiline?: boolean;
  value?: string;
  input_wrapper: StyleProp<ViewProps>;
}

export interface IScreenWrapper extends ViewProps, ScrollViewProps {
  scroll?: boolean;
  children?: ReactNode;
  mainContainerStyles?: StyleProp<ViewStyle>;
}

export interface RadioLabelButtonProps {
  selected: boolean;
  label?: string;
}
export interface RadioButtonProps {
  selected: boolean;
}
export interface GroupCardProps {
  image: any;
  title: string;
  description: string;
  onJoin: () => void;
  imageContainer: StyleProp<ViewStyle>;
  rating: number;
  common: boolean;
}
