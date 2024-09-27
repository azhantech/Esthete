import useToggle from "../Hooks/useToggle"
import { navigate } from "../Utils/navigation"
import * as Yup from "yup"

const initial = {
    card_holder_name: "",
    card_number: "",
    cvv_number: "",
    expiry_date: "12/29",
}

const PaymentFormValidator = Yup.object().shape({
    card_holder_name: Yup.string().required('Card Holder name is required'),
    card_number: Yup.number().required('Card number is required'),
    cvv_number: Yup.number().required('CVV number is required'),
    expiry_date: Yup.string().required('Expiry Date is required'),
})

const usePaymentController = () => {

    const [open, setOpen, toggle] = useToggle()

    const navigateToHome = () => navigate("BottomNavigator",{screen:"HomeNavigator"})

    return {
        validator: PaymentFormValidator,
        values: {
            initial,
            open
        },
        functions: {
            setOpen,
            toggle,
            navigateToHome
        }
    }

}

export default usePaymentController