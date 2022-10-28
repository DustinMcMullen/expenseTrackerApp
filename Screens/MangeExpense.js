import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { IconButton } from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { ExpenseForm } from "../components/manageExpense/ExpenseForm";

export const ManageExpense = ({route, navigation}) => {
    const expensesCtx = useContext(ExpensesContext);

    const editingExpenseId = route.params?.expenseId;
    const isEditing = !!editingExpenseId;

    const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === editingExpenseId);

    useLayoutEffect( () => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing] );

    function deleteHandler () {
        expensesCtx.deleteExpense(editingExpenseId);
        navigation.goBack();
    }

    function cancelHandler () {
        navigation.goBack();
    }

    function confirmHandler (expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editingExpenseId, expenseData);
        }
        else {
            expensesCtx.addExpense(expenseData);
        }
        navigation.goBack();
    }

    return (
        <View style={styles.rootCont}>
        <ExpenseForm
            onCancel={cancelHandler}
            submitButtonLabel={isEditing ? "Update" : "Add"}
            onSubmit={confirmHandler}
            defaultValues={selectedExpense}
        />
        {isEditing && (
            <View style={styles.deleteCont}>
                <IconButton
                    iconName="trash"
                    color={globalStyles.colors.primary200}
                    size={36}
                    onPress={deleteHandler}
                />
            </View>
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        padding: 24,
        backgroundColor: globalStyles.colors.primary400,
    },
    deleteCont: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: globalStyles.colors.primary700,
        alignItems: "center",
    },
})