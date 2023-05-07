import dotenv from 'dotenv'
import express, { Express, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import notFound from '../middlewares/notfound.ts'

const app: Express = express()
dotenv.config()

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.json({ 'message': 'Hello World and welcome to the API for Memento!'})
})

app.get('*', notFound)


const port = process.env.SERVER_PORT || 5000

console.log("Starting Express server...")

app.listen(5000, async () => {
  console.log(`🚀 Server is running on port ${port}!`);

  console.log('Connecting to MongoDB...')
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('🌱 Finished connecting to MongoDB! ')
  } catch (error) {
    console.error('Error while connecting to MongoDB,', error)
  }
});