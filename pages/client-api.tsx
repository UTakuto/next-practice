import { useEffect, useState } from "react";

const ClientApi = () => {
    //ユーザーデータの状態を保持するためのuseState
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    //コンポーネントのマウント時にAPIからデータを取得
    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await res.json();
            setUsers(data); //取得したユーザーデータをセット
            setLoading(true);
        };

        //非同期関数の実行
        fetchUsers();
    }, []); //初回レンダリング時のみ実行

    return (
        <div>
            <h1>Client-side API Fetch</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => {
                        <li key={user.id}> {user.name} </li>;
                    })}
                </ul>
            )}
        </div>
    );
};

export default ClientApi;
