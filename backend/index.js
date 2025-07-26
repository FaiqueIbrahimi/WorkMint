import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';


dotenv.config({});

const app = express();



// app.get('/', (req, res) => {
//   return res.status(200).json({
//     message: 'Welcome to the WorkMint backend API',
//     success: true,
//   });
// });

//middlewares 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOptions = {
  origin: 'http://localhost:5173', // Allow requests from this origin
  credentials : true, // Allow credentials (cookies, authorization headers, etc.)
};
app.use(cors(corsOptions));

app.use("/api/v1/user", userRoutes);





app.listen(process.env.PORT, () => {
    connectDB();
  console.log(`Server is running on http://localhost:${process.env. PORT}`);
});