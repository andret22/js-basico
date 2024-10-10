
/* Escreva uma função que calcule e retorne o fatorial de um número */
function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

/* Escreva uma função que retorne uma String contendo uma sequência de
N mensagens do texto informado pelo usuário. O valor de N e a mensagem são
informados por parâmetro. */
function n_messages(n, message) {
    if (n === 0) {
        return '';
    }
    return message + '\n' + n_messages(n - 1, message);
}

/* Escreva uma função que receba 2 valores e uma operação básica: adição, subtração,
multiplicação e divisão e retorne o resultado da operação.
Observação: Faça a validação para prevenir a divisão por 0 e também para garantir que
a operação informada é válida. Retorne nulo para os casos de erro */
function calcular(valor1, valor2, operacao) {
    switch (operacao) {
      case 'adição':
        return valor1 + valor2;
      case 'subtração':
        return valor1 - valor2;
      case 'multiplicação':
        return valor1 * valor2;
      case 'divisão':
        if (valor2 === 0) {
          return null;
        }
        return valor1 / valor2;
      default:
        return null;
    }
}

/* Escreva uma função que retorne um vetor contendo o resultado da tabuada de um
número recebido por parâmetro. Cada resultado na respectiva posição do índice. */
function tabuada(numero) {
    let resultados = [];
    for (let i = 0; i <= 10; i++) {
        resultados.push(numero * i);
    }
    return resultados;
}

/* Escreva uma função que retorne um número fornecido pelo usuário, porém
invertido. Por exemplo, o usuário fornece o número 875 e a função retorna o número
578. O argumento da função e o retorno deve ser um valor inteiro. */
function inverterNumero(numero) {
    let numeroStr = numero.toString(); 
    let numeroInvertidoStr = numeroStr.split('').reverse().join('');
    let numeroInvertido = parseInt(numeroInvertidoStr, 10);
    return numeroInvertido;
}

/* Escreva uma função que permita contar o número de vogais contidas em uma string
fornecida por parâmetro. Por exemplo, o usuário informa a string “Brocolis”, e a função
retorna o número 3 (há 3 vogais nessa palavra). */
function contarVogais(str) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;
    for (let char of str) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
    return contador;
}

/* Escreva uma função que receba uma sequência de parênteses e colchetes e retorne se
a sequência está bem formada ou não. O retorno deve ser um valor lógico. Exemplo:
“(([]))” retorna true, “(([)])” retorna falso. */
function sequenciaBemFormada(sequencia) {
    const pilha = [];
    const pares = {
        ')': '(',
        ']': '['
    };
    for (let char of sequencia) {
        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.length === 0 || pilha[pilha.length - 1] !== pares[char]) {
                return false;
            }
            pilha.pop();
        }
    }
    return pilha.length === 0;
}

/* Escreva uma função que receba um número e retorne uma lista de objetos (id, nome e
idade) aleatórios gerados dinamicamente. O código deve ser sequencial; use uma lista
de nomes pré-definida; e gere idades entre 18 e 90 anos */
function gerarPessoas(quantidade) {
    const nomes = ["Ana", "Bruno", "Carlos", "Daniela", "Eduardo", "Fernanda", "Gabriel", "Helena", "Igor", "Juliana"];
    const pessoas = [];
    for (let i = 1; i <= quantidade; i++) {
        const id = i;
        const nome = nomes[Math.floor(Math.random() * nomes.length)];
        const idade = Math.floor(Math.random() * (90 - 18 + 1)) + 18;
        pessoas.push({ id, nome, idade });
    }

    return pessoas;
}

/* Escreva uma função que receba a lista de objetos gerados anteriormente e calcule a
média de idades das pessoas presentes na lista. */
function calcularMediaIdades(pessoas) {
    let somaIdades = 0;
    for (let pessoa of pessoas) {
        somaIdades += pessoa.idade;
    }
    const mediaIdades = somaIdades / pessoas.length;
    return mediaIdades;
}

/* Escreva uma função que receba a lista de objetos gerados anteriormente e ordene os
dados por um dos atributos informados por parâmetros. */
function ordenarPessoas(pessoas, atributo) {
    return pessoas.sort((a, b) => {
        if (a[atributo] < b[atributo]) {
            return -1;
        }
        if (a[atributo] > b[atributo]) {
            return 1;
        }
        return 0;
    });
}