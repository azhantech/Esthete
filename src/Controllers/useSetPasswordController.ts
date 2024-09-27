import { useCallback } from "react"
import useToggle from "../Hooks/useToggle"
import { navigate } from "../Utils/navigation"
import { SetPasswordFormValidator } from "../Utils/validator"

const initial = {
    password: '',
    confirm_password: ''
}

const useSetPasswordController = () => {

    const [open, setOpen, toggle] = useToggle()

    const onSubmit = useCallback(() => {
        toggle()
    }, [open])

    const onSuccess = useCallback(() => {
        navigate("Signin")
    }, [])

    return {
        validator: SetPasswordFormValidator,
        values: {
            open,
            initial
        },
        functions: {
            onSubmit,
            setOpen,
            onSuccess
        }
    }
}

export default useSetPasswordController