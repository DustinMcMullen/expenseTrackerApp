import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

import { ExpenseItem } from "./ExpenseItem";
import { globalStyles } from "../../constants/styles";

export const ExpensesOutput = ({expenses, timePeriod}) => {

    const sumOfExpenses = expenses.reduce( (sum, currentItem) => {
        return sum + currentItem.amount
    }, 0  );

    function renderExpenses (itemData) {
        return (
            <ExpenseItem {...itemData.item} />
        )
    }

    return(
        <View style={styles.rootContainer}>
            <View style={styles.summaryContainer}>
                <Text style={styles.timePeriod}>{"Total"}</Text>
                <Text style={styles.expensesSum}>${sumOfExpenses.toFixed(2)}</Text>
            </View>
            <FlatList
                // data={DUMMYEXPENSES}
                data={expenses}
                renderItem={renderExpenses}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 24,
        paddingBottom: 0,
        backgroundColor: globalStyles.colors.primary800
    },
    summaryContainer: {
        padding: 8,
        backgroundColor: globalStyles.colors.primary400,
        borderRadius: 6,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    timePeriod: {
        fontSize: 12,
        color: globalStyles.colors.primary300,
    },
    expensesSum: {
        fontSize: 16,
        fontWeight: "bold",
        color: globalStyles.colors.primary300
    }
})