function printName(name) {
    console.log("Olá " + name + "! Seja bem vindo(a).");
}

// Irá imprimir o nome no console
printName("Arthur"); // Será impresso de acordo com o nome que colocou dentro dos ""

function plusFive(number) {
    const result = number + 5;
    console.log("Pronto! O resultado da soma é: " + result);
}

// Irá chamar a função de soma
plusFive(21); // O resultado será imprimido de acordo com o número dentro do parentêses

// Função que irá calcular o produto de 2 números
function calcProduct() {
    const number1 = 6; // Número fixo
    const number2 = 4; // Número fixo
    const product = number1 * number2; // Cálculo do produto
    console.log("Pronto! O resultado do cálculo é: " + product);
}

// Irá chamar a função de calcúlo que não receba parâmetros
calcProduct(); // Vai imprimir de acordo com o número colocado nas funções number1 e number2

// Função que calcula a idade em dias
function printYearMonthDay(years, months, days) {
    const resultDays = (years * 365) + (months * 30) + days;
    console.log("Pronto! Sua idade expressa em dias são: " + resultDays + " dias.");
}

// Chamada da função
printYearMonthDay(26, 1, 27); // Irá imprimir o total de dias calculado