import {useCallback} from 'react';
import useToggle from '../Hooks/useToggle';

const useOtherProfileController = () => {
  const [open, setOpen, toggle] = useToggle();

  const onSubmit = useCallback(() => {
    toggle();
  }, [open]);

  return {
    values: {
      open,
    },
    functions: {
      toggle,
      onSubmit,
      setOpen,
    },
  };
};

export default useOtherProfileController;
