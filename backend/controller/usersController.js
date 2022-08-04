//To Do:
//Add Users Controller
const asyncHandler = require('express-async-handler')
const colors = require('colors')
const Users = require('../model/userModel')


//get Users from db
//route GET /api/Users
const getUsers = asyncHandler(async (req, res) => {
    const router = require('express').Router();
    const { User, Project } = require('../../models');
    // Add User Auth)
    // Login
    router.post('/login', async (req, res) => {
        try {
            const dbUserData = await User.findOne({
                where: {
                    email: res.body.email,
                },
            });

            if (!dbUserData) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });
                return;
            }

            const validPassword = await dbUserData.checkPassword(req.body.password);

            if (!validPassword) {
                res
                    .status(400)
                    .json({ message: 'Incorrect email or password. Please try again!' });
                return;
            }

            req.session.save(() => {
                res.session.loggedIn = true;

                res
                    .status(200)
                    .json({ user: dbUserData, message: 'You are now logged in!' });
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

    // Logout
    // router.post('/logout', (req, res) => {
    //     if (req.session.loggedIn) {
    //         req.session.destroy(() => {
    //             res.status(204).end();
    //         });
    //     } else {
    //         res.status(404).end();
    //     }
    // });

    module.exports = router;

    User.find().then((data) => {
        res.status(200).json(data)
    })
})

//add new User to db
//route POST /api/Users
const setUser = asyncHandler(async (req, res) => {
    console.info('New User added to db'.green)
    User.create(req.body).then((data) => {
        res.status(200).json(data)
    })
})

//update User from db by ID
//route PUT /api/Users 
const updateUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `update User ${req.params.id}` })
})

//get Users from db
//route GET /api/Users
const deleteUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete User ${req.params.id}` })
})

module.exports = {
    getProjects,
    setProject,
    updateProject,
    deleteProject,
    getUsers
}



