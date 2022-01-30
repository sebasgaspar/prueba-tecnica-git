import { FormProps } from "../../Interfaces";

export const loginForm: FormProps = {
    'form': [
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