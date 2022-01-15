const router = require('express').Router();

const userRoutes = require('./user-routes');
const commentRoutes = require('./comment-route');
const postRoutes = require('./post-route');

router.use('/users', userRoutes);
router.use('/comments', commentRoutes);
router.use('/posts', postRoutes);

module.exports = router;