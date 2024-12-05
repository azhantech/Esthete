import {FC} from 'react';
import styles from '../style';
import {IForget} from '../../../Interfaces';
import useForgotPasswordController from '../../../Controllers/useForgotPasswordController';
import {Formik} from 'formik';
import Input from '../../../component/Input';
import Button from '../../../component/Button';

const ForgotPassword: FC<IForget> = props => {
  const {
    validator,
    values: forgotPasswordValues,
    functions,
  } = useForgotPasswordController(props);

  return (
    <Formik
      validationSchema={validator}
      initialValues={forgotPasswordValues.initial}
      onSubmit={functions.onSubmit}
      validateOnChange={false}>
      {({handleChange, handleSubmit, values: data, errors}) => (
        <>
          <Input
            label="Email Address"
            placeholder="Enter Email Address"
            required
            type="email"
            value={data.email}
            onChangeText={handleChange('email')}
            error={errors.email}
          />
          <Button
            text={'CONTINUE'}
            style={styles.button}
            onPress={handleSubmit}
            isLoading={forgotPasswordValues.loading}
          />
        </>
      )}
    </Formik>
  );
};

export default ForgotPassword;
