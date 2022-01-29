const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [{
        username: 'johndoe',
        email: 'johndoe@gmail.com',
        password: '123456'
    },
    {
        username: 'janedoe',
        email: 'janedoe@gmai.com',
        password: '123456'
    },
    {
        username: 'andrewyu',
        email: 'andrewyu2654@gmail.com',
        password: '123456'
    },
    {
        username: 'irene',
        email: 'irene@gmail.com',
        password: '123456'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;