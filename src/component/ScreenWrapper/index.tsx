import {View, ScrollView} from 'react-native';
import React, {FC} from 'react';
import {IScreenWrapper} from '../../Interfaces';
import {styles} from './styles';

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
