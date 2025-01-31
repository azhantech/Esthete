import Toast from 'react-native-toast-message';
import {
  useGetProfileQuery,
  useUpdateImageMutation,
  useUpdateProfileMutation,
} from '../Redux/Services/User';
import {goBack, navigate} from '../Utils/navigation';

const useProfileController = () => {
  // const {data, isLoading, refetch} = useGetProfileQuery(
  //   {},

  //   {
  //     refetchOnFocus: true,
  //     refetchOnMountOrArgChange: true,
  //   },
  // );
  const [updateImage, {isLoading: updateImageLoader}] =
    useUpdateImageMutation();
  const [updateProfile, {isLoading: updateProfileLoader, isError}] =
    useUpdateProfileMutation();
  // user/update
  const navigateToEdit = () => navigate('EditProfile');
  const handleSubmit = data => {
    if (data.profile_image) {
      const formData = new FormData();
      formData.append('image', data?.profile_image);
      updateImage(formData).then(res => {
        console.log('response from update Image', res);
        data['profile_image'] = res?.data?.data?.path;
        console.log('response from update Image', data);
        updateProfile(data)
          .then(res => {
            // profile_image
            Toast.show({
              type: 'success',
              text1: 'Profile Updated',
              text2: 'Your profile has been updated successfully.',
            });
            console.log('response from update Profile', res);
            goBack();
          })
          .catch(err => {
            console.log('Error from update Profile', err);
          });
      });
    }
    else {
      updateProfile(data)
        .then(res => {
          Toast.show({
            type: 'success',
            text1: 'Profile Updated',
            text2: 'Your profile has been updated successfully.',
          });
          console.log('response from update Profile', res);
          goBack();
        })
        .catch(err => {
          console.log('Error from update Profile', err);
        });
    }
  };

  const navigateToChangePassword = () => navigate('ChangePassword');

  return {
    values: {
      updateProfileLoader,
    },
    functions: {
      navigateToEdit,
      navigateToChangePassword,

      handleSubmit,
    },
  };
};

export default useProfileController;
