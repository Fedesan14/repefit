import { StyleSheet } from "react-native";

export const SignupStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },

    InputFieldContainer: {
        width: '80%',
        marginBottom: 10
    },

    errorMessage: {
        color: 'red'
    }
});