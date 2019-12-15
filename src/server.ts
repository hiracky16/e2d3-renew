import express, { Request, Response } from 'express';
import path from 'path'
import http from 'http'
import fs from 'fs'

const app = express();

const graphPath = '.' // e2d3-contrib へのパスを設定する必要あり
app.use('/graphs', express.static(graphPath))

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello world.");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
	fs.readdir(graphPath, (err, files) => {
		console.log(files)
	})
});


export default app;
