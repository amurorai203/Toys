import Stripe from "stripe";

const stripe = new Stripe("YOUR_STRIPE_SECRET_KEY");

export default async function handler(req, res) {
  const { cart } = req.body;
  const lineItems = cart.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: { name: item.name },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://your-site.com/success",
    cancel_url: "https://your-site.com/cancel",
  });

  res.json({ id: session.id });
}
