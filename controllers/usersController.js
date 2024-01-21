let id = 1;
const users = [];

const addUser = (req, res) => {
    if (Object.keys(req.body).length === 0) {
        // Return a 400 Bad Request response for an empty body
        return res.status(400).json({
            success: false,
            message: 'Request body is empty',
            data: users
        });
    }

    users.push({ id, ...req.body });
    id++; // Increment the id for the next item
    res.status(201).json({
        success: true,
        message: 'User added successfully',
        data: users
    });
};

const updateUser = (req, res) => {
    const { id } = req.params;
    const { name } = req.query;
    // console.log(req.query);
    const user = users.find(user => user.id === parseInt(id));

    if (user) {
        user.name = name || user.name;
        res.status(200).json({
            success: true,
            message: `User with id ${id} updated successfully`,
            data: users
        });
    } else {
        res.status(400).json({
            success: false,
            message: `User with id ${id} doesn't exist`,
            data: users
        });
    }
};

const deleteUser = (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(user => user.id === parseInt(id));

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(200).json({
            success: true,
            message: `User with id ${id} deleted successfully`,
            data: users
        });
    } else {
        res.status(400).json({
            success: false,
            message: `User with id ${id} does not exist`,
            data: users
        });
    }
};

module.exports = {
    addUser,
    updateUser,
    deleteUser
};