import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json({ message: "Hello from API Route" });
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        //GETリクエストの場合の処理
        res.status(200).json({ message: "This is a GET request" });
    } else if (req.method === "POST") {
        //POSTリクエストの場合の処理
        const { name } = req.body;
        res.status(200).json({
            message: `Hello ${name}! This is a POST request`,
        });
    } else {
        //その他のリクエストの場合の処理
        res.status(405).json({ message: "Method Not Allowed" }); //405 Method Not Allowed
    }
}
