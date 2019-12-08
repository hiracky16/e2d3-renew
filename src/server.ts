import express, { Request, Response } from 'express'

const app = express()

app.get(
		'/',
		(req: Request, res: Response) => {
				return res.send('Hello world.')
		})

app.listen(
		3000,
		() => {
				console.log('Example app listening on port 3000!')
		})

export default app

