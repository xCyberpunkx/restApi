import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

// Fetch users
export const fetchUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};

// Add a user
export const addUser = async (newUser) => {
    try {
        const response = await axios.post(API_URL, newUser);
        return response.data;
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

// Update a user
export const updateUser = async (userId, updatedData) => {
    try {
        const response = await axios.put(`${API_URL}/${userId}`, updatedData);
        return response.data;
    } catch (error) {
        console.error('Error updating user:', error);
    }
};

// Delete a user
export const deleteUser = async (userId) => {
    try {
        await axios.delete(`${API_URL}/${userId}`);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};
