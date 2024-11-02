import React from 'react';
import {FlatList, Image, View} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import colors from '../../Utils/colors';
import CustomText from '../../component/Text';
import {dummyImages, icons} from '../../Assets/Images';
import Input from '../../component/Input';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';

const CommunityForumAnswers = () => {
  const renderHeader = () => {
    return (
      <View style={styles.header_container}>
        <Image source={dummyImages.video_1} style={styles.image} />
        <View style={styles.question_container}>
          <CustomText weight="bold" style={styles.question}>
            Best Moisturizers for Dry Skin
          </CustomText>
          <View style={styles.total_answers_container}>
            <CustomText style={styles.total_answers_text}>
              800 Answer
            </CustomText>
            <View>
              <Image source={icons.messagesIcon} />
            </View>
          </View>
        </View>
        <CustomText style={styles.posted_by_text}>
          Original Post by User123
        </CustomText>
        <CustomText>
          I've found that XYZ moisturizer works really well for my dry skin. Has
          anyone else tried it?
        </CustomText>
      </View>
    );
  };

  const renderItem = () => {
    return (
      <View style={styles.renderItem}>
        <CustomText weight="semiBold" style={styles.user_name}>
          User 123
        </CustomText>
        <CustomText>
          I tried it and it didn't work for me. I preferABC sit moisturize lorem
          lipsum.
        </CustomText>
      </View>
    );
  };

  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <KeyboardAwareFlatList
        data={[1, 2, 3, 4]}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeperator}
        style={{flex: 1, backgroundColor: colors.white}}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Input
            right={icons.send}
            container_style={styles.input_container}
            placeholderTextColor={colors.white}
            placeholder="Write An Answer"
            input_wrapper={styles.input_style}
            style={styles.input_text_style}
            onPressRight={() => {}}
            editable={true} // Ensure it is editable
            focusable={true} // Ensure it can receive focus
            onChangeText={(val) => console.log("Val ===>", val)
            }
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default CommunityForumAnswers;
