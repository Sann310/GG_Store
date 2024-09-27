// pages/api/products/index.js
export default function handler(req, res) {
  const { category } = req.query;
  console.log('Received category:', category); // Log the received category

  const products = [
    {
      id: 1,
      name: 'Legend of Zelda T-Shirt',
      description: 'A cool T-shirt from the Legend of Zelda series.',
      price: 19.99,
      imageURL: '/images/zelda-tshirt.jpg',
      category: 'apparel',
      stockQuantity: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Mario Hat',
      description: 'A cool hat from the Mario series.',
      price: 15.99,
      imageURL: '/images/mario-hat.jpg',
      category: 'accessories',
      stockQuantity: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Add more products here if needed
  ];

  const filteredProducts = products.filter(p => p.category === category);
  if (filteredProducts.length > 0) {
    res.status(200).json(filteredProducts);
  } else {
    res.status(404).json({ message: 'No products found for this category' });
  }
}