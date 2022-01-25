const router = require('express').Router();
const User = require('../../models/User');

// Create New User
router.post('/', async(req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

router.post('/login', async(req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.username
            }
        });
        if (!dbUserData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }
        const validPassword = dbUserData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }
        req.session.save(() => {
            req.session.loggedIn = true;
            req.session.user_id = dbUserData.id;
            res.status(200)
                .json({ user: dbUserData, message: "You are now logged in!" });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

// Logout
router.post('/logout', (req, res) => {
    // When the user logs out, destroy the session
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;