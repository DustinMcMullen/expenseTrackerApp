import { View, Text, TextInput, StyleSheet } from "react-native";
import { globalStyles } from "../../constants/styles";

export const Input = ({label, textInputConfig}) => {
    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline);
    }
    
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyles} {...textInputConfig} />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: globalStyles.colors.primary800,
        marginBottom: 4
    },
    input: {
        backgroundColor: globalStyles.colors.primary300,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: globalStyles.colors.primary800
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: "top"
    }
})