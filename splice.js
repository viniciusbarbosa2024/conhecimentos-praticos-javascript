const teste1 = ['a','b','c','d']
const teste2 = ['a','b','c','d']

console.log(`Vetor orignal: ${teste1}`)

teste1.splice(2,1)

console.log(`Vetor após remoção do elemento teste1[2]: ${teste1}`)

//Se o segundo parâmetro de splice não é informado ocorre a remoção de todos os elementos a partir da posição informada no primeiro parâmetro

console.log(`Vetor orignal: ${teste2}`)

teste2.splice(2)

console.log(`Vetor após remoção do elemento teste2[2]: ${teste2}`)
