const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
  ];
  
  const totalPriceTTC = products
    .map(product => product.price * 1.25)  
    .reduce((total, price) => total + price, 0); 
  
  console.log(totalPriceTTC); 
  