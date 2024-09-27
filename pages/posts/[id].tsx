import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    try {
        //外部APIからデータを取得
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        //レスポンスのステータスコードがエラーの時の対応
        if (!res.ok) {
            throw new Error(`Failed to fetch props , status: ${res.status}`);
        }

        //fetchしたdataをjson形式で取得
        const posts: { id: number }[] = await res.json();

        const paths = posts.map((post) => ({
            //`params` キーには、`id` という名前のパラメータを持つオブジェクトを指定
            params: { id: post.id.toString() },
        }));

        return { paths, fallback: false };
    } catch (error) {
        console.error(error);
        return { paths: [], fallback: false };
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        //`params.id`を使って個別の投稿データを取得
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params?.id}`
        );

        //レスポンスのステータスコードがエラーの時の対応
        if (!res.ok) {
            throw new Error(`Failed to fetch props , status: ${res.status}`);
        }

        //fetchしたdataをjson形式で取得
        const post: { id: number; title: string; body: string } =
            await res.json();

        //`props`としてコンポーネントにデータを渡す
        return {
            props: { post },
        };
    } catch (error) {
        console.error(error);
        return { notFound: true };
    }
};

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <div>
            {/* 投稿タイトル */}
            <h1> {post.title} </h1>
            {/* 投稿の本文 */}
            <p> {post.body} </p>
        </div>
    );
};

export default Post;
