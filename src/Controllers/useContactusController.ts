import useToggle from '../Hooks/useToggle';
import * as Yup from "yup"
import { goBack } from '../Utils/navigation';

const ContactUsFormValidator = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
})

const initial = {
    name: '',
    email: '',
    subject: '',
    message: ''
}

const useContactusController = () => {
    const [open, setOpen, toggle] = useToggle();

    return {
        validator: ContactUsFormValidator,
        values: {
            initial,
            open,
        },
        functions: {
            toggle,
            setOpen,
            goBack
        },
    };
};

export default useContactusController;
