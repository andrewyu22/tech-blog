const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [{
        username: 'nwest',
        email: 'nwestnedge0@cbc.ca',
        password: 'password123'
    },
    {
        username: 'remebes1',
        email: 'rmebes1@sogou.com',
        password: 'password123'
    },
    {
        username: 'andrewyu22',
        email: 'andrewyu2654@gmail.com',
        password: '123456'
    },
    {
        username: 'a',
        email: 'a@gmail.com',
        password: '123456'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;