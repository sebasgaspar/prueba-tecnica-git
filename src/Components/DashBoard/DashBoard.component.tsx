import axios from "axios";
import { useEffect, useState } from "react"
import { ReposModel } from "../../Interfaces";

export function DashBoardComponent(): JSX.Element {
    const [repos, setRepos] = useState<ReposModel[]>([]);

    useEffect(() => {
        const id = localStorage.getItem("id");
        console.log(id);
        axios.get(`http://localhost:3001/api/github/repos/${id}`).then(res => {
            console.log(res.data)
            let tmpRepos: ReposModel[] = [];
            res.data.data.map((item: any) => {
                let repo: ReposModel = {
                    name: item.name,
                }
                tmpRepos.push(repo);
            })
            setRepos(tmpRepos);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    function ItemRepoList(item: ReposModel): JSX.Element {
        return (
            <div className="flex flex-col items-center p-4 border-solid border border-black">
                <div className="text-xl font-bold">{item.name}</div>
            </div>
        )
    }
    return (
        <div className="w-3/5 mx-auto">
            {repos.map((repo: ReposModel, index: number) => {
                return <ItemRepoList key={index} name={repo.name} />
            })}
        </div>
    )
}