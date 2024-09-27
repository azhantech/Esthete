import React, {useState, useCallback, useEffect, useLayoutEffect} from 'react';
import {View, Platform, TouchableOpacity, Image} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import EmojiSelector from 'react-native-emoji-selector'; // Emoji picker
import {dummyImages, icons} from '../../Assets/Images'; // Assuming you have some assets here
import {
  renderBubble,
  renderChatFooter,
  renderComposer,
  renderInputToolbar,
  renderMessageText,
  renderSend,
} from './Tools';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {vh, vw} from '../../Utils/helpers';
import colors from '../../Utils/colors';
import ReportBlockModal from '../../component/ReportBlockModal';
import CustomText from '../../component/Text';
import {navigate} from '../../Utils/navigation';

export default function ChatScreen(props) {
  const [messages, setMessages] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // Emoji picker toggle
  const [modalVisible, setModalVisible] = useState(false);
  console.log('props?.route?.name ==>', props?.route?.params?.name);

  const navigation = useNavigation();

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <CustomText style={[styles.title]} weight="semiBold">
          {props?.route?.params?.name}
        </CustomText>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
          style={{
            height: vh * 3,
            width: vw * 10,
          }}>
          <Image source={icons.dots} style={styles.threeDots} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, modalVisible]);

  const options = [
    {
      text: 'Exit group',
      icon: icons.exitGrp,
      onPress: () => console.log('Here'),
    },
    {
      text: 'Clear chat',
      icon: icons.clearChat,
      onPress: () => console.log('Here'),
    },
  ];
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer My name is Molly Sam, How Are You?',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: dummyImages.dummyUser1,
        },
      },
      {
        _id: 3,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: dummyImages.dummyUser1,
        },
      },
      {
        _id: 2,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: dummyImages.dummyUser1,
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);
  console.log('modalVisible ==>', modalVisible);

  return (
    <View
      style={{
        flex: 1,
        // paddingHorizontal: vh * 2.5,
      }}>
      <GiftedChat
        messages={messages}
        renderInputToolbar={props =>
          renderInputToolbar(props, toggleEmojiPicker)
        }
        renderSend={renderSend}
        onSend={messages => onSend(messages)}
        renderBubble={renderBubble}
        showUserAvatar
        renderUsernameOnMessage
        renderTime={() => null}
        // renderUsername={renderUserName}
        renderComposer={renderComposer}
        renderAvatarOnTop
        onPressAvatar={() => navigate('OtherUserProfile')}
        renderChatFooter={renderChatFooter}
        renderMessageText={renderMessageText}
        alwaysShowSend
        bottomOffset={Platform.OS === 'ios' && 48.5}
        user={{
          _id: 1,
        }}
      />

      {/* {Platform.OS === 'android' && (
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={vh * 20}
        />
      )} */}
      {showEmojiPicker && (
        <EmojiSelector
          onEmojiSelected={emoji => {
            onSend([
              {
                _id: Math.random().toString(),
                text: emoji,
                createdAt: new Date(),
                user: {
                  _id: 1,
                  name: 'User',
                  avatar: 'https://placeimg.com/140/140/any',
                },
              },
            ]);
            setShowEmojiPicker(false); // Close the emoji picker after selecting
          }}
          columns={8}
        />
      )}
      <ReportBlockModal
        isVisible={modalVisible}
        options={options}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
