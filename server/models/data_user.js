'use strict';
const bcrypt = require('bcrypt')
const saltRounds = 10
// const jwt = require('jsonwebtoken')// tokennya di controller
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_user.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_user',
    hooks: {
      beforeCreate: async (data_user) => {
        data_user.password = await bcrypt.hash(data_user.password, saltRounds)
      },
      beforeUpdate: async (data_user) => {
        data_user.password =  await bcrypt.hash(data_user.password, saltRounds)
      },
    },
  });


  return data_user;
  
};