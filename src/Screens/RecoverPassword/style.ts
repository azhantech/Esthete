import { StyleSheet } from "react-native";
import { heightPixel, vh } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingHorizontal: heightPixel(40),
        justifyContent: 'center'
    },
    button: {
        marginTop: vh * 5
    },
    text: {
        textAlign: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        color: colors.light_text,
    },
    scroll: {
        paddingVertical: vh * 6
    }
})

export default styles