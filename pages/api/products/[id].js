// pages/api/products/[id].js
export default function handler(req, res) {
  const { id } = req.query;
  console.log('Received id:', id); // Log the received id

  const products = [
    {
      id: 1,
      name: 'Legend of Zelda T-Shirt',
      description: 'A cool T-shirt from the Legend of Zelda series.',
      price: 19.99,
      imageURL: '/images/zelda-tshirt.jpg',
      categoryId: 1,
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
      categoryId: 2,
      stockQuantity: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    // Add more products here if needed
  ];

  const product = products.find(p => p.id === parseInt(id));
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
}