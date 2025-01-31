import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Image, View} from 'react-native';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import colors from '../../Utils/colors';
import CustomText from '../../component/Text';
import {dummyImages, icons} from '../../Assets/Images';
import Input from '../../component/Input';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {
  useCreateCommentMutation,
  useGetThreadByIdQuery,
} from '../../Redux/Services/CommunityForm';
import Toast from 'react-native-toast-message';
import {selectUser} from '../../Redux/Slices/user';
import {useSelector} from 'react-redux';

const CommunityForumAnswers = props => {
  const {data, isLoading, isError} = useGetThreadByIdQuery(
    props?.route?.params?.id,
    {
      refetchOnMountOrArgChange: true,
      refetchOnFocus: true,
    },
  );
  const user = useSelector(selectUser);

  const [comment, setComment] = React.useState(null);
  const [comments, setComments] = React.useState(data?.data?.comments || []);
  console.log(comments, 'comments');
  console.log(data?.data?.comments, 'comments');
  useEffect(() => {
    setComments(data?.data?.comments);
  }, [data?.data?.comments]);
  const [createComment, {isLoading: commentLoader}] =
    useCreateCommentMutation();
  const handleSubmit = () => {
    if (comment) {
      const newComment = {
        id: Date.now(),
        comment: comment,
        user: {
          _id: user._id,
          name: user.name,
        },
        createdAt: new Date().toISOString(),
      };

      const payload = {
        id: props?.route?.params?.id,
        body: {
          comment: comment,
        },
      };
      const updatedComments = [...(data?.data?.comments || []), newComment];
      setComments(updatedComments);
      data.data.comments = updatedComments;
      data.data.commentCount += 1;
      createComment(payload)
        .unwrap()
        .then(res => {
          console.log(res);
          setComment(null);
          Toast.show({
            type: 'success',
            text1: 'Comment added successfully',
          });
        })
        .catch(err => {
          console.log(err);
          Toast.show({
            type: 'error',
            text1: err?.data?.message,
          });
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please enter a comment',
      });
    }
  };

  const renderHeader = () => {
    return (
      <View style={styles.header_container}>
        <Image source={dummyImages.video_1} style={styles.image} />
        <View style={styles.question_container}>
          <CustomText weight="bold" style={styles.question}>
            {data?.data?.title}
          </CustomText>
          <View style={styles.total_answers_container}>
            <CustomText style={styles.total_answers_text}>
              {data?.data?.commentCount} Answer
            </CustomText>
            <View>
              <Image source={icons.messagesIcon} />
            </View>
          </View>
        </View>
        <CustomText style={styles.posted_by_text}>
          Original Post by {data?.data?.postedBy?.name}
        </CustomText>
        <CustomText>{data?.data?.description}</CustomText>
      </View>
    );
  };

  const renderItem = item => {
    return (
      <View style={styles.renderItem}>
        <CustomText weight="semiBold" style={styles.user_name}>
          {item?.user?.name}
        </CustomText>
        <CustomText>{item?.comment}</CustomText>
      </View>
    );
  };
  if (isLoading) {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return (
    <ScreenWrapper
      mainContainerStyles={styles.container}
      scroll
      contentContainerStyle={{
        alignItems: 'center',
        paddingBottom: 100,
        backgroundColor: colors.white,
      }}>
      {renderHeader()}
      {comments?.length > 0 ? (
        <View>{comments?.map((item: any) => renderItem(item))}</View>
      ) : (
        <View>
          <CustomText style={styles.no_answer_text}>
            No comments found
          </CustomText>
        </View>
      )}
      <Input
        right={icons.send}
        container_style={styles.input_container}
        placeholderTextColor={colors.white}
        placeholder="Write An Answer"
        input_wrapper={styles.input_style}
        style={styles.input_text_style}
        onPressRight={() => handleSubmit()}
        editable={true} // Ensure it is editable
        focusable={true} // Ensure it can receive focus
        onChangeText={setComment}
        value={comment}
      />
    </ScreenWrapper>
  );
};

export default CommunityForumAnswers;
