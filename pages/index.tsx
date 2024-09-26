import Button from "../components/Button";
import Link from "next/link";

const Home = () => (
    <div>
        <h1>Welcome to Next.js with TypeScript</h1>
        {/* about page link */}
        {/* <Link href="/about">
            <a>go to about page</a>
        </Link> */}

        {/* posts page link */}
        <Link href="/posts/1">{/* <a>Go to post 1</a> */}</Link>

        <Button />
    </div>
);

export default Home;
