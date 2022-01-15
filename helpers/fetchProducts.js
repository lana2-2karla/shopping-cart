const fetchProducts = async (item) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

// console.log(fetchProducts());
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
