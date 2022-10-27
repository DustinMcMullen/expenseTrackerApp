import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CustomButton } from "../components/UI/CustomButton";

import { IconButton } from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";
import { ExpensesContext } from "../store/expenses-context";
import { ExpenseForm } from "../components/manageExpense/ExpenseForm";

export const ManageExpense = ({route, navigation}) => {
    const expensesCtx = useContext(ExpensesContext);

    const editingExpenseId = route.params?.expenseId;
    const isEditing = !!editingExpenseId;

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

    function confirmHandler () {
        if (isEditing) {
            expensesCtx.updateExpense(editingExpenseId, {
                title: "Test(edit)",
                amount: 20,
                date: new Date('2022-10-26')
            });
        }
        else {
            expensesCtx.addExpense({
                title: "Test",
                amount: 10,
                date: new Date('2022-10-26')
            });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.rootCont}>
        <ExpenseForm />
            <View style={styles.buttonCont}>
                <CustomButton
                    mode="flat"
                    onPress={cancelHandler}
                    style={styles.button}
                >Cancel</CustomButton>
                <CustomButton
                    onPress={confirmHandler}
                    style={styles.button}
                >{isEditing ? "Update" : "Add"}</CustomButton>
            </View>
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
    buttonCont: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
    deleteCont: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: globalStyles.colors.primary700,
        alignItems: "center",
    },
})