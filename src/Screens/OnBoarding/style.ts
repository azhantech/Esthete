import { StyleSheet } from "react-native";
import { font, heightPixel, widthPixel } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'space-between',
    },
    content_view:{
        height: heightPixel(500),
        borderTopRightRadius: heightPixel(200),
        borderTopLeftRadius: heightPixel(200),
        backgroundColor:colors.primary,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:widthPixel(30)
    },
    title: {
        fontSize: font(34),
        color:colors.white
    },
    text: {
        fontSize:font(16),
        lineHeight:font(22),
        color:colors.white,
        marginTop: heightPixel(15),
        marginBottom: heightPixel(20)
    },
    dot: {
        height:heightPixel(14),
        width:heightPixel(14),
        borderRadius:heightPixel(14)/2,
        backgroundColor:colors.dot_brown
    },
    active_dot: {
        backgroundColor: colors.white
    },
    paging_wrapper: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'20%'
    },
    button: {
        marginTop: heightPixel(40),
        width:widthPixel(165),
        backgroundColor: colors.auth_button
    },
    button_text: {
        color:colors.black
    },
    header_wrapper: {
        justifyContent:'flex-end',
        flex: 1
    }
})

export default styles