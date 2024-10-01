
export const getServerSideProps = async () => {
    //外部APIからユーザーデータを取得
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();

    //`props`としてコンポーネントにデータを渡す
    return {
        props: { users },
    };
};

const ApiUsers = ({ users }) => {
    return (
        <div>
            <h1>API Users</h1>

            <ul>
                {users.map((user) => (
                    // ユーザーの名前をリスト化
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiUsers;
