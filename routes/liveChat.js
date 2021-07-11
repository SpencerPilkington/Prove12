const express = require('express')
const router = express.Router()

const users = ['admin'] // Dummy array for users

router.get('/', (req, res, next) => {
    res.render('pages/pr12-login', {
        title: 'Prove Activity 12',
        path: '/proveActivities/12'
    })
})

// Verify login submission to access chat room.
router.post('/login', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    const { username } = req.body;

    if (!username || username.trim() === '') {
        return res.status(400).send({ error: 'Username cannot be empty!!' });

    }
    if (users.includes(username.trim())) {
        return res.status(409).send({ error: 'Username is taken!!' });
    }

    users.push(username.trim());
    req.session.user = username;
    res.status(200).send({ username: username.trim() });
});

// Render chat screen.
router.get('/chat', (req, res, next) => {
    /***********************************
     *         YOUR CODE HERE          *
     ***********************************/
    res.render('pages/pr12-chat', {
        title: 'Chat Room',
        path: '/proveAssignments/12',
        user: req.session.user,
    });
});

module.exports = router
