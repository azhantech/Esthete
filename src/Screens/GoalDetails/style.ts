import { StyleSheet } from "react-native";
import { heightPixel, vh, vw } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    button: {
        marginVertical: vh * 3,
        width: "90%",
        alignSelf: 'center'
    },
    error: {
        color: colors.red,
        marginTop: 5,
        marginBottom: 10,
        width: vw * 85,
    },
    container: {
        paddingHorizontal: vw * 10
    },
    status_text: {
        color: colors.primary,
        textDecorationLine: 'underline',
        alignSelf: 'flex-end',
        marginTop: heightPixel(10)
    }
})

export default styles