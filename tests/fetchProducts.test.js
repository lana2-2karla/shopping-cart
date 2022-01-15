require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  it('Testa se fetchProducts é uma função;',() => {
    expect(typeof fetchProducts).toBe('function');
});
  it('Executa a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', () => {
    // Use .toHaveBeenCalled para garantir que uma função de simulação (mock, em inglês) foi chamada
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint passado', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo',async () => {
    // computadorSearch é o objetão(data) declarado no mock/search.js
    // Uso toEqual pois comparo dois objetos
    await expect(fetchProducts('computador')).toEqual('computadorSearch');
  });
  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    await expect(fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});