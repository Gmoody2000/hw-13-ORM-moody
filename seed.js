const sequelize = require('cd C:\Users\garre\Documents\class hw\hw-13-ORM-moody/config/connection'); 
const { Category, Product, Tag, ProductTag } = require('cd C:\Users\garre\Documents\class hw\hw-13-ORM-moody/models'); 

const seedDatabase = async () => {
    await sequelize.sync({ force: true }); 
    
    const categories = await Category.bulkCreate([
      { category_name: 'Electronics' },
      { category_name: 'Clothing' },
    ], { individualHooks: true });
  
    const products = await Product.bulkCreate([
      {
        product_name: 'Laptop',
        price: 999.99,
        stock: 10,
        category_id: categories[0].id, 
      },
      {
        product_name: 'T-shirt',
        price: 19.99,
        stock: 20,
        category_id: categories[1].id, 
      },
    ], { individualHooks: true });
  
    const tags = await Tag.bulkCreate([
      { tag_name: 'Technology' },
      { tag_name: 'Fashion' },
    ], { individualHooks: true });
  
    const productTags = await ProductTag.bulkCreate([
      { product_id: products[0].id, tag_id: tags[0].id },
      { product_id: products[1].id, tag_id: tags[1].id },
    ], { individualHooks: true });
  
    console.log('Database seeded successfully.');
  };
  
  seedDatabase();
  