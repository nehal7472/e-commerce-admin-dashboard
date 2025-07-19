// components/lib/api.js

export const fetchProducts = async () => {
  try {
    const res = await fetch("https://fakeapi.platzi.com/en/rest/products/");
    const data = await res.json();

    // Add random status to each product
    const enriched = data.map((product) => ({
      ...product,
      status: getRandomStatus(),
    }));

    return enriched;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
};

const getRandomStatus = () => {
  const statuses = ["Pending", "Shipping", "Completed", "Refund"];
  return statuses[Math.floor(Math.random() * statuses.length)];
};
