import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:vw*5,
        paddingVertical:vh*3,
    },
    content:{
        fontSize:vh*1.6,
        color:colors.black,
        marginBottom:vh*2
    }
})

export default styles