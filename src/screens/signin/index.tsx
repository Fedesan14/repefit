import { Button, Text, TextInput, View } from "react-native"
import { SigninStyles } from "./signin.styles";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from 'react-hook-form';
import { signinScheme } from './signin.scheme';
import { yupResolver } from "@hookform/resolvers/yup";
import { useSigninMutation } from '../../app/services/auth.service';
import { LoginRequest } from '../../app/types/request/LoginRequest';
import { ApiError } from '../../app/types/responses/ApiError';
import Toast from 'react-native-toast-message';
import { encryptToBase64 } from '../../utils/Base64Utils';

const Signin = () => {

    const [signin] = useSigninMutation()
    const navigation = useNavigation()

    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: yupResolver(signinScheme)
    })
    

    const handleCreateUser = () => {
        navigation.navigate('Signup')
    }

    const handleSignin = (data: LoginRequest) => {
        signin(encryptToBase64(`${data.username}:${data.password}`))
            .unwrap()
            .then(() => {
                reset()
                navigation.navigate('Home')
            })
            .catch((error: ApiError) => {
                Toast.show({
                    type: 'error',
                    text1: 'Error al ingresar',
                    text2: error.data.errorMessage
                })
            })
    }

    return (
        <View style={SigninStyles.container}>
            <View>
                <Text>Usuario</Text>
                <Controller 
                    control={control}
                    rules={{ required: true }}
                    name="username"
                    render={({field: { onChange, onBlur, value}}) =>
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            placeholder="MiNombreDeUsuario"
                        />
                    }
                />
                { errors.username && <Text>{errors.username.message}</Text>}
            </View>

            <View>
                <Text>Contraseña</Text>
                <Controller 
                    control={control}
                    rules={{ required: true }}
                    name="password"
                    render={({field: { onChange, onBlur, value}}) =>
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            secureTextEntry
                            placeholder="***********"
                        />
                    }
                />
                { errors.username && <Text>{errors.username.message}</Text>}
            </View>

            <View>
                <Button
                    title="Ingresar"
                    onPress={handleSubmit(handleSignin)}
                />
                <Button
                    title="Crear usuario"
                    onPress={handleCreateUser}
                />
            </View>
        </View>
    )
}

export default Signin;