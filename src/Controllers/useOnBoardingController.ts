import { useCallback, useState } from "react";
import { navigate } from "../Utils/navigation";

const useOnBoardingController = () => {
    const [index, setIndex] = useState(0)

    const onPress = useCallback(() => {
        if (index < 2 ) {
            let e = index + 1
            setIndex(e)
        } else {
            navigate("Signin")
        }
    }, [index])

    return {
        values: {
            index,
        },
        functions: {
            onPress,
        }
    }
};

export default useOnBoardingController;
