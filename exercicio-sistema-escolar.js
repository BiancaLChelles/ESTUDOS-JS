// SESSÃO DE ENTRADA DE DADOS (A escola só mexe aqui)

let aluno = "Bianca Lourenço";
let nota = 8;
let presenca = 80; 





// --- LÓGICA DO SISTEMA (O usuario não deve mexer apartir dessa linha) ---

let resultado;


function analisarDesempenho(aluno, nota, presenca) {

    if (nota >= 7 && presenca >= 75) {
        resultado = "Aprovado";
    } else if (nota >= 7 && presenca < 75) {
        resultado = "Reprovado por faltas";
    } else if (nota < 7) {
        resultado = "Recuperação de conteúdo";
    } else {
        resultado = "Em situação indefinida";
    }

    // Retorna o texto final usando as variáveis processadas
    return "O (a) Aluno(a) " + aluno + ", está " + resultado + ".";
}

// Execução e exibição
console.log(analisarDesempenho(aluno, nota, presenca));
