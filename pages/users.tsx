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
        return { props: { users: [] } };
    }
};
