import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
dotenv.config()
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorHandler.js'
import productRoutes from './routes/productRoutes.js'

const port = process.env.PORT | 2000

connectDB() // Connect to MongoDB

const app = express()

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`.cyan))