import { useState } from 'react';

export default function CartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Teddy Bear", price: 25, quantity: 1 },
  ]);

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold">Shopping Cart 🛒</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-5">Your cart is empty.</p>
      ) : (
        <div className="bg-white p-5 rounded-lg shadow-md">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between border-b py-2">
              <p>{item.name} x{item.quantity}</p>
              <p>${item.price * item.quantity}</p>
              <button onClick={() => removeItem(item.id)} className="text-red-500">❌</button>
            </div>
          ))}
          <p className="text-lg font-bold mt-5">Total: ${total}</p>
          <button className="mt-3 bg-green-500 text-white px-4 py-2 rounded-lg">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}
