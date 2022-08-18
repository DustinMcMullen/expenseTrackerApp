import { View, Text, StyleSheet } from "react-native"

import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";

export const AllExpensesScreen = ({}) => {

    return(
            <ExpensesOutput timePeriod="all" />
    )
}

const styles = StyleSheet.create({
    rootCont: {

    }
});