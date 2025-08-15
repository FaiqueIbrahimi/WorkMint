import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js';
import applicationRoute from './routes/application.route.js';

dotenv.config({});

const app = express();

// Move connectDB to async function and add error handling
const startServer = async () => {
  try {
    await connectDB();
    console.log('Database connected successfully');
    
    //middlewares 
    app.use(cookieParser());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const corsOptions = {
      origin: 'https://work-mint-six.vercel.app',
      credentials : true,
    };
    app.use(cors(corsOptions));

    app.use("/api/v1/user", userRoutes);
    app.use("/api/v1/company", companyRoute);
    app.use("/api/v1/job", jobRoute);
    app.use("/api/v1/application", applicationRoute);

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Promise Rejection:', err);
  process.exit(1);
});

startServer();