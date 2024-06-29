# Object Relational Mapping 

## Description 
This project involves developing an e-commerce back-end system using Sequelize ORM with Express.js. The application allows users to interact with the database to view, create, update, and delete relevant data. It features a well-structured schema, efficient routing, and comprehensive CRUD functionalities.

## Table of Contents 📝

- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [Contributing](#contributing)
- [Questions](#questions-📝)
- [Deployment](#deployment)
- [Video Demonstration](#video-demonstration)


## Installation 
To install the necessary dependencies, run the following command:<br>
`npm install`

## Usage
To use the application, follow these steps:

1. Install the required packages using the `npm install` command.

2. Seed the database with the sample data:<br>
`npm run seed`

3. Start the server:<br>
`npm start`

4. Once the server is running, you can view and manipulate the data using Insomnia or any other API client by sending requests to the appropriate routes. 

## Test 
All routes were tested using Insomnia to ensure they function correctly. The following CRUD operations were tested:

* Create: Adding new entries to the database.

* Read: Retrieving Data from the database.

* Update: Modifying existing entries in the database.

* Delete: Removing entries from the database.

### Model Associations 

The application uses Sequelize to define relationships between models. The associations are set up as follows:

    const Product = require('./Product');
    const Category = require('./Category');
    const Tag = require('./Tag');
    const ProductTag = require('./ProductTag');

    // Products belong to Category
    Product.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
    });

    // Categories have many Products
    Category.hasMany(Product, {
    foreignKey: 'category_id'
    });

    // Products belong to many Tags (through ProductTag)
    Product.belongsToMany(Tag, {
    through: ProductTag,
    foreignKey: 'product_id'
    });

    // Tags belong to many Products (through ProductTag)
    Tag.belongsToMany(Product, {
    through: ProductTag,
    foreignKey: 'tag_id'
    });

    module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
    };

These associations ensure that:

* A product belongs to a category.

* A category can have many products.

* A product can have many tags through `ProductTag` model.

* A tag can belong to many products through the `ProductTag` model.

## Contributing

If you would like to contribute to this project, please fork the repository and open a pull request with your new code.

## Questions

If you have any questions, feel free to reach out to me via email at kbrandon863@gmail.com.<br> You can also view more of my work on GitHub profile: [bkness](https://github.com/bkness) | https://github.com/bkness

## Deployment 
The code for this project can be viewed on GitHub: [Object Relational Mapping (ORM) E-Commerce Back-End](https://github.com/bkness/Object-Relational-Mapping-) | https://github.com/bkness/Object-Relational-Mapping

## Video Demonstration
To see the application in action, watch the video walkthrough: [Video Walkthrough](https://github.com/bkness/model-view-controller/assets/123907755/15cbe657-8609-4fa8-9b47-08d542c24ffd) | https://github.com/bkness/model-view-controller/assets/123907755/15cbe657-8609-4fa8-9b47-08d542c24ffd

