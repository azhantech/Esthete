import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    button: {
        marginTop: vh * 5,
        width: "90%",
        alignSelf: 'center'
    },
    container: {
        paddingHorizontal: vw * 10,
        paddingTop: vh * 2
    },
    error: {
        color: colors.red,
        marginTop: 5,
        marginBottom: 10,
        width: vw * 85,
    },
})

export default styles