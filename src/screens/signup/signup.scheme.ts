import * as yup from "yup"

export const signupScheme = yup
    .object({
        username: yup.string().required("Debe ingresar un usuario"),
        password: yup.string().min(5, "El minimo de carácteres es 5").required("Debe ingresar una contraseña"),
        repeatedPassword: yup.string().min(5, "El minimo de carácteres es 5").required("Debe repetir la contraseña")
            .test(
                'passwords-match', 
                () => 'Las contraseñas no coinciden',
                (value, context) => value == context.parent.password
            )
    })