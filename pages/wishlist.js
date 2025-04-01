import { useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([{ id: 2, name: "Lego Set", price: 40 }]);

  return (
    <div className="max-w-md mx-auto p-5">
      <h1 className="text-2xl font-bold">Your Wishlist ❤️</h1>
      {wishlist.length === 0 ? <p>No items yet.</p> : wishlist.map((item) => <p key={item.id}>{item.name} - ${item.price}</p>)}
    </div>
  );
}
