import { StyleSheet } from "react-native";
import { vh } from "../../../Utils/helpers";
import colors from "../../../Utils/colors";

const styles = StyleSheet.create({
    wrapper: {
        marginTop: vh * 1.5
    },
    text: {
        color: colors.light_text
    },
    text_button: {
        color: colors.primary
    }
})

export default styles