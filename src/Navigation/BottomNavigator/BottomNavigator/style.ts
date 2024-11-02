import { StyleSheet } from "react-native";
import { BOTTOMBAR_HEIGHT, vh } from "../../../Utils/helpers";

const styles = StyleSheet.create({
    icon: {
        height: vh * 3,
        resizeMode: 'contain'
    },
    item: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bar: {
        width: '100%',
        height: BOTTOMBAR_HEIGHT,
        elevation: 2,
        borderTopRightRadius: vh,
        borderTopLeftRadius: vh,
        position: 'absolute',
        bottom: 0,
    }
})

export default styles