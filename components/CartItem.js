import Link from 'next/link';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.imageURL} alt={item.name} />
      <div className="cart-item-details">
        <h2>{item.name}</h2>
        <p>${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <Link href={`/product/${item.id}`}>
          View Details
        </Link>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;