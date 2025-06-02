import { Button, KeyboardAvoidingView, Platform, Text, TextInput, View } from "react-native"
import { SignupStyles } from "./signup.styles";
import { useSignupMutation } from "../../app/services/auth.service";
import { Controller, useForm } from "react-hook-form";
import { SignupRequest } from "../../app/types/request/SignupRequest";
import { signupScheme } from "./signup.scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { ApiError } from '../../app/types/responses/ApiError';

const Signup = () => {

    const [signup] = useSignupMutation()
    const navigation = useNavigation()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signupScheme)
    })

    const onSubmit = ({username, password, repeatedPassword}: SignupRequest) => {
        signup({username, password, repeatedPassword})
            .unwrap()
            .then(() => {
                Toast.show({
                    type: 'success',
                    text1: 'Usuario registrado',
                    text2: 'Ya puedes ingresar con tu nuevo usuario'
                })
                navigation.navigate('Signin')
            })
            .catch((error: ApiError) => {
                Toast.show({
                    type: 'error',
                    text1: 'Error al registrarse',
                    text2: `${error.data.errorMessage}`
                })
            })
    }

    return (
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={SignupStyles.container}
        >
            <View style={SignupStyles.InputFieldContainer}>
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
                            style={SignupStyles.input}
                            placeholder="MiNombreDeUsuario"
                        />
                    }
                />
                { errors.username && <Text style={SignupStyles.errorMessage}>{errors.username.message}</Text>}
            </View>
            <View style={SignupStyles.InputFieldContainer}>
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
                            style={SignupStyles.input}
                            secureTextEntry
                            placeholder="***********"
                        />
                    }
                />
                { errors.password && <Text style={SignupStyles.errorMessage}>{errors.password.message}</Text>}
            </View>
            <View style={SignupStyles.InputFieldContainer}>
                <Text>Repetir contraseña</Text>
                <Controller 
                    control={control}
                    rules={{ required: true }}
                    name="repeatedPassword"
                    render={({field: { onChange, onBlur, value}}) =>
                        <TextInput 
                            value={value}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            style={SignupStyles.input}
                            secureTextEntry
                            placeholder="***********"
                        />
                    }
                />
                { errors.repeatedPassword && <Text style={SignupStyles.errorMessage}>{errors.repeatedPassword.message}</Text>}
            </View>
            <Button 
                title="Registrarme"
                onPress={handleSubmit(onSubmit)}
            />
        </KeyboardAvoidingView>
    )
}

export default Signup;
