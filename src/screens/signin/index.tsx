import { Button, View } from "react-native"
import { SigninStyles } from "./signin.styles";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {

    const navigation = useNavigation()

    const handleCreateUser = () => {
        navigation.navigate('Signup')
    }

    return (
        <View style={SigninStyles.container}>
            <Button
                title="Crear usuario"
                onPress={handleCreateUser}
            />
        </View>
    )
}

export default Signin;