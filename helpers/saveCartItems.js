// salva os itens no localStorage;
// cartItemsValue: string contendo os dados do item clicado
const saveCartItems = (cartItemsValue) => {
  localStorage.setItem('cartItems', cartItemsValue);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
