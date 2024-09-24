import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "../api/routes/user.route.js"
import authRouter from "../api/routes/auth.route.js"
dotenv.config();
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connect to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server listens to port ${PORT}!`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});