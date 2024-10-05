import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import Input from '../../component/Input';
import {dummyImages, icons} from '../../Assets/Images';
import {width} from '../../Utils/helpers';
import colors from '../../Utils/colors';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import {navigate} from '../../Utils/navigation';

const CommunityForum = () => {
  const renderItem = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('CommunityForumAnswers')}
        style={styles.renderItem}>
        <Image
          source={dummyImages.communityForum.community1}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <CustomText weight="semiBold" style={styles.title}>
            How to Reduce Acne Scars
          </CustomText>
          <CustomText weight="regular" style={styles.detailsTxt}>
            Lorem Ipsum is simply dummy text the printing ad typesetting
            industry.
          </CustomText>
          <View style={styles.bottomContainer}>
            <CustomText weight="regular" style={styles.answerTxt}>
              800 Answer
            </CustomText>
            <TouchableOpacity>
              <Image source={icons.messagesIcon} style={styles.iconStyle} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <Input
        placeholder="Search"
        required
        onChangeText={val => console.log('Val ==>', val)}
        right={icons.search_round}
        container_style={{
          width: width,
        }}
      />

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        renderItem={renderItem}
        style={{flex: 1, backgroundColor: colors.white}}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <Button
            onPress={() => navigate('RequestNewThread')}
            text="Request New Thread"
            style={styles.btn}
          />
        )}
      />
    </ScreenWrapper>
  );
};

export default CommunityForum;
