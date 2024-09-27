import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingTop: vh * 4
    },
    header: {
        fontSize: vh * 2.2,
        color: colors.black,
    },
    headingContainer: {
        width: vw * 85,
        alignSelf: "center"
    },
    flatList: {
        flexGrow: 0,
        marginTop: 20,
    },
    packageContainer: {
        width: vw * 100, // Full screen width for each package
        paddingHorizontal: vw * 10,
        alignItems: 'center',
    },
    subHeader: {
        fontSize: vh * 1.9,
        color: colors.selectionColor,
        marginBottom: 10,
    },
    priceInfo: {
        position: 'absolute',
        fontSize: vh * 1.7,
        color: colors.selectionColor,
        alignSelf: 'flex-end',
        top: 120
    },
    groupList: {
        flexDirection: 'row',
        marginVertical: 20,
        alignItems: 'center',
        width: '100%'
    },
    removeGroup: {
        color: colors.placeHolderText,
        fontSize: vh * 1.6,
        marginRight: vw * 5,
        marginLeft: vw * 2,
    },
    mainBtn: {
        alignSelf: 'center'
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
    },
    dot: {
        width: vh*1.5,
        height: vh*1.5,
        borderRadius: vh*0.75,
        marginHorizontal: vw*1,
    },
    activeDot: {
        backgroundColor: colors.selectionColor,
    },
    inactiveDot: {
        backgroundColor: colors.lightGray,
    },
});

export default styles