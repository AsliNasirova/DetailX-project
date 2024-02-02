import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()

const Schema = mongoose.Schema;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect()
  .then(() => console.log('Connected!'))
  .catch(() => console.log('db not connect'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})