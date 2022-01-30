import { useState } from 'react';
import { InputAtomProps } from '../../Interfaces';
import { loginForm } from '../../Utils/Data/LoginData';
import { InputAtom } from '../../Atoms';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function LoginForm(): JSX.Element {
    const navigate = useNavigate()

    const frmLogin: any = { username: '', password: '' };
    const [login, setLogin] = useState<any>(frmLogin);

    const formData: InputAtomProps[] = loginForm.form

    const _handleChange = (e: any) => {
        const { name, value } = e.target;
        setLogin({ ...login, [name]: value });
    };

    const _handleSubmit = async (e: any) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/api/user/login`, { ...login })
            .then(res => {
                setLogin(frmLogin);
                localStorage.setItem("id", res.data.data._id);
                navigate("/dashboard");
            }).catch(err => {
                console.log(err.response.data.message);
                if(err.response.data.message=='USER NOT FOUND') alert('User not found');
            });
    }
    return (
        <div className="bg-white rounded-xl w-2/5 border-solid border border-black p-4 mx-auto my-20">
            <h1 className="text-center font-bold text-2xl">Login</h1>
            <form className="my-8 px-4" onSubmit={_handleSubmit}>
                {formData.map((item, index) => {
                    return <InputAtom key={index}
                        name={item.name}
                        label={item.label}
                        type={item.type}
                        value={login[item.name]}
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