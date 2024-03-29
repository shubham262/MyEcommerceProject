
'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require(`bcryptjs`); 
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order,{
        foreignKey : 'userId'
      })
      this.belongsToMany(models.Role, { through: 'User_Roles' });
    }
  }
  User.init({
    email: { type : DataTypes.STRING,
      validate: {
        isEmail: true, // to validate the email format is correct
      } 
    },
    password: {
      type : DataTypes.STRING,
      validate: {
        len: [5,40], //password's length can be between 5 to 40 characters
      }
    },
    username:{type : DataTypes.STRING,
      allowNull : false,
      unique : true
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate(async(user)=>{
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
  })
  return User;
};