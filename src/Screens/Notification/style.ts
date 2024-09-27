import { StyleSheet } from "react-native";
import { vh, vw } from "../../Utils/helpers";
import colors from "../../Utils/colors";

const styles = StyleSheet.create({
    container: {
        paddingVertical: vh * 3,
    },
    filterContainer: {
        flexDirection: 'row',
        width: vw * 85,
        alignSelf: 'center',
        alignItems: "center",
        marginBottom: vh * 2
    },
    showing: {
        color: colors.placeHolderText,
        fontSize: vh * 1.6
    },
    allText: {
        color: colors.white,
        fontSize: vh * 1.3
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.darkBlue,
        borderRadius: 5,
        height: vh * 2.8,
        paddingHorizontal: vw * 2,
        width: vw * 13,
        marginLeft: vw * 3
    },
    icon: {
        height: vh * 1.3,
        width: vw * 3,
        resizeMode: 'contain',
        tintColor: colors.white,
    },
    row: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: vh * 0.5
    },
    dateTime: {
        width: vw * 40,
        color: colors.purple,
        fontSize: vh * 1.6
    },
    blackText: {
        color: colors.placeHolderText
    },
    itemContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.borderColor,
        paddingHorizontal: vw * 10,
        paddingVertical: vh * 1.5
    },
    seperator: {
        height: vh * 2
    },
    markText: {
        color: colors.selectionColor,
        textDecorationLine: 'underline'
    },
    markButton: {
        alignSelf: 'flex-end'
    },
    viewAllBtn: {
        marginTop: vh * 2,
        marginRight: vw * 10,
        alignSelf: 'flex-end'
    },
    content: {
        fontSize: vh * 1.6,
        color: colors.placeHolderText,
    }
})

export default styles