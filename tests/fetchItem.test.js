require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  
  it('Testa se fetchItem é uma função;',() => {
    expect(typeof fetchItem).toBe('function');
});
  it('Executa a função fetchItem com o argumento "MLB1615760527" e teste se fetch foi chamada', () => {
    // Use .toHaveBeenCalled para garantir que uma função de simulação (mock, em inglês) foi chamada
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint passado', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Teste se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item que já está importado no arquivo.',async () => {
     expect(await fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url', async () => {
    expect( await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
