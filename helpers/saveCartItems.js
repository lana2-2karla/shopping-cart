const saveCartItems = (cartItemsValue) => {
  localStorage.setItem('cartItems', cartItemsValue);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
