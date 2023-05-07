import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import cors from 'cors'

const app: Express = express()
dotenv.config()

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ 'message': 'Hello World and welcome to the API for Memento!'})
})

app.listen(5000, () => {
  console.log(`🚀 Server is running on port: 5000`);
});