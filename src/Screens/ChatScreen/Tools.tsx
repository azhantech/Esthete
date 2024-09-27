import { Image, TouchableOpacity, View } from 'react-native';
import {
  Bubble,
  Composer,
  InputToolbar,
  MessageText,
  Send,
} from 'react-native-gifted-chat';
import colors from '../../Utils/colors';
import { vh, vw } from '../../Utils/helpers';
import { icons } from '../../Assets/Images';
import fonts from '../../Assets/Fonts';
import CustomText from '../../component/Text';
import { styles } from './styles';
import RadioLabelButton from '../../component/RadioLabelButton';

export const renderInputToolbar = (props: any, toggleEmojiPicker: any) => {
  console.log('props ==?', props);

  return (
    <View
      style={{
        width: '100%',
        backgroundColor: colors.primary,
        height: vh * 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity style={styles.emojibtn} onPress={toggleEmojiPicker}>
        <Image source={icons.emoji} style={styles.emojiIcon} />
      </TouchableOpacity>
      <View
        style={{
          width: '80%',
          borderWidth: 1,
          borderColor: colors.white,
          borderRadius: vh,
        }}>
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: 'transparent',
            // borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: vh * 4,
            paddingHorizontal: vh * 1.5,
          }}
          primaryStyle={{ alignItems: 'center' }}
        />
      </View>
    </View>
  );
};

export const renderMessageText = props => {
  return (
    <MessageText
      {...props}
      containerStyle={{
        left: { backgroundColor: 'white' },
        right: { backgroundColor: '#DFF2FF' },
      }}
      textStyle={{
        left: { color: '#666666' },
        right: { color: '#666666' },
      }}
      customTextStyle={{
        fontSize: vh * 1.9,
        lineHeight: 24,
        fontFamily: fonts.Montserrat.regular,
      }}
    />
  );
};

export const renderChatFooter = () => {
  return (
    <View style={{
      width: '100%',
      backgroundColor: colors.primary,
      height: vh * 6,
      justifyContent: 'space-around',
      borderWidth: 1,
      borderColor: colors.white,
      flexDirection: 'row',
      alignItems: 'center',
    }}>
      <RadioLabelButton selected={true} label='Anonymous' />
      <RadioLabelButton selected={true} label='Private' />
    </View>
  );
};

export const renderBubble = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: vh * 0.5,
      }}>

      {/* Message Bubble */}
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            borderColor: colors.borderColor,
            borderWidth: 0.8,
            padding: vh * 0.5,
            backgroundColor: 'white',
            maxWidth: vw * 75, // Limiting the width of the message
            borderBottomRightRadius: vh * 2,
            borderBottomLeftRadius: vh * 2,
            borderTopRightRadius: vh * 2,
            borderTopLeftRadius: 0,
          },
          right: {
            borderColor: colors.borderColor,
            borderWidth: 0.8,
            padding: vh * 0.5,
            backgroundColor: '#DFF2FF',
            maxWidth: vw * 75,
            borderBottomRightRadius: vh * 2,
            borderBottomLeftRadius: vh * 2,
            borderTopRightRadius: 0,
            borderTopLeftRadius: vh * 2,
          },
        }}
        bottomContainerStyle={{
          left: { backgroundColor: 'white' },
          right: { backgroundColor: '#DFF2FF' },
        }}
        containerStyle={{
          left: { marginVertical: vh },
          right: { marginVertical: vh },
        }}
      />
    </View>
  );
};

export const renderComposer = (props: any) => (
  <Composer
    {...props}
    textInputStyle={{
      color: '#666666',
      marginBottom: 0,
    }}
  />
);

export const renderSend = (props: any) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    <Send
      {...props}
      containerStyle={{
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 4,
      }}>
      <Image
        style={{ width: vw * 7, height: vh * 7, resizeMode: 'contain' }}
        source={icons.send}
      />
    </Send>
  </View>
);
export const renderTime = props => {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: vw * 2 }}>
      <CustomText style={{ fontSize: vh * 1.5 }}>
        {props.currentMessage.createdAt.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </CustomText>
    </View>
  );
};
