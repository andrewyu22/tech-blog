const { Post } = require('../models');

const postdata = [{
        title: 'Why MVC is so important',
        description: 'MVC allows developeres to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
        user_id: 1
    },
    {
        title: 'Authentication vs. Authorization',
        description: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
        user_id: 1
    },
    {
        title: 'Object-Relational Mapping',
        description: 'I have really loved learning about ORMs. Its really simplified the way i create queries in SQL!',
        user_id: 2
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;