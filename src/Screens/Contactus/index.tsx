import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { ScreenWrapper } from "../../component/ScreenWrapper"
import styles from "./style"
import { Formik } from "formik"
import Input from "../../component/Input"
import Modal from "../../component/Modal"
import useContactusController from "../../Controllers/useContactusController"
import Button from "../../component/Button"
import { icons } from "../../Assets/Images"
import CustomText from "../../component/Text"
import { vw } from "../../Utils/helpers"

const Contactus = () => {

    const { validator, values, functions } = useContactusController()

    return (
        <ScreenWrapper mainContainerStyles={styles.container}>
            <KeyboardAwareScrollView>
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
                                label="Full Name"
                                placeholder="Enter Full Name"
                                required
                                value={data.name}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                            />
                            {touched.name && errors.name && (
                                <CustomText style={styles.error}>{errors.name}</CustomText>
                            )}

                            <Input
                                label="Email Address"
                                placeholder="Enter Email Address"
                                required
                                value={data.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                            />
                            {touched.email && errors.email && (
                                <CustomText style={styles.error}>{errors.email}</CustomText>
                            )}

                            <Input
                                label="Subject"
                                placeholder="Enter Subject"
                                required
                                value={data.subject}
                                onChangeText={handleChange('subject')}
                                onBlur={handleBlur('subject')}
                            />
                            {touched.subject && errors.subject && (
                                <CustomText style={styles.error}>{errors.subject}</CustomText>
                            )}

                            <Input
                                label="Message"
                                placeholder="Enter Message"
                                required
                                multiline
                                value={data.message}
                                onChangeText={handleChange('message')}
                                onBlur={handleBlur('message')}
                            />
                            {touched.message && errors.message && (
                                <CustomText style={styles.error}>{errors.message}</CustomText>
                            )}

                            <Button
                                text="Submit"
                                style={styles.button}
                                onPress={handleSubmit}
                            />
                        </>
                    )}
                </Formik>
            </KeyboardAwareScrollView>
            <Modal
                open={values.open}
                setOpen={functions.setOpen}
                icon={icons.pop_up_success}
                title="Successfull"
                text="Your response has been summitted to admin!"
                buttons={[{ text: "Ok", onPress: functions.goBack }]}
            />
        </ScreenWrapper>
    )
}

export default Contactus