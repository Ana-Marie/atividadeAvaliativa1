 const filtrar = require('../src/filtrarFatura')
/*O participante deverá implementar um filtro de faturas. Uma fatura contém um código,
um valor, uma data, e pertence a um cliente. Um cliente tem um nome, data de inclusão e
um estado. O filtro deverá então, dado uma lista de faturas, remover as que se encaixam
em algum dos critérios abaixo:
/    Se o valor da fatura for menor que 2000;
   • Se o valor da fatura estiver entre 2000 e 2500 e a data for menor ou igual a de um
mês atrás;
    • Se o valor da fatura estiver entre 2500 e 3000 e a data de inclusão do cliente for
menor ou igual a 2 meses atrás;
   • Se o valor da fatura for maior que 4000 e pertencer a algum estado da região Sul do
Brasil.”*/
const arrFaturas = [
    { codigo: 1, valor: 2000.20, data: "15/10/2021", cliente: { nome: "Maria", dataDeinclusao: "01/10/2007", estado: "Santa Catarina" } },
    { codigo: 2, valor: 1500.00, data: "11/08/2021", cliente: { nome: "Jonas", dataDeinclusao: "05/02/2018", estado: "Amazonas" } },
    { codigo: 3, valor: 2300.50, data: "15/10/2021", cliente: { nome: "Simone", dataDeinclusao: "03/10/2008", estado: "Rio Grande do Sul" } },
    { codigo: 4, valor: 5000.00, data: "15/10/2021", cliente: { nome: "Marcelo", dataDeinclusao: "03/10/2008", estado: "Paraná" } },
    { codigo: 5, valor: 2800.00, data: "15/10/2021", cliente: { nome: "Maria", dataDeinclusao: "01/08/2021", estado: "Bahia" } },
    { codigo: 6, valor: 6800.00, data: "15/10/2021", cliente: { nome: "Lucas", dataDeinclusao: "01/08/2021", estado: "Mato Grosso" } }
];
describe('filtrarFatura', () => {
    //Deve remover da lista se  o valor da fatura for menor que 2000;
    test('Deve remover da lista se  o valor da fatura for menor que 2000', () => {
        expect(filtrar(arrFaturas)).toEqual([
            { codigo: 1, valor: 2000.20, data: "15/10/2021", cliente: { nome: "Maria", dataDeinclusao: "01/10/2007", estado: "Santa Catarina" } },
            { codigo: 3, valor: 2300.50, data: "15/10/2021", cliente: { nome: "Simone", dataDeinclusao: "03/10/2008", estado: "Rio Grande do Sul" } },
            { codigo: 4, valor: 5000.00, data: "15/10/2021", cliente: { nome: "Marcelo", dataDeinclusao: "03/10/2008", estado: "Paraná" } },
            { codigo: 5, valor: 2800.00, data: "15/10/2021", cliente: { nome: "Maria", dataDeinclusao: "01/08/2021", estado: "Bahia" } },
            { codigo: 6, valor: 6800.00, data: "15/10/2021", cliente: { nome: "Lucas", dataDeinclusao: "01/08/2021", estado: "Mato Grosso" } }

        ]);

    });

});