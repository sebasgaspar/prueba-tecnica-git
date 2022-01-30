export interface InputAtomProps {
    name: string
    label: string
    type: string
    value?: string
    placeholder: string
    required: boolean
    onChange?: React.ChangeEventHandler<any>
}

export interface FormProps {
    form: InputAtomProps[]
}

export interface UserModel{
    name: string
    lastname: string
    email: string
    username: string
    password: string
}

export interface ReposModel{
    name: string
}