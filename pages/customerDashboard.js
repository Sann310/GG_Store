import { useEffect, useState } from 'react';

const CustomerDashboard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data.data);
    } catch (error) {
      console.error('Failed to fetch products:', error);
    }
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <img src={product.imageURL} alt={product.name} style={{ width: '200px', height: '200px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: {product.price} ฿</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;