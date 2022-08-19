import { View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../constants/styles";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";

export const RecentExpensesScreen = ({}) => {

    return (
            <ExpensesOutput timePeriod="last 7 days" />
    )
}

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        backgroundColor: globalStyles.colors.primary800,
    }
});