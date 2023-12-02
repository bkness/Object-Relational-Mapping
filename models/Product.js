// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    stock: { 
      type: DataTypes.INTEGER, 
      defaultValue: 10, 
      validate: { 
        isNumeric: true 
      } 
    },
    price: { 
      type: DataTypes.DECIMAL, 
      allowNull: false, 
      validate: { 
        isDecimal: true 
      }} // allow null will kick the entry back to you if someething isnt defined 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
// interger aut incr id also usse for primary Key
// exc 13 for resource