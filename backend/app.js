import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes.js';

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5174', // React development server URL
}));
app.use(bodyParser.json()); // Parse JSON request bodies

// Use user routes
app.use('/api', userRoutes); // All user-related routes will start with /api

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

export default app;
