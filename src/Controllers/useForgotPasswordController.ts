import { useCallback } from "react"
import { IForget } from "../Interfaces"
import { ForgetPasswordFormValidator } from "../Utils/validator"

const initial = {
    email: ""
}

const useForgotPasswordController = (props: IForget) => {

    const onSubmit = useCallback((data: any) => {
        props.onPress(1)
    }, [])

    return {
        validator: ForgetPasswordFormValidator,
        values: {
            initial
        },
        functions: {
            onSubmit
        }
    }

}

export default useForgotPasswordController