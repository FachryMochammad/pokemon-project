"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MyList extends Model {
    static associate(models) {}
  }
  MyList.init(
    {
      pokemon_name: DataTypes.STRING,
      nickname: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "MyList",
      hooks: {
        beforeCreate: (mylist) => {
          if (!mylist.nickname) {
            mylist.nickname = mylist.pokemon_name
          }
        },
      }
    }
  );
  return MyList;
};
