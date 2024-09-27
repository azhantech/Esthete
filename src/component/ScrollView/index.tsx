import {FC, memo} from 'react';
import {IScrollView} from '../../Interfaces';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ScrollView: FC<IScrollView> = props => {
  const {children, style} = props;

  return (
    <KeyboardAwareScrollView
      enableOnAndroid
      showsVerticalScrollIndicator={false}
      contentContainerStyle={style}>
      {children}
    </KeyboardAwareScrollView>
  );
};

export default memo(ScrollView);
