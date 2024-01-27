import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import colors from 'colors'
dotenv.config()
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorHandler.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

const port = process.env.PORT | 2000

connectDB() // Connect to MongoDB

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server is running on port ${port}`.cyan))