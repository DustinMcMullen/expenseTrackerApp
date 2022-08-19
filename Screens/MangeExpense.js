import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native"

export const ManageExpense = ({route, navigation}) => {

    const editingExpenseId = route.params?.expenseId;
    const isEditing = !!editingExpenseId;

    useLayoutEffect( () => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing] );

    return (
        <View>
            <Text>{ editingExpenseId ? "Edit Expense" : "Add Expense"}</Text>
        </View>
    )
}