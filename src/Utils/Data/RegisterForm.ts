import { FormProps } from "../../Interfaces";

export const registerForm: FormProps = {
    'form': [
        {
            'name': 'name',
            'label': 'Nombre',
            'type': 'text',
            'required': true,
            'placeholder': 'Nombre',
        },
        {
            'name': 'lastname',
            'label': 'Apellido',
            'type': 'text',
            'required': true,
            'placeholder': 'Apellido',
        },
        {
            'name': 'email',
            'label': 'Email',
            'type': 'email',
            'required': true,
            'placeholder': 'Email',
        },
        {
            'name': 'username',
            'label': 'Usuario',
            'type': 'text',
            'required': true,
            'placeholder': 'Usuario',
        },
        {
            'name': 'password',
            'label': 'Contraseña',
            'type': 'password',
            'required': true,
            'placeholder': 'Contraseña',
        }
    ]
}