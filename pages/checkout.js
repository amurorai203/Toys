import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

export default function Checkout() {
  const [cart, setCart] = useState([{ id: 1, name: "Teddy Bear", price: 25, quantity: 1 }]);

  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cart }),
    });

    const session = await response.json();
    await stripe.redirectToCheckout({ sessionId: session.id });
  };

  return (
    <div className="max-w-md mx-auto p-5">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <button className="bg-green-500 text-white w-full p-3 mt-5" onClick={handleCheckout}>
        Proceed to Payment
      </button>
    </div>
  );
}
