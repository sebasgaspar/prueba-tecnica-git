import axios from "axios";
import { useEffect, useState } from "react";
import { DashBoard } from "../../Components";
import { GitAuthForm } from "../../Common";

export function DashBoardPage(): JSX.Element {
    const [isAuth, setAuth] = useState(false);
    useEffect(() => {
        const id = localStorage.getItem("id");
        axios.get(`http://localhost:3001/api/user/id/${id}`).then(res => {
            if (res.data.data.access_token) {
                localStorage.setItem("access_token", res.data.data.access_token);
                setAuth(true);
            }
        }
        );
    }, []);

    return (
        <div className="">
            {(!isAuth)
                ? <GitAuthForm />
                : <DashBoard />}
        </div>
    )
}