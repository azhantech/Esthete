import React, {useEffect} from 'react';
import {
  FlatList,
  Image,
  RefreshControl,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import Input from '../../component/Input';
import {dummyImages, icons} from '../../Assets/Images';
import {heightPixel, width} from '../../Utils/helpers';
import colors from '../../Utils/colors';
import CustomText from '../../component/Text';
import Button from '../../component/Button';
import {navigate} from '../../Utils/navigation';
import {useGetThreadQuery} from '../../Redux/Services/CommunityForm';
import {useIsFocused} from '@react-navigation/native';

const CommunityForum = () => {
  const {data, isLoading, isError, refetch} = useGetThreadQuery(
    {},
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    },
  );
  const isFocused = useIsFocused();
  useEffect(() => {
    refetch();
  }, [isFocused]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigate('CommunityForumAnswers', {id: item._id})}
        style={styles.renderItem}>
        <Image
          source={dummyImages.communityForum.community1}
          style={styles.image}
        />
        <View style={styles.detailsContainer}>
          <CustomText weight="semiBold" style={styles.title}>
            {item?.title}
          </CustomText>
          <CustomText
            weight="regular"
            style={styles.detailsTxt}
            numberOfLines={2}>
            {item?.description}
          </CustomText>
          <View style={styles.bottomContainer}>
            <CustomText weight="regular" style={styles.answerTxt}>
              {item?.commentCount} Answer
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
      <View>
        <FlatList
          refreshing={isLoading}
          showsVerticalScrollIndicator={false}
          style={{
            flexGrow: 1,
          }}
          contentContainerStyle={{
            paddingBottom: heightPixel(120),
          }}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => {}}
              tintColor={'#000'}
            />
          }
          data={data?.data ?? []}
          keyExtractor={item => (item?._id + Math.random()).toString()}
          renderItem={renderItem}
          ListFooterComponent={() => (
            <Button
              onPress={() => navigate('RequestNewThread')}
              text="Request New Thread"
              style={styles.btn}
            />
          )}
        />
      </View>
      {/* <Button
        onPress={() => navigate('RequestNewThread')}
        text="Request New Thread"
        style={styles.btn}
      /> */}
      {/* <FlatList
        data={[]}
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
      /> */}
    </ScreenWrapper>
  );
};

export default CommunityForum;
