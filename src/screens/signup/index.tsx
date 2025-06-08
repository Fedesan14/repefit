import { useSignupMutation } from "../../app/services/auth.service";
import { Controller, useForm } from "react-hook-form";
import { SignupRequest } from "../../app/types/request/SignupRequest";
import { signupScheme } from "./signup.scheme";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { ApiError } from '../../app/types/responses/ApiError';
import Button from '../../components/ui/Button';
import InputText from '../../components/ui/InputText';
import CenteredContainer from '../../components/ui/CenteredContainer';

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
        <CenteredContainer>
            <Controller 
                control={control}
                rules={{ required: true }}
                name="username"
                render={({field: { onChange, onBlur, value}}) =>
                    <InputText 
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="MiNombreDeUsuario"
                        errorMessage={errors.username?.message}
                        label='Usuario'
                    />
                }
            />
            <Controller 
                control={control}
                rules={{ required: true }}
                name="password"
                render={({field: { onChange, onBlur, value}}) =>
                    <InputText 
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        placeholder="***********"
                        errorMessage={errors.password?.message}
                        label='Contraseña'
                    />
                }
            />
            <Controller 
                control={control}
                rules={{ required: true }}
                name="repeatedPassword"
                render={({field: { onChange, onBlur, value}}) =>
                    <InputText 
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        secureTextEntry
                        placeholder="***********"
                        errorMessage={errors.repeatedPassword?.message}
                        label='Repetir contraseña'
                    />
                }
            />
            <Button 
                title="Registrarme"
                onPress={handleSubmit(onSubmit)}
            />
        </CenteredContainer>
    )
}

export default Signup;
