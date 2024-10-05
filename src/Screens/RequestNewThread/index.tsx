import {ScreenWrapper} from '../../component/ScreenWrapper';
import styles from './style';
import {Formik} from 'formik';
import Input from '../../component/Input';
import Button from '../../component/Button';
import CustomText from '../../component/Text';
import useRequestNewThreadController from '../../Controllers/useRequestNewThreadController';
import {View} from 'react-native';
import {goBack} from '../../Utils/navigation';
import ScrollView from '../../component/ScrollView';

const RequestNewThread = () => {
  const {validator, values, functions} = useRequestNewThreadController();

  return (
    <ScreenWrapper mainContainerStyles={styles.container}>
      <View style={styles.title_container}>
        <CustomText style={styles.title}>Request New Thread</CustomText>
        <View style={styles.line} />
      </View>
      <Formik
        validationSchema={validator}
        initialValues={values.initial}
        onSubmit={() => {}}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values: data,
          errors,
          touched,
        }) => (
          <ScrollView>
            <Input
              label="Thread Title"
              placeholder="Enter Thread Title"
              required
              value={data.title}
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
            />
            {touched.title && errors.title && (
              <CustomText style={styles.error}>{errors.title}</CustomText>
            )}

            <Input
              label="Mention Post Details"
              placeholder="Mention post details"
              required
              multiline
              value={data.details}
              onChangeText={handleChange('details')}
              onBlur={handleBlur('details')}
            />
            {touched.details && errors.details && (
              <CustomText style={styles.error}>{errors.details}</CustomText>
            )}

            <View style={styles.button_view}>
              <View style={styles.button_container}>
                <Button text="Submit" onPress={handleSubmit} />
              </View>
              <View style={styles.button_container}>
                <Button
                  text="Cancel"
                  onPress={goBack}
                  style={styles.button}
                  textStyle={styles.button_text}
                />
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </ScreenWrapper>
  );
};

export default RequestNewThread;
