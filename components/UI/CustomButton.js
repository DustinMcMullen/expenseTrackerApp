import { View, StyleSheet, Pressable, Text } from "react-native"
import { globalStyles } from "../../constants/styles"

export const CustomButton = ({children, onPress, mode, style}) => {

    return (
        <View style={style}>
            <Pressable onPress={onPress} style={ ({pressed}) => pressed && styles.pressed } >
                <View style={[styles.button, mode === "flat" && styles.flat]}>
                    <Text style={[styles.buttonText, mode === "flat" && styles.flatButtonText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: globalStyles.colors.primary700,
    },
    flat: {
        backgroundColor: "transparent",
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    flatButtonText: {
        color: "white",
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: globalStyles.colors.primary200,
        borderRadius: 4
    }
})