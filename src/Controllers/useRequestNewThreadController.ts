import useToggle from '../Hooks/useToggle';
import { goBack } from '../Utils/navigation';
import { RequestThreadFormValidator } from '../Utils/validator';

const initial = {
    title: '',
    details: '',
}

const useRequestNewThreadController = () => {

    return {
        validator: RequestThreadFormValidator,
        values: {
            initial,
        },
        functions: {
            goBack
        },
    };
};

export default useRequestNewThreadController;
