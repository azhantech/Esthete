import useToggle from '../Hooks/useToggle';
import * as Yup from 'yup';
import {goBack} from '../Utils/navigation';
import {useContactUSMutation} from '../Redux/Services/User';
import {selectUser} from '../Redux/Slices/user';
import {useSelector} from 'react-redux';

const ContactUsFormValidator = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const useContactusController = () => {
  const [contactUS, {isLoading}] = useContactUSMutation();
  const user = useSelector(selectUser);

  const [open, setOpen, toggle] = useToggle();

  const initial = {
    name: user?.name ?? '',
    email: user?.email ?? '',
    subject: '',
    message: '',
  };
  const submit = (
    values: {
      email: string;
      message: string;
      name: string;
      subject: string;
    },
    {resetForm}: {resetForm: () => void},
  ) => {
    contactUS(values)
      .then(res => {
        console.log(
          'Response from ContactUS ===============================>',
          res?.data?.message,
        );
        resetForm();
        toggle();
      })
      .catch(err => {
        console.log('err from ContactUS ===============================>', err);
      });
  };

  return {
    validator: ContactUsFormValidator,
    values: {
      initial,
      open,
      loading: isLoading,
    },
    functions: {
      toggle,
      setOpen,
      goBack,
      submit,
    },
  };
};

export default useContactusController;
