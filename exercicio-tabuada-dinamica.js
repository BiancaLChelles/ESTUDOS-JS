// Arrays onde vão os dados
//Aqui escolhemos quais tabuadas e até onde elas calcularão

const multiplicador = [3, 7];
const multiplicando = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultado;

// Loop Externo: Percorre cada número que queremos multiplicar ( nesse caso o 3 e depois 7)
for (let indexMultiplicador = 0; indexMultiplicador < multiplicador.length; indexMultiplicador++) {
    
    // Loop Interno: Para cada multiplicador, neste caso ele percorre a lista de 1 a 9
    for (let indexMultiplicando = 0; indexMultiplicando < multiplicando.length; indexMultiplicando++) {
        
        // Realiza o cálculo técnico acessando o valor exato dentro do índice do Array
        resultado = multiplicador[indexMultiplicador] * multiplicando[indexMultiplicando];

        // Exibe a operação em forma de mensagem no console
        console.log(multiplicador[indexMultiplicador] + ' x ' + multiplicando[indexMultiplicando] + ' = ' + resultado);
    }
}
