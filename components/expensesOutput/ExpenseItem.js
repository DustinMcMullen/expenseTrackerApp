import { Pressable, View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

export const ExpenseItem = ({title, date, amount}) => {
    return (
        <Pressable>
            <View style={styles.rootContainer}>
            <View style={styles.expenseDetailsCont}>
                <Text style={[styles.textBase, styles.descriptionText]}>{title}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.expenseAmountCont}>
                <Text style={styles.amountText}>{amount}</Text>
            </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: globalStyles.colors.primary700,
        flexDirection: "row",
        justifyContent: "space-between",
        borderRadius: 6,
        elevation: 3,
        shadowColor: globalStyles.colors.primary400,
        shadowRadius: 4,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.4,
    },
    expenseDetailsCont: {
        flex: 7
    },
    expenseAmountCont: {
        flex: 2,
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: globalStyles.colors.primary200,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4
    },
    textBase: {
        color: globalStyles.colors.primary200
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: "bold"
    },
    amountText: {
        color: globalStyles.colors.primary800
    }
});