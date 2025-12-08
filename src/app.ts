import express from 'express'
import authRoutes from './routes/auth.route'
import { connectDB } from './config/db'
import dotenv from 'dotenv'
import { errorHandler } from './middlewares/errorHandler'
import { responseHandler } from './middlewares/responseHandler'

dotenv.config()


const PORT = process.env.PORT

const app = express()

connectDB()

app.use(express.json)
app.use(responseHandler)

app.get('/', (req, res) => {
  res.send("API is healthy")
})

app.use("/api/auth", authRoutes)

app.use(errorHandler)

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})