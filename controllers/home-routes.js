const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
            attributes: [
                'id',
                'title',
                'description'
            ],
            // include: [{
            //         model: Comment,
            //         attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            //         include: {
            //             model: User,
            //             attributes: ['username']
            //         }
            //     },
            //     {
            //         model: User,
            //         attributes: ['username']
            //     }
            // ]
        })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));

            res.render('homepage', {
                posts,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/homgepage/');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    console.log(req.session.loggedIn);
    res.render('signup');
})

module.exports = router;