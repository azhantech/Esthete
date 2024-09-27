import useToggle from "../Hooks/useToggle"
import { goBack } from "../Utils/navigation"
import * as Yup from "yup"

const initial = {
    current_password: "",
    password: "",
    confirm_password: ""
}

const ChangePasswordFormValidator = Yup.object().shape({
    current_password: Yup.string().required('Current Password is required'),
    password: Yup.string().required('New Password is required'),
    confirm_password: Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
})

const useChangePasswordController = () => {

    const [open, setOpen, toggle] = useToggle()

    return {
        validator: ChangePasswordFormValidator,
        values: {
            initial,
            open
        },
        functions: {
            setOpen,
            toggle,
            goBack
        }
    }

}

export default useChangePasswordController