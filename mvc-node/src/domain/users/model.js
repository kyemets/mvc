let users = [
    {
        id: "1",
        username: "John",
        age: 21,
    },
];

module.exports = {
    create: ({ username, age }) => {
        const newUser = {
            username,
            age,
            id: String(Date.now()),
        };

        if (!users.find((user) => user.username === users)) {
            users.push(newUser);
        } else {
            throw new Error(`User ${username} already exists`);
        }

        return newUser;
    },
    removeById: ({ id }) => {
        const userIndex = users.findIndex((user) => user.id === String(id));

        if (userIndex === -1) {
            throw new Error(`User not found`);
        }

        users.splice(userIndex, 1);

        return id;
    },
    removeByUsername: ({ id }) => {},
    getAll: () => {
        return users;
    },
    getById: ({ id }) => {
        return users.find((user) => user.id === id);
    },
};
