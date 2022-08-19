import { Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export const IconButton = ({iconName, size, color, onPress}) => {
    return (
        <Pressable onPress={onPress} style={ ({pressed}) => pressed && styles.pressed }>
            <View style={styles.buttonCont}>
                <Ionicons name={iconName} size={size} color={color} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    buttonCont: {
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2
    },
    pressed: {
        opacity: 0.75
    },
})