// services/userService.js

import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

// Get all users
async function getAllUsers() {
    try {
        return await prisma.user.findMany();
    } catch (error) {
        throw new Error('Error fetching users');
    }
}

// Get a user by ID
async function getUser(id) {
    try {
        return await prisma.user.findUnique({
            where: { id },
        });
    } catch (error) {
        throw new Error(`Error fetching user with ID: ${id}`);
    }
}

// Create a new user
async function createUser(user) {
    try {
        return await prisma.user.create({
            data: user,
        });
    } catch (error) {
        throw new Error('Error creating user');
    }
}

// Update an existing user
async function updateUser(id, userData) {
    try {
        return await prisma.user.update({
            where: { id },
            data: userData,
        });
    } catch (error) {
        throw new Error(`Error updating user with ID: ${id}`);
    }
}

// Delete a user
async function deleteUser(id) {
    try {
        return await prisma.user.delete({
            where: { id },
        });
    } catch (error) {
        throw new Error(`Error deleting user with ID: ${id}`);
    }
}

// Export functions as default
export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
};
