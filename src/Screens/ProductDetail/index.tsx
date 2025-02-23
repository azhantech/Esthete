import React from 'react';
import {styles} from './styles';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import RecommendationCard from '../../component/RecommendationCard';
import CustomText from '../../component/Text';
import {ActivityIndicator, View} from 'react-native';
import Button from '../../component/Button';
import Modal from '../../component/Modal';
import {icons} from '../../Assets/Images';
import useToggle from '../../Hooks/useToggle';
import {goBack} from '../../Utils/navigation';
import {
  useAcceptProductMutation,
  useGetProductsByIdQuery,
  useGetProductsQuery,
  useRejectProductMutation,
} from '../../Redux/Services/User';
import colors from '../../Utils/colors';
import {useSelector} from 'react-redux';
import {selectUser} from '../../Redux/Slices/user';

const ProductDetail = ({route}: any) => {
  const item = route?.params?.item;
  const user = useSelector(selectUser);

  const [open, setOpen, toggle] = useToggle();
  const [visible, setVisible, visibility] = useToggle();
  const [acceptProduct, {isLoading: acceptLoading}] =
    useAcceptProductMutation();
  const [rejectProduct, {isLoading: rejectLoading}] =
    useRejectProductMutation();

  // console.log('item', item);
  const {data, isLoading, isError} = useGetProductsByIdQuery({id: item?._id});

  const handleAccept = () => {
    // setVisible();
    acceptProduct({productId: item?._id})
      .unwrap()
      .then(res => {
        // setVisible();
        toggle();
      })
      .catch(err => {
        console.log('err', err);
      });
  };
  const handleReject = () => {
    rejectProduct({productId: item?._id})
      .unwrap()
      .then(res => {
        // setVisible();
        visibility();
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  if (isLoading) {
    return (
      <View style={styles.loading_view}>
        <ActivityIndicator size={'large'} color={colors.primary} />
      </View>
    );
  }
  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <RecommendationCard item={item} />

      <View style={styles.content_view}>
        <CustomText weight="semiBold" style={styles.label}>
          Ingredients
        </CustomText>
        <CustomText style={styles.value}>{data?.data?.ingredients}</CustomText>
        <CustomText weight="semiBold" style={styles.label}>
          Benefits
        </CustomText>
        <CustomText style={styles.value}>{data?.data?.benefits}</CustomText>

        {!data?.data?.saved && (
          <View style={styles.button_view}>
            <View style={styles.button_container}>
              <Button
                text="Accept"
                onPress={handleAccept}
                isLoading={acceptLoading}
                disabled={acceptLoading || rejectLoading}
              />
            </View>
            <View style={styles.button_container}>
              <Button
                text="Reject"
                onPress={handleReject}
                style={styles.button}
                textStyle={styles.button_text}
                disabled={acceptLoading || rejectLoading}
                isLoading={rejectLoading}
              />
            </View>
          </View>
        )}
      </View>
      <Modal
        open={open}
        setOpen={setOpen}
        icon={icons.success}
        title="Action Successful"
        text="The approved product has been added to “Saved Products” List"
        buttons={[{text: 'Ok', onPress: goBack}]}
      />
      <Modal
        open={visible}
        setOpen={setVisible}
        icon={icons.success}
        title="Reject Successful"
        text="The product has been rejected successfully."
        buttons={[{text: 'Ok', onPress: goBack}]}
      />
    </ScreenWrapper>
  );
};

export default ProductDetail;
