const _ = require('lodash')

const alunos = [{
    nome: 'Luiz', 
    nota: 8
}, {
    nome: 'Felipe',
    nota: 8
}, {
    nome: 'Paixão',
    nota: 8
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log("Média: ", media);

