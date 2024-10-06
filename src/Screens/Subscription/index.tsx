import styles from './style';
import CustomText from '../../component/Text';
import {FlatList, ImageBackground, View} from 'react-native';
import {backgroundImages} from '../../Assets/Images';
import Button from '../../component/Button';
import {ScreenWrapper} from '../../component/ScreenWrapper';
import {Formik} from 'formik';
import useSubscriptionController from '../../Controllers/useSubscriptionController';
import Input from '../../component/Input';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {navigate} from '../../Utils/navigation';

const DATA = [
  {
    id: '1',
    package_name: 'Premium',
    features: [
      {
        id: '1',
        feature: 'Feature A (lorem lipsum dolor)',
      },
      {
        id: '2',
        feature: 'Feature A (lorem lipsum dolor sit amit)',
      },
      {
        id: '3',
        feature: 'Feature A (lorem lipsum dolor sit amit)',
      },
      {
        id: '4',
        feature: 'Feature A (lorem dolor)',
      },
    ],
    price: '$ 123/Month',
  },
  {
    id: '2',
    package_name: 'Freemium',
    features: [
      {
        id: '1',
        feature: 'Feature A (lorem lipsum dolor)',
      },
      {
        id: '2',
        feature: 'Feature A (lorem lipsum dolor sit amit)',
      },
      {
        id: '3',
        feature: 'Feature A (lorem lipsum dolor sit amit)',
      },
      {
        id: '4',
        feature: 'Feature A (lorem dolor)',
      },
    ],
    price: '$ 123/Month',
  },
];

const Subscription = () => {
  const {validator, values, functions} = useSubscriptionController();

  const renderForm = () => (
    <Formik
      initialValues={values.initial}
      validationSchema={validator}
      onSubmit={values => {
        navigate('ProfileQuestionnaireNavigator', {
          screen: 'ProfileCompletion',
        });
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values: data,
        errors,
        touched,
      }) => (
        <KeyboardAwareScrollView style={styles.form_wrapper}>
          <Input
            label="Card Number"
            placeholder="Card Number"
            required
            value={data.card_number}
            onChangeText={handleChange('card_number')}
            onBlur={handleBlur('card_number')}
            keyboardType="numeric"
            container_style={styles.input_spacing}
          />
          {touched.card_number && errors.card_number && (
            <CustomText style={styles.error}>{errors.card_number}</CustomText>
          )}

          <Input
            label="Cardholder Name"
            placeholder="Cardholder Name"
            required
            value={data.card_holder_name}
            onChangeText={handleChange('card_holder_name')}
            container_style={styles.input_spacing}
            onBlur={handleBlur('card_holder_name')}
          />
          {touched.card_holder_name && errors.card_holder_name && (
            <CustomText style={styles.error}>
              {errors.card_holder_name}
            </CustomText>
          )}

          <Input
            label="Expiry Date"
            placeholder="Expiry Date"
            required
            value={data.expiry_date}
            onChangeText={handleChange('expiry_date')}
            onBlur={handleBlur('expiry_date')}
            container_style={styles.input_spacing}
          />
          {touched.expiry_date && errors.expiry_date && (
            <CustomText style={styles.error}>{errors.expiry_date}</CustomText>
          )}

          <Input
            label="CVV"
            placeholder="CVV"
            required
            value={data.cvv_number}
            onChangeText={handleChange('cvv_number')}
            onBlur={handleBlur('cvv_number')}
            keyboardType="number-pad"
            container_style={styles.input_spacing}
          />
          {touched.cvv_number && errors.cvv_number && (
            <CustomText style={styles.error}>{errors.cvv_number}</CustomText>
          )}

          <Button
            text="Subscribe Now"
            onPress={handleSubmit}
            style={styles.button}
          />
        </KeyboardAwareScrollView>
      )}
    </Formik>
  );

  const renderPackages = ({item}: any) => (
    <View style={styles.package_container}>
      <View style={styles.row}>
        <View style={styles.dot} />
        <CustomText style={styles.package_name} weight="semiBold">
          {item.package_name}
        </CustomText>
      </View>
      {item.features.map((feature: any) => (
        <CustomText key={feature.id + item.id} style={styles.feature_text}>
          {feature.feature}
        </CustomText>
      ))}
      <CustomText weight="semiBold" style={styles.price_text}>
        {item.price}
      </CustomText>
    </View>
  );

  const packageSeperator = () => <View style={styles.seperator} />;

  return (
    <ScreenWrapper style={styles.container}>
      <ImageBackground
        style={styles.package_wrapper}
        source={backgroundImages.subscription}>
        <CustomText style={styles.title}>Subscription Package</CustomText>
        <View style={styles.package_list_container}>
          <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={renderPackages}
            ItemSeparatorComponent={packageSeperator}
          />
        </View>
      </ImageBackground>
      {renderForm()}
    </ScreenWrapper>
  );
};

export default Subscription;
