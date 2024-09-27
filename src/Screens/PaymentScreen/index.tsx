
import { Formik } from "formik"
import styles from "./style"
import { ScreenWrapper } from "../../component/ScreenWrapper"
import Input from "../../component/Input"
import Button from "../../component/Button"
import Modal from "../../component/Modal"
import { icons } from "../../Assets/Images"
import CustomText from "../../component/Text"
import colors from "../../Utils/colors"
import Dropdown from "../../component/Dropdown"
import usePaymentController from "../../Controllers/usePaymentController"

const PaymentScreen = () => {

    const { validator, values, functions } = usePaymentController()

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
                            label="Card Holder Name"
                            placeholder="Enter Card Holder Name"
                            required
                            value={data?.card_holder_name}
                            onChangeText={handleChange("card_holder_name")}
                            onBlur={handleBlur('card_holder_name')}
                        />
                        {touched.card_holder_name && errors.card_holder_name && (
                            <CustomText style={styles.error}>{errors.card_holder_name}</CustomText>
                        )}

                        <Input
                            label="Card Number"
                            placeholder="Enter Card Number"
                            required
                            value={data?.card_number}
                            keyboardType="numeric"
                            onChangeText={handleChange("card_number")}
                            onBlur={handleBlur('card_number')}
                        />
                        {touched.card_number && errors.card_number && (
                            <CustomText style={styles.error}>{errors.card_number}</CustomText>
                        )}

                        <Input
                            label="CVV Number"
                            placeholder="Enter CVV Number"
                            required
                            keyboardType="numeric"
                            value={data?.cvv_number}
                            onChangeText={handleChange("cvv_number")}
                            onBlur={handleBlur('cvv_number')}
                        />
                        {touched.cvv_number && errors.cvv_number && (
                            <CustomText style={styles.error}>{errors.cvv_number}</CustomText>
                        )}

                        <Dropdown
                            label="Expiry Date"
                            placeholder="Select Expiry Date"
                            required
                            value={data?.expiry_date}
                            onChangeText={handleChange("expiry_date")}
                            onBlur={handleBlur('expiry_date')}
                        />
                        {touched.expiry_date && errors.expiry_date && (
                            <CustomText style={styles.error}>{errors.expiry_date}</CustomText>
                        )}

                        <Button
                            text="Pay"
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
                title="Payment Done Successfully"
                buttons={[{ text: "Ok", onPress: functions.navigateToHome }]}
                headingStyle={{ color: colors.black }}
            />
        </ScreenWrapper>
    )
}

export default PaymentScreen