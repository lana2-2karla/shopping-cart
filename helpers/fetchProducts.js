const fetchProducts = async (item) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

// console.log(fetchProducts());
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
