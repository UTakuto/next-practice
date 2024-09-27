import { GetServerSideProps } from "next";

type User = {
    id: number;
    name: string;
};

//サーバーサイドでリクエストごとに実行され、ページ用のデータを取得します
export const getServerSideProps: GetServerSideProps<{
    users: User[];
}> = async () => {
    try {
        //外部APIからユーザー情報を取得
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        //レスポンスのステータスコードがエラーの時の対応
        if (!res.ok) {
            throw new Error(`Failed to fetch props , status: ${res.status}`);
        }

        //fetchしたdataをjson形式で取得
        const users: User[] = await res.json();

        //`props`としてコンポーネントにデータを渡す
        return { props: { users } };
    } catch (error) {
        // エラーが発生した場合の処理
        console.error(error);
        return { notFound: true };
    }
};

const Users = ({ users }: { users: User[] }) => {
    return (
        <div>
            <h1>Users List</h1>
            <ul>
                {/* ユーザーリストを表示。ユーザーデータごとにリストアイテムを作成 */}
                {users.map((user) => (
                    <li key={user.id}> {user.name} </li>
                ))}
            </ul>
        </div>
    );
};

export default Users;
