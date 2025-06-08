import * as yup from "yup"

export const signinScheme = yup
    .object({
        username: yup.string().required("Debe ingresar un usuario"),
        password: yup.string().min(5, "El minimo de carácteres es 5").required("Debe ingresar una contraseña")
    })