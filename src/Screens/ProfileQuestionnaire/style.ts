import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/helpers";
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
    container: { paddingHorizontal: vw * 10 }
})

export default styles