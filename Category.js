const { Model, DataTypes } = require('sequelize');
const sequelize = require('cd C:\Users\garre\Documents\class hw\hw-13-ORM-moody/config/connection'); 

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false, 
    freezeTableName: true, 
    underscored: true, 
    modelName: 'category',
} 
);

module.exports = Category;

