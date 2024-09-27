import {Formik} from 'formik';
import styles from '../style';
import useSetPasswordController from '../../../Controllers/useSetPasswordController';
import Input from '../../../component/Input';
import Button from '../../../component/Button';
import Modal from '../../../component/Modal';

const SetPassword = () => {
  const {validator, values, functions} = useSetPasswordController();

  return (
    <>
      <Formik
        validationSchema={validator}
        initialValues={values.initial}
        onSubmit={functions.onSubmit}
        validateOnChange={false}>
        {({handleChange, handleSubmit, values: data, errors}) => (
          <>
            <Input
              label="New Password"
              placeholder="Enter New Password"
              required
              type="password"
              value={data.password}
              onChangeText={handleChange('password')}
              error={errors?.password}
            />
            <Input
              label="Confirm Password"
              placeholder="Confirm Password"
              required
              type="password"
              value={data.confirm_password}
              onChangeText={handleChange('confirm_password')}
              error={errors?.confirm_password}
            />
            <Button
              text={'UPDATE'}
              style={styles.button}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Modal
        open={values.open}
        setOpen={functions.setOpen}
        title="Password Reset"
        text="Your password has been reset successfully. Please Login to continue"
        buttons={[{text: 'Ok', onPress: functions.onSuccess}]}
      />
    </>
  );
};

export default SetPassword;
