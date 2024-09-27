import { StyleSheet } from "react-native"
import fonts from "../../Assets/Fonts"
import colors from "../../Utils/colors"

const styles = StyleSheet.create({
    text: {
        fontFamily: fonts.BEBAS.regular,
        fontSize: 18,
        color: colors.white,
        letterSpacing: 0.5
    },
    underline: {
        textDecorationLine: 'underline'
    }
})

export default styles