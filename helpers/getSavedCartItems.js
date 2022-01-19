// getSavedCartItems captura os itens já salvos no localStorage;
// cartItems: ol - lista de itens do carrinho;
// ATENÇÂO - Todos os itens são uma string só!!
const getSavedCartItems = () => localStorage.getItem('cartItems') || null;

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
