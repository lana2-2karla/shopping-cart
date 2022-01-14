const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

// console.log(fetchProducts());
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
