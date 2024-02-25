/**
 * variáveis
 */

//tipos primitivos: boolean, number, string
    let ligado: boolean = false;
    let nome: string = "Yago";
    let idade: number = 28;
    let altura: number = 1.62;

//tipos especiais: null, undefined
    let nulo: null = null;
    let indefinido: undefined = undefined;

//tipos abrangentes: any, void
    let retorno: void
    let retornoView: any = "Qualquer retorno não previsível"

//objeto imprevisível
    let produto: object = {
        name: "Yago",
        cidade: "ma",
        idade: 28,
    };

//objeto tipado - completamente previsível
    type ProdutoLoja = {
        nome: string;
        preco: number;
        unidades: number;
    };

    let meuProduto: ProdutoLoja = {
        nome: "Tênis",
        preco: 89.99,
        unidades: 5,
    };