import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
dotenv.config()
import connectDB from './config/db.js'
import products from './data/products.js'

const port = process.env.PORT | 2000

connectDB() // Connect to MongoDB

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id)
  res.json(product)
})

app.listen(port, () => console.log(`Server is running on port ${port}`.cyan))