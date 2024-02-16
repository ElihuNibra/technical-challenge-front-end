import { object, string } from "yup";
export const loginSchema = object({
  email: string()
    .required("El campo email es requerido")
    .email("El campo debe ser un correo valido"),
  password: string().required("La contraseña es requerida"),
});
//Esquema de validaciones custom