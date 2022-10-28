import { useState, useContext } from "react";
import { View, StyleSheet, Alert } from "react-native";

import { CustomButton } from "../UI/CustomButton";
import { Input } from "./Input";
import { globalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../util/date";

export const ExpenseForm = ({onCancel, submitButtonLabel, onSubmit, defaultValues}) => {

    const [inputValues, setInputValues] = useState({
        title: defaultValues ? defaultValues.title : "",
        amount: defaultValues ? defaultValues.amount.toString() : "",
        date: defaultValues ? getFormattedDate(defaultValues.date) : ""
    });

    function inputValueHandler(inputIdentity, enteredValue) {
        setInputValues((prevValues) => {
            return {
                ...prevValues,
                [inputIdentity]: enteredValue
            }
        });
    }

    function submitHandler () {
        const expenseData = {
            title: inputValues.title,
            amount: +inputValues.amount,
            date: new Date(inputValues.date),
        };

        const titleValid = expenseData.title.trim().length > 0;
        const amountValid = !isNaN(expenseData.amount) && expenseData.amount >0;
        const dateValid = expenseData.date.toString() !== "Invalid Date";

        if (!titleValid || !amountValid || !dateValid) {
            Alert.alert("Invalid input", "please check your input values");
            return;
        }

        onSubmit(expenseData);
    }

    return(
        <View>
            <Input
                label="Title"
                textInputConfig={{
                    multiline: true,
                    onChangeText: inputValueHandler.bind(this, "title"),
                    value: inputValues.title
                }}
            />
            <Input
                label="Amount"
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputValueHandler.bind(this, "amount"),
                    value: inputValues.amount
                }}
            />
            <Input
                label="Date"
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputValueHandler.bind(this, "date"),
                    value: inputValues.date
                }}
            />

            <View style={styles.buttonCont}>
                <CustomButton
                    mode="flat"
                    onPress={onCancel}
                    style={styles.button}
                >Cancel</CustomButton>
                <CustomButton
                    onPress={submitHandler}
                    style={styles.button}
                >{submitButtonLabel}</CustomButton>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    buttonCont: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8
    },
});