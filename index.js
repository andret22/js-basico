

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function n_messages(n, message) {
    if (n === 0) {
        return '';
    }
    return message + '\n' + n_messages(n - 1, message);
}

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

function tabuada(numero) {
    let resultados = [];
    for (let i = 0; i <= 10; i++) {
        resultados.push(numero * i);
    }
    return resultados;
}

function inverterNumero(numero) {
    let numeroStr = numero.toString(); 
    let numeroInvertidoStr = numeroStr.split('').reverse().join('');
    let numeroInvertido = parseInt(numeroInvertidoStr, 10);
    return numeroInvertido;
}

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

function calcularMediaIdades(pessoas) {
    let somaIdades = 0;
    for (let pessoa of pessoas) {
        somaIdades += pessoa.idade;
    }
    const mediaIdades = somaIdades / pessoas.length;
    return mediaIdades;
}

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