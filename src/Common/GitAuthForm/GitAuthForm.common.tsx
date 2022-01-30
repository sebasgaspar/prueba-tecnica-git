import GitIcon from "../../Assets/GitHub.png";

import './style.css';
export function GitAuthForm(): JSX.Element {
    const id=localStorage.getItem("id");
    const redirect_uri = `http://localhost:3001/api/github/auth/${id}`;
    const _handleSubmit = (e: any) => {
        e.preventDefault();
        const url = `${process.env.REACT_APP_GIT_URL}?client_id=${process.env.REACT_APP_GIT_ACCESS_KEY}&redirect_uri=${redirect_uri}&scope=user`;
        window.location.replace(url);
    }
    return (
        <div className="bg-white rounded-xl w-2/5 border-solid border border-black p-4 mx-auto my-20">
            <img className="mx-auto" src={GitIcon} alt="" width="80" />
            <form className="my-4 px-4" onSubmit={_handleSubmit}>
                <div className='my-4 text-center'>
                    <button type='submit' className='text-white py-3 px-16 font-bold text-2xl rounded-3xl btn-git'>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    )
}