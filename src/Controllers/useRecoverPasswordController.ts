import { useCallback, useState } from "react"
import useToggle from "../Hooks/useToggle"
import { navigate } from "../Utils/navigation"

const useRecoverPasswordController = () => {

    const [open, setOpen, toggle] = useToggle()
    const [index, setIndex] = useState(0)

    const onPress = useCallback((value?: number) => {
        if (index < 2 || (value && value < 2)) {
            let e = value || index + 1
            setIndex(e)
        } else {
            toggle()
        }
    }, [index])

    const onPressSignIn = useCallback(() => {
        navigate("Signin")
    }, [])

    return {
        values: {
            index,
            open
        },
        functions: {
            onPress,
            setOpen,
            toggle,
            onPressSignIn
        }
    }

}

export default useRecoverPasswordController