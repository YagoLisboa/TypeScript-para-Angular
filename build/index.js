"use strict";
/**
 * variáveis
 */
//tipos primitivos: boolean, number, string
let ligado = false;
let nome = "Yago";
let idade = 28;
let altura = 1.62;
//tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
let retorno;
let retornoView = "Qualquer retorno não previsível";
//objeto imprevisível
let produto = {
    name: "Yago",
    cidade: "ma",
    idade: 28,
};
let meuProduto = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5,
};
/**
 * Arrays
 */
let dados = ["Yago", "Lisboa"];
let dados2 = ["Yago", "Lisboa"];
//Arrays Multi Types
let tipos = ["Yago", 28];
/**
 * Tuplas
 */
let boleto = ["água conta", 199.90, 32342342];
/**
 * Métodos com array
 */
dados.pop();
/**
 * Datas
 */
let aniversario = new Date("2024-08-10 06:00");
console.log(aniversario.toString());
