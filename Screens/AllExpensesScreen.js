import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native"

import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";

export const AllExpensesScreen = ({}) => {
    const expensesCtx = useContext(ExpensesContext);

    return(
            <ExpensesOutput expenses={expensesCtx.expenses} timePeriod="all" />
    )
}

const styles = StyleSheet.create({
    rootCont: {

    }
});