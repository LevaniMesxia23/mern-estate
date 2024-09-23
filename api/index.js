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
app.listen(3000, () => {
  console.log("Server listens to port 3000!");
});

app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)


app.use((err, req,res,next) => {
  const statusCode = res.statusCode || 500;
  const message = res.message || "Internal Server Error"
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message
  })
})