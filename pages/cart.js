import React from 'react';
import CartItem from '../components/CartItem';
import ProductForm from '../components/ProductForm';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  const handleAddProduct = (newProduct) => {
    addToCart(newProduct);
  };

  return (
    <div className="cart">
      <ProductForm onAddProduct={handleAddProduct} />
      {cartItems && cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem key={item.id} item={item} onRemove={removeFromCart} />
        ))
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;