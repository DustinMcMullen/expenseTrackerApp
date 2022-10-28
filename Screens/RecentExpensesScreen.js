import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../constants/styles";
import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import {LoadingOverlay} from "../components/UI/LoadingOverlay";

export const RecentExpensesScreen = () => {

    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        async function fetchExpenses() {
            const expenses = await getExpenses();
            setIsFetching(false);
            expensesCtx.setExpenses(expenses);
        }
        
        fetchExpenses();
    }, []);

    const expensesCtx = useContext(ExpensesContext);
    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const oneWeekAgo = getDateMinusDays(today, 7);
        return expense.date > oneWeekAgo;
    });

    if (isFetching) {
        return <LoadingOverlay />
    }

    return (
            <ExpensesOutput expenses={recentExpenses} timePeriod="last 7 days" />
    )
}

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        backgroundColor: globalStyles.colors.primary800,
    }
});