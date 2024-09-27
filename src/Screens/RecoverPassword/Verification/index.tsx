import {FC} from 'react';
import parent_styles from '../style';
import styles from './style';
import {Formik} from 'formik';
import {IForget} from '../../../Interfaces';
import useVerificationController from '../../../Controllers/useVerificationController';
import Input from '../../../component/Input';
import Button from '../../../component/Button';
import CustomText from '../../../component/Text';

const Verification: FC<IForget> = props => {
  const {validator, values, functions} = useVerificationController(props);

  return (
    <Formik
      validationSchema={validator}
      initialValues={values.initial}
      onSubmit={functions.onSubmit}
      validateOnChange={false}>
      {({handleChange, handleSubmit, values: data, errors}) => (
        <>
          <Input
            label="Verification Code"
            placeholder="Enter Verification Code"
            required
            type="number"
            value={data.code}
            onChangeText={handleChange('code')}
            error={errors?.code}
          />
          {/* <Row justify="space-between" style={styles.wrapper}>
                        <Text style={styles.text}>Resending in 00:50</Text>
                        </Row> */}
          <CustomText style={styles.text_button}>Resend Code</CustomText>
          <Button
            text={'CONTINUE'}
            style={parent_styles.button}
            onPress={handleSubmit}
          />
        </>
      )}
    </Formik>
  );
};

export default Verification;
