import {View, Text, ScrollView, ViewProps, ScrollViewProps} from 'react-native';
import React, {FC, ReactNode} from 'react';
import {IScreenWrapper} from '../../Interfaces'; // Assuming you have an interface for props
import {styles} from './styles'
// Update the IScreenWrapper interface with the necessary props

export const ScreenWrapper: FC<IScreenWrapper> = ({
  scroll,
  children,
  mainContainerStyles,
  ...rest
}) => {
  const Wrapper = scroll ? ScrollView : View;
  return (
    <Wrapper {...rest} style={[styles.ContainerStyles, mainContainerStyles]}>
      {children}
    </Wrapper>
  );
};
