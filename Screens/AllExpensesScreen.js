import { View, Text, StyleSheet } from "react-native"

import { ExpensesOutput } from "../components/expensesOutput/ExpensesOutput";

export const AllExpensesScreen = ({}) => {

    return(
        <View>
            <Text>All Expenses Here</Text>
            <ExpensesOutput expenses={100} />
        </View>
    )
}

const styles = StyleSheet.create({
    rootCont: {

    }
});