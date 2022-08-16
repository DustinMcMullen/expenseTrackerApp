import { View, Text, StyleSheet } from "react-native";

import { globalStyles } from "../constants/styles";

export const RecentExpensesScreen = ({}) => {

    return (
        <View style={styles.rootCont}>
        {/* // <View> */}
            <Text>Recent Expenses Here</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    rootCont: {
        flex: 1,
        // backgroundColor: '#052010'
        // backgroundColor: globalStyles.colors.primary700,
        backgroundColor: globalStyles.colors.primary800,
    }
});