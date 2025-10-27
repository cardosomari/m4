//1
const nomes = ["Mari", "Vitor", "Caique", "Enzo", "Thawane"];
//o for pega cada nome da lista e imprime no console um por vez
for(const nome of nomes) {
    console.log(nome);
}

//2
const numeros = [5, 10, 15, 20, 25];
let total = 0;
for (const numero of numeros) {
    total += numero; //soma cada número ao total
}
console.log("Soma total:", total); //mostra o resultado no console

//3
const pessoa = {
    nome: "Mariana",
    idade: 17,
    cidade: "Sorocaba"
};
for (const chave in pessoa){
    console.log(`${chave}: ${pessoa[chave]}`); //acessa o valor correspondente daquela chave
}

//4
const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    cor: "Preto"
};
let contador = 0;
for(const chave in carro) {
    contador++; //soma 1 para cada proriedade encontrada
}
console.log("O objeto possui", contador, "propriedades"); //mostra quantas propriedades o objeto tem

//5
const nome = ["Mari", "Vitor", "Caique", "Enzo", "Thawane"];
let resultado = "";
for (const nome of nomes) {
    resultado += nome + ","; //adiciona o nome seguido de vírgula
}
resultado = resultado.slice(0, -2); //remove a última vírgula e espaço
console.log("Nomes concatenados:", resultado);

//6
const dados = [17, "Mariana", true, {idade: 17 },[1,2,3], null];
for (const elemento of dados) {
    console.log(elemento, "-> tipo:", typeof elemento); //mostra o tipo de elemento
}

//7
const produtos = {
    arroz: 10,
    feijão: 8,
    sushi: 6,
    temaki: 5
};
for (const item in produtos) {
    produtos[item] *= 1.1 //aumenta o valor em 10%
}
console.log("Novos preços:", produtos);

//8
const obj = {
    nome: "Mariana",
    idade: 17,
    cidade: "Sorocaba"
};
const result = [];
for(const chave in pessoa) {
    resultado.push(`${chave}: ${pessoa[chave]}`); 
}
console.log(resultado);

//9
const numero = [1, 2, 3, 2, 4, 1 ,5, 3, 6];
const valoresUnicos = new Set(); //não permite valores repetidos
for(const numero of numeros) { //adiciona cada número ao Set
    valoresUnicos.add(numero);
}
console.log("Valores únicos:", valoresUnicos);
console.log("Quantidade de valores únicos:", valoresUnicos);

//10
const frase = "Sushi é bom";
const contagem = {};
for (const caractere of frase.toLowersCase()) {
    if (caractere === " ") continue; 
    if(contagem[caractere]){
        contagem[caractere]++; //se já existe soma mais 1
    }else{
        contagem[caractere] = 1; //se é a primeira vez, começa com 1
    }
}
console.log("Contagem de caracteres:", contagem);