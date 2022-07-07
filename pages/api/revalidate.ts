// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next';
require('dotenv').config();

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | string>
) {
    if (req.query.secret !== process.env.REVALIDATION_TOKEN)
        return res.status(401).json({message: 'Invalid token'});

    try {
        await res.unstable_revalidate('/');
        return res.status(200).json({message: 'Revalidation successful'});
    } catch (error) {
        return res.status(500).send('Error revalidating');
    }
}
