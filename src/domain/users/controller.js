const userModel = require("./model");

module.exports = {
    getAll: (req, res) => {
        return res.render("users.hbs", {
            users: userModel.getAll(),
        });
    },
    create: (req, res) => {
        try {
            const { age, username } = req.body;

            if (!age || !username) {
                throw new Error("no age or username specified");
            }

            userModel.create({ age, username });

            return res.redirect("/users");
        } catch (err) {
            return res.render("users-error.hbs", {
                message: err.message,
            });
        }
    },
    removeById: (req, res) => {
        try {
            const id = req.query.id;

            if (!id) {
                throw new Error("no id specified");
            }

            userModel.removeById({ id });

            res.render("users-view.hbs", {
                users: userModel.getAll(),
            });
        } catch (err) {
            return res.render("users-error.hbs", {
                message: err.message,
            });
        }
    },
};
