import { useLayoutEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

import { IconButton } from "../components/UI/IconButton";
import { globalStyles } from "../constants/styles";

export const ManageExpense = ({route, navigation}) => {

    const editingExpenseId = route.params?.expenseId;
    const isEditing = !!editingExpenseId;

    useLayoutEffect( () => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing] );

    function deleteHandler () {
        console.log("Delete expense triggered")
    }

    return (
        <View style={styles.rootCont}>
            <View style={styles.deleteCont}>
                {isEditing && (
                    <IconButton
                        iconName="trash"
                        color={globalStyles.colors.primary200}
                        size={36}
                        onPress={deleteHandler}
                    />
                )}
            </View>
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