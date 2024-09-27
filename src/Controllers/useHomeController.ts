import {useCallback} from 'react';
import useToggle from '../Hooks/useToggle';

const useHomeController = () => {
  const [open, setOpen, toggle] = useToggle();

  const [verificationPopup, setverificationPopup, verificationToggle] =
    useToggle();
  const onSubmit = useCallback(() => {
    toggle();
  }, [open]);

  return {
    values: {
      open,
      verificationPopup
    },
    functions: {
      toggle,
      onSubmit,
      setOpen,
      setverificationPopup,
      verificationToggle
    },
  };
};

export default useHomeController;
