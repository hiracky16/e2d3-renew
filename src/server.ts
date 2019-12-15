import express, { Request, Response } from 'express';
import fs from 'fs'
import index from './routers/index'

const app = express();

const graphPath = '.' // e2d3-contrib へのパスを設定する必要あり
app.use('/graphs', express.static(graphPath))

app.use('/', index)

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});

export default app;
