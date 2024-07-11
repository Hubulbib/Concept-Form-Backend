import express from 'express'
import { dbConnect } from './infrastructure/db'
import 'dotenv/config.js'
import cors from 'cors'
import { formRouter } from './infrastructure/routers/form.router'
import { answerRouter } from './infrastructure/routers/answer.router'
import { ErrorMiddleware } from './infrastructure/middlewares/errorMiddleware/error.middleware'
import { setupSwagger } from './infrastructure/swagger'

const app = express()
const PORT = process.env.PORT

// dbs
await dbConnect()

app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:8080',
  }),
)

// http://localhost:3000

// API
app.use('/api/form', formRouter)
app.use('/api/answer', answerRouter)

setupSwagger(app)

app.use(ErrorMiddleware)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
