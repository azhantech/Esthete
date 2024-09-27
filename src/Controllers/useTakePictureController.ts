import {useCallback} from 'react';
import useToggle from '../Hooks/useToggle';
import {goBack} from '../Utils/navigation';

const useTakePictureController = () => {
  const [open, setOpen, toggle] = useToggle();

  const [SucessPopup, setSucessPopup, SucessToggle] = useToggle();
  const onSubmit = useCallback(() => {
    toggle();
  }, [open]);
  const onReTakeSubmit = useCallback(() => {
    SucessToggle();
  }, [SucessPopup]);
  return {
    values: {
      open,
      SucessPopup,
    },
    functions: {
      toggle,
      onSubmit,
      setOpen,
      setSucessPopup,
      SucessToggle,
      onReTakeSubmit,
      goBack
    },
  };
};

export default useTakePictureController;
