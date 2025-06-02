import * as yup from "yup"

export const signupScheme = yup
    .object({
        username: yup.string().required("Debe ingresar un usuario"),
        password: yup.string().required("Debe ingresar una contraseña"),
        repeatedPassword: yup.string().required("Debe repetir la contraseña")
            .test(
                'is-repeated', 
                () => 'Las contraseñas no coinciden',
                (value, context) => value == context.parent.password
            )
    })