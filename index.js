require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello', (req, res) => {
    res.send('<h1> Hello from hello! </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Our app is listening on port ${port}`)
})