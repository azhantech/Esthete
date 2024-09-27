
import { Formik } from "formik"
import styles from "./style"
import { ScreenWrapper } from "../../component/ScreenWrapper"
import Input from "../../component/Input"
import Button from "../../component/Button"
import Modal from "../../component/Modal"
import useChangePasswordController from "../../Controllers/useChangePasswordController"
import { icons } from "../../Assets/Images"
import CustomText from "../../component/Text"
import colors from "../../Utils/colors"

const ChangePassword = () => {

    const { validator, values, functions } = useChangePasswordController()

    return (
        <ScreenWrapper mainContainerStyles={styles.container}>
            <Formik
                validationSchema={validator}
                initialValues={values.initial}
                onSubmit={functions.toggle}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values: data,
                    errors,
                    touched,
                }) => (
                    <>
                        <Input
                            label="Current Password"
                            placeholder="Enter Current Password"
                            required
                            type="password"
                            value={data?.current_password}
                            onChangeText={handleChange("current_password")}
                            onBlur={handleBlur('current_password')}
                        />
                        {touched.current_password && errors.current_password && (
                            <CustomText style={styles.error}>{errors.current_password}</CustomText>
                        )}

                        <Input
                            label="New Password"
                            placeholder="Enter New Password"
                            required
                            type="password"
                            value={data?.password}
                            onChangeText={handleChange("password")}
                            onBlur={handleBlur('password')}
                        />
                        {touched.password && errors.password && (
                            <CustomText style={styles.error}>{errors.password}</CustomText>
                        )}

                        <Input
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            required
                            type="password"
                            value={data?.confirm_password}
                            onChangeText={handleChange("confirm_password")}
                            onBlur={handleBlur('confirm_password')}
                        />
                        {touched.confirm_password && errors.confirm_password && (
                            <CustomText style={styles.error}>{errors.confirm_password}</CustomText>
                        )}

                        <Button
                            text="Update"
                            style={styles.button}
                            onPress={handleSubmit}
                        />
                    </>
                )}
            </Formik>
            <Modal
                open={values.open}
                setOpen={functions.setOpen}
                icon={icons.pop_up_success}
                title="Password Has Been Updated"
                buttons={[{ text: "Ok", onPress: functions.goBack }]}
                headingStyle={{ color: colors.black }}
            />
        </ScreenWrapper>
    )
}

export default ChangePassword