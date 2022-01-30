
import { useState } from 'react';
import { InputAtomProps, UserModel } from '../../Interfaces';
import { registerForm } from '../../Utils/Data/RegisterForm';
import { InputAtom } from '../../Atoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function RegisterForm(): JSX.Element {
    const navigate = useNavigate()

    const frmRegister: UserModel = { name: '', lastname: '', email: '', username: '', password: '' };
    const [register, setRegister] = useState<any>(frmRegister);

    const formData: InputAtomProps[] = registerForm.form

    const _handleChange = (e: any) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value });
    };

    const _handleSubmit = async (e: any) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/user/`, { ...register })
            .then(res => {
                setRegister(frmRegister);
                localStorage.setItem("id", res.data.data._id);
                navigate("/dashboard");
            }).catch(err => {
                console.log(err);
            });
        console.log(register);
    }
    return (
        <div className="bg-white rounded-xl w-2/5 border-solid border border-black p-4 mx-auto my-20">
            <h1 className="text-center font-bold text-2xl">Registro</h1>
            <form className="my-8 px-4" onSubmit={_handleSubmit}>
                {formData.map((item, index) => {
                    return <InputAtom key={index}
                        name={item.name}
                        label={item.label}
                        type={item.type}
                        value={register[item.name]}
                        placeholder={item.placeholder}
                        required={item.required}
                        onChange={_handleChange}
                    />
                })
                }
                <div className='my-4 text-center'>
                    <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white py-3 px-16 font-bold text-2xl rounded-md'>
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}