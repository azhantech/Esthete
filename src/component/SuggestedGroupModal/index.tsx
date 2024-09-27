import { FC, memo } from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  Modal as RModal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { dummyImages, icons } from '../../Assets/Images';
import { ISuggestedGroupModal } from '../../Interfaces';
import Text from '../Text';
import styles from './style';
import { useKeyboardVisible } from '../../Hooks/useKeyboardVisible';

import { vh } from '../../Utils/helpers';
import GroupCard from '../GroupCard';

const SuggestedGroupModal: FC<ISuggestedGroupModal> = props => {
  const {
    open,
    setOpen,
    title = '',
    onRequestClose,
    headingStyle,
    close
  } = props;

  const isVisible = useKeyboardVisible();

  const groupsData = [
    {
      id: '1',
      image: dummyImages.dummyUser1,
      title: 'My Mental (Healthy Mind)',
      description: '22k Members 10+ Posts A Day',
    },
    {
      id: '2',
      image: dummyImages.dummyUser2,
      title: 'Body Bliss (Healthy Body)',
      description: '22k Members 10+ Posts A Day',
    },
    {
      id: '3',
      image: dummyImages.dummyUser2,
      title: 'Body Bliss (Healthy Body)',
      description: '22k Members 10+ Posts A Day',
    },
    {
      id: '4',
      image: dummyImages.dummyUser2,
      title: 'Body Bliss (Healthy Body)',
      description: '22k Members 10+ Posts A Day',
    },
    // Add more groups here if necessary
  ];

  const renderGroupItem = ({ item }) => (
    <GroupCard
      image={item.image}
      title={item.title}
      description={item.description}
      onJoin={() => { }}
    />
  );

  return (
    <RModal
      animationType="fade"
      transparent={true}
      visible={open}
      statusBarTranslucent
      onRequestClose={onRequestClose}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.centeredView}>
          <View
            style={[
              styles.modalView,
              { marginBottom: isVisible ? vh * 18 : 0 },
            ]}>
            {!close && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.cancel_button}
                onPress={() => {
                  setOpen(!open);
                }}>
                <Image source={icons.cross} style={styles.cross_icon} />
              </TouchableOpacity>
            )}

            <View style={styles.itemsWrapper}>
              <View style={styles.header}>
                <Text style={[styles.heading, headingStyle]} weight="bold">
                  {title}
                </Text>
              </View>

              <FlatList
                data={groupsData}
                renderItem={renderGroupItem}
                style={{ height: vh * 50, marginHorizontal: vh * 3 }}
                contentContainerStyle={{ paddingVertical: vh * 2 }}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </RModal>
  );
};

export default memo(SuggestedGroupModal);
