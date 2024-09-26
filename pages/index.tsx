import Link from "next/link";

const Home = () => {
    <div>
        <h1>Welcome to Next.js with TypeScript</h1>
        <Link href="/about">
            <a>go to about page</a>
        </Link>
    </div>;
};

export default Home;
