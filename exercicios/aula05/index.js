// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade < 12){
    return 'criança';
  } else if (idade <=17){
    return 'adolescente';
  } else{
    return 'adulto';
  }
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  return preco*(1-(percentual/100));
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if (nota <40){
    return 'reprovado';
  } else if (nota <60){
    return 'recuperação';
  } else{
    return 'aprovado';
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma=0;
  for (const numero of numeros){
    if (numero%2===0){
      soma+=numero;
    }
  }
  return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contagem = 0;
  for(const caracter of texto){
    if(caracter===letra){
      contagem++;
    }
  }
  return contagem;
}
