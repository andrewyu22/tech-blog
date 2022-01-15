const { Post } = require('../models');

const postdata = [{
        title: 'Donec posuere metus vitae ipsum.',
        description: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
        user_id: 1
    },
    {
        title: 'Morbi non quam nec dui luctus rutrum.',
        description: 'https://nasa.gov/donec.json',
        user_id: 2
    },
    {
        title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        description: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
        user_id: 1
    },
    {
        title: 'Nunc purus.',
        description: 'http://desdev.cn/enim/blandit/mi.jpg',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;