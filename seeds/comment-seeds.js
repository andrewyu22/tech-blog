const { Comment } = require('../models');

const commentdata = [{
        comment_text: 'MVC is such a clean way to seperate layer of codes.',
        user_id: 3,
        post_id: 1
    },
    {
        comment_text: 'MVC is a great concept to learn!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Authorization is so important to cyber security of a company!',
        user_id: 3,
        post_id: 2
    },
    {
        comment_text: 'ORMs definitely simplified the way I query SQL!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'I think learning SQL Query is still useful too.',
        user_id: 1,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;