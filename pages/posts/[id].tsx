// import { useRouter } from "next/router";

// const Post = () => {
//     const router = useRouter();
//     const { id } = router.query;

//     return <p>Post ID: {id}</p>;
// };

// export default Post;

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();

    //fetchで取得したデータを元に、URLパラメータを生成
    const paths = posts.map((post) => ({
        //`params` キーには、`id` という名前のパラメータを持つオブジェクトを指定
        params: { id: post.id.toString() },
    }));

    //生成された全てのパスと、生成するパスが見つからない場合の処理を返す
    return { paths, fallback: false };
    // `fallback: false` は、`getStaticPaths` で返されたパス以外のリクエストを404ページにリダイレクト
};
