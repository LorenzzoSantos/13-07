const prompt = require('prompt-sync')();
let alunos = [
    {nome: "Lorenzzo", notas: [10, 10, 10]},
    {nome: "Erly", notas: [6, 7, 0]},
    {nome: "Rodrigo", notas: [0, 0, 0]}
]

function buscarAluno(nome) {
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
        return alunos[i];
    }
}
}
console.log(buscarAluno("Lorenzzo"))

function calcularMedia(notas) {
    if (notas.length === 0) {
        return 0;
    }

    let soma = 0

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length
}

console.log("A média das notas deste aluno é: ", calcularMedia(alunos[0].notas))

let media = calcularMedia(alunos[0].notas)

function situacao(media) {
    if (media >= 6) {
      return "APROVADO";
    } else if (media >= 4) {
      return "RECUPERACAO";
    } else {
      return "REPROVADO";
    }
  }

  console.log("A situação do aluno", alunos[0].nome, "é", situacao(media))

function cadastrarAlunos(nome, notas) {
    nome = prompt("Digite o nome do novo aluno que deseja cadastrar: ")
    notas = Number(prompt("Digite as notas do novo aluno que deseja cadastrar: "))
    if(buscarAluno(nome, notas)) {
        console.log("O aluno já foi registrado!")
        return
    } else {
        alunos.push({ nome: nome, notas: notas })
        console.log("Aluno cadastrado com sucesso!")
    }
}

cadastrarAlunos()

function listarAlunos(alunos) {
    for (i = 0; i < alunos.length; i++) {
        console.log(alunos[i].nome)
    }
}
listarAlunos(alunos)

function removerAluno(alunos) {
    let nomeR = prompt("Diga o nome do aluno que deseja remover da lista: ")
    let aluno = buscarAluno(nomeR)

    if (aluno === undefined) {
        console.log("Aluno não encontrado!")
        return;
    }
    let index = alunos.indexOf(aluno)
    alunos.splice(index, 1)
}
removerAluno(alunos)

console.log(alunos)