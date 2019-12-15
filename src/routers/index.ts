import express, { Request, Response } from 'express';
import fs from 'fs'

const router = express.Router()

const graphPath = '.' // e2d3-contrib へのパスを設定する必要あり

router.get('/', async (req: Request, res: Response) => {
  await fs.readdir(graphPath, (err: any, files: string[]) => {
    const response = files.join('<br />')
    return res.send(response);
  })
})

export default router