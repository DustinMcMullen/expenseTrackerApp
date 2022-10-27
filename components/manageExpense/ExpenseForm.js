import { View } from "react-native";
import { Input } from "./Input";

export const ExpenseForm = () => {

    function amountChangeHandler() {}

    return(
        <View>
            <Input
                label="Title"
                textInputConfig={{
                    multiline: true,
                }}
            />
            <Input
                label="Amount"
                textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler,

                }}
            />
            <Input
                label="Date"
                textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: () => {}
                }}
            />
        </View>
    );
}