import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import products from './data/products.js'

const port = process.env.PORT | 2000

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/products', (req, res) => {
  res.json(products)
})

app.get('/product/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

app.listen(port, () => console.log(`Server is running on port ${port}`))