import {useSelector} from 'react-redux';
import useToggle from '../Hooks/useToggle';
import {useCreateThreadMutation} from '../Redux/Services/CommunityForm';
import {goBack} from '../Utils/navigation';
import {RequestThreadFormValidator} from '../Utils/validator';
import {selectUser} from '../Redux/Slices/user';
import Toast from 'react-native-toast-message';

const initial = {
  title: '',
  details: '',
};

const useRequestNewThreadController = () => {
  const user = useSelector(selectUser);

  const [createThread, {isLoading}] = useCreateThreadMutation();
  const CancelRequest = () => {
    createThread({}).abort();
    goBack();
  };
  const onSubmit = values => {
    const data = {
      title: values.title,
      description: values.details,
      postedBy: user._id,
    };
    createThread(data)
      .unwrap()
      .then(res => {
        console.log('res', res);
        Toast.show({
          type: 'success',
          text1: 'Success',
          text2: res?.message,
        });
        goBack();
      })
      .catch(err => {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: err?.data?.message,
        });
      });
    // title,
    // description,
    // postedBy: id
    console.log('submit', data);
  };

  return {
    validator: RequestThreadFormValidator,
    values: {
      initial,
      isLoading,
    },
    functions: {
      goBack,
      onSubmit,
      CancelRequest,
    },
  };
};

export default useRequestNewThreadController;
