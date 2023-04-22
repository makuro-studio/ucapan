import { NextApiRequest, NextApiResponse } from "next";
import fs from 'fs'

export default function kartu(req: NextApiRequest, res: NextApiResponse) {
    // serve image from public folder
    const image = fs.readFileSync(`${process.cwd()}/public/kartu.png`)
    res.setHeader('Content-Type', 'image/png')
    res.end(image)
    
}