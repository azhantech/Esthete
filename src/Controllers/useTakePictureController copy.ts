import {useCallback, useState} from 'react';
import useToggle from '../Hooks/useToggle';
import {goBack} from '../Utils/navigation';
import {
  useUpdateProfileMutation,
  useUploadImageMutation,
} from '../Redux/Services/User';
import {launchCamera} from 'react-native-image-picker';
import Toast from 'react-native-toast-message';

// import {launchCamera} from 'react-native-image-picker';
import {request, PERMISSIONS} from 'react-native-permissions';

const useTakePictureController = (data: any) => {
  const [open, setOpen, toggle] = useToggle();
  const [image, setImage] = useState('');
  const [SucessPopup, setSucessPopup, SucessToggle] = useToggle();
  const [uploadImage, {isLoading: isLoadingUpload}] = useUploadImageMutation();

  const onSubmit = useCallback(() => {
    // toggle();
    if (!image) {
      Toast.show({
        text1: 'Error',
        text2: 'Please upload an image',
        type: 'error',
      });
      return;
    }
    const formData = new FormData();
    formData.append('image', {
      uri: image?.uri,
      type: image?.type,
      name: image?.name,
    });

    uploadImage(formData)
      .unwrap()
      .then(res => {
        console.log('res from upload image', res);
        const body = {
          ...data,
          image: res?.path,
        };
      })
      .catch(err => {
        console.log('Error from upload image -------->', err);
      });
  }, [open, image]);

  const onReTakeSubmit = useCallback(() => {
    SucessToggle();
  }, [SucessPopup]);

  const handleUploadImage = async () => {
    try {
      const status = await request(PERMISSIONS.IOS.CAMERA);
      if (status === 'granted') {
        let options = {
          mediaType: 'photo',
          quality: 0.3,
          includeBase64: false,
          saveToPhotos: false,
        };

        const result = await launchCamera(options);
        if (result.assets && result.assets[0]) {
          let _res = result.assets[0];
          let _img = {
            uri: _res.uri,
            type: _res.type,
            name: _res.fileName,
          };
          setImage(_img);
        }
      } else {
        Toast.show({
          text1: 'Error',
          text2: 'Please allow camera permission to continue',
          type: 'error',
        });
      }
    } catch (e) {
      console.log('Error capturing image:', e);
    }
  };

  return {
    values: {
      open,
      SucessPopup,
      image,
      isLoading,
    },
    functions: {
      toggle,
      onSubmit,
      setOpen,
      setSucessPopup,
      SucessToggle,
      onReTakeSubmit,
      goBack,
      handleUploadImage,
      setImage,
    },
  };
};

export default useTakePictureController;
