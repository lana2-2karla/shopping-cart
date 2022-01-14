require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Testa se fetchProducts é uma função;',() => {
    expect(typeof fetchProducts).toBe('function');
});
  it('Executa a função fetchProducts com o argumento "computador" e teste se fetch foi chamada' , async () => {
    expect(await fetchProducts('computador')).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint passado', async () => {
    expect(await fetchProducts('computador'))
  })
}