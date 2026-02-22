// Global Context
const productName = "Smartphone";
const price = 499;
const brand = "TechCode";

function getProductInfo() {
  // Local Context
  const productName = "Laptop";
  const price = 899;
  return `${productName} costs $${price} and is from the brand ${brand}`;
}

// productName LOCAL - price LOCAL - brand GLOBAL
console.log(getProductInfo());
// productName GLOBAL - price GLOBAL - brand GLOBAL
console.log(`${productName} costs $${price} and is from the brand ${brand}`);
