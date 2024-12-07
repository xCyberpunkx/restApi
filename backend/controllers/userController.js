import userService from '../services/userService.js'; // Correct import for default export

async function getAllUsers(req, res) {
    try {
        const users = await userService.getAllUsers();
        return res.json(users);
    } catch (err) {
        res.status(500).json({
            message: "Failed to get all users",
        });
    }
}

async function getUserById(req, res) {
    const id = req.params.id;
    try {
        const user = await userService.getUser(id);
        return res.json(user);
    } catch (err) {
        res.status(500).json({
            message: "Failed to get user",
        });
    }
}

async function createUser(req, res) {
    try {
        const data = req.body;
        const newUser = await userService.createUser(data);
        return res.json(newUser);
    } catch (err) {
        res.status(500).json({
            message: "Failed to create user",
        });
    }
}

async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const updatedUser = await userService.updateUser(id, req.body);
        return res.json(updatedUser);
    } catch (err) {
        res.status(500).json({
            message: "Failed to update user",
        });
    }
}

async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        const deletedUser = await userService.deleteUser(id);
        return res.json(deletedUser);
    } catch (err) {
        res.status(500).json({
            message: "Failed to delete user",
        });
    }
}

export default {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
