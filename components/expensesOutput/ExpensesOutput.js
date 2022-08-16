import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";

export const ExpensesOutput = ({expenses, timeline}) => {

    return(
        <View>
            <View>
                <Text>{timeline === "all" ? "Showing All Expenses" : "Showing Expenses from the last 7 days"}</Text>
                <Text>Total: $XX.xx</Text>
            </View>
            <FlatList
                
            />
        </View>
    )
}

const styles = StyleSheet.create({

})