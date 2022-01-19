// cartItems: Ol - lista do carrinho de compras;
const cartItems = document.querySelector('.cart__items');

function createProductImageElement(imageSource) { 
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  // ----- Ao remover o item, fica salvo lo LocalStorage ------- //
  saveCartItems(cartItems.innerText);
  // ---------- ------------- -------------- ------------- ----- //
}
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// -------------------------------------------------------------------------//
// addCart e addEventToButton adicionam ao carrinho!!                       
const addCart = async (event) => {
 const itemID = getSkuFromProductItem(event.target.parentElement);
 const specificItem = await fetchItem(itemID);
 const OlCartsItens = cartItems;
 const { id: sku, title: name, price: salePrice } = specificItem;
 const item = createCartItemElement({ sku, name, salePrice });
 item.addEventListener('click', cartItemClickListener);
 OlCartsItens.appendChild(item);
 // -------- Ao add o item, salvo no localStorage -------- //
 saveCartItems(cartItems.innerText);
 // ----------  -------   ---------- ------------ //
};
const addEventToButton = () => {
  // captura button
  const buttons = document.querySelectorAll('.item__add');
 buttons.forEach((btn) => {
 btn.addEventListener('click', addCart);
 });
};
// --------------------------------------------------------------------------//

const onStageProducts = async () => {
  // captura produtos gerais da API
  const objectProduts = await fetchProducts('computador');
  const arrObjProdut = objectProduts.results;
  const sectionProducts = document.querySelector('.items');

  arrObjProdut.forEach((objProdut) => {
    const { id: sku, title: name, thumbnail: image } = objProdut;
    const creatProduct = createProductItemElement({ sku, name, image });
    sectionProducts.appendChild(creatProduct);
  });
  addEventToButton();
};
// ------------------------------------------------------ //
// captura os itens já salvos no localStorage e joga ao palco novamente 
const getLoadCart = () => {
 // split transforma string em array e qubra a linha utilizando \n
const getFunction = getSavedCartItems().split('\n');
getFunction.forEach((itemText) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = itemText;
  li.addEventListener('click', cartItemClickListener);
  cartItems.appendChild(li);
});
};

window.onload = () => { 
   // createProductItemElement(); 
   onStageProducts();
   // cartItemClickListener();
   getLoadCart();
   // getSavedCartItems();
};