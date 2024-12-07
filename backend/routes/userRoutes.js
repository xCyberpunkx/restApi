import express from 'express';
import userController from '../controllers/userController.js';

const router = express.Router();

// GET all users
router.get('/users', userController.getAllUsers);

// GET a user by ID
router.get('/users/:id', userController.getUserById);  // Corrected here

// POST create a new user
router.post('/users', userController.createUser);

// PUT update an existing user
router.put('/users/:id', userController.updateUser);

// DELETE a user
router.delete('/users/:id', userController.deleteUser);

export default router;
