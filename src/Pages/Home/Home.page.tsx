import { useNavigate } from "react-router-dom";

export function HomePage(): JSX.Element {

    const navigate = useNavigate()

    return (
        <div className="grid grid-cols-2 grid-rows-1 h-screen content-center items-center">
            <div className="text-center">
                <button className="w-2/4 h-48 text-4xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/login')}>
                    Login
                </button>
            </div>
            <div className="text-center">
                <button className="w-2/4 h-48 text-4xl bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/register')}>
                    Register
                </button>
            </div>
        </div>
    );
}