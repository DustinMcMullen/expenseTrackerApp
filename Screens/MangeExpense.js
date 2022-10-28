import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { IconButton } from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { ExpenseForm } from "../components/manageExpense/ExpenseForm";
import { LoadingOverlay } from "../components/UI/LoadingOverlay";

import { storeExpense, updateExpense, deleteExpense } from "../util/http";

export const ManageExpense = ({route, navigation}) => {
    const expensesCtx = useContext(ExpensesContext);

    const [isFetching, setIsFetching] = useState(false);

    const editingExpenseId = route.params?.expenseId;
    const isEditing = !!editingExpenseId;

    const selectedExpense = expensesCtx.expenses.find((expense) => expense.id === editingExpenseId);

    useLayoutEffect( () => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing] );

    async function deleteHandler () {
        expensesCtx.deleteExpense(editingExpenseId);
        setIsFetching(true);
        await deleteExpense(editingExpenseId);
        navigation.goBack();
    }

    function cancelHandler () {
        navigation.goBack();
    }

    async function confirmHandler (expenseData) {
        if (isEditing) {
            expensesCtx.updateExpense(editingExpenseId, expenseData);
            setIsFetching(true);
            await updateExpense(editingExpenseId, expenseData);

        }
        else {
            setIsFetching(true);
            const id = await storeExpense(expenseData);

            expensesCtx.addExpense({id: id, ...expenseData});
        }
        navigation.goBack();
    }

    if (isFetching) {
        return <LoadingOverlay />
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