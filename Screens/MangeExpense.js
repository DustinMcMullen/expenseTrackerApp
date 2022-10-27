import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { CustomButton } from "../components/UI/CustomButton";

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
        navigation.goBack();
    }

    function cancelHandler () {
        navigation.goBack();
    }

    function confirmHandler () {
        navigation.goBack();
    }

    return (
        <View style={styles.rootCont}>
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