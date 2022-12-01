const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, email } = req.body;

  const shortDescription = function (description) {
    const maxLength = 150;

    let trimmedString = description.substr(0, maxLength);

    return (trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
    ));
  };

  const transformedItems = items.map((item) => ({
    quantity: item.qty,
    price_data: {
      currency: "php",
      unit_amount: item.price * 100,
      product_data: {
        name: item.name,
        description: shortDescription(item.description),
        images: [item.displayImage],
      },
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["GB", "US", "CA"],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: "http://localhost:3000/Success",
    cancel_url: "http://localhost:3000/Basket",
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
