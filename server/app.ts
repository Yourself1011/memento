require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ 'message': 'Hello World and welcome to the API for Memento!'})
})

app.listen(5000, () => {
  console.log(`🚀 Server is running on port: 5000`);
});