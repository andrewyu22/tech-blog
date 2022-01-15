const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// Create Users Model
class User extends Model {
    checkPassword(password) {
        return bcrypt.compareSync(password, this.password);
    }
}

// create fields & columns for User Model
User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4]
        }
    }
}, {
    hooks: {
        // set up beforeCreate for password
        async beforeCreate(newUser) {
            newUser.password = await bcrypt.hash(newUser.password, 10);
            return newUser;
        },
        async beforeUpdate(updateUser) {
            updateUser.password = await bcrypt.hash(updateUser.password, 10);
            return updateUser;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
});

module.exports = User;