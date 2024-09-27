import { useCallback } from "react"
import { IForget } from "../Interfaces"
import { VerifyCodeFormValidator } from "../Utils/validator"

const initial = {
    code: ""
}

const useVerificationController = (props: IForget) => {

    const onSubmit = useCallback((data: any) => {
        props.onPress(2)
    }, [])

    return {
        validator: VerifyCodeFormValidator,
        values: {
            initial
        },
        functions: {
            onSubmit
        }
    }

}

export default useVerificationController