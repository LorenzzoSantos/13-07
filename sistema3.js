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
return undefined
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

let media = calcularMedia(alunos[2].notas)

function situacao(media) {
    if (media >= 6) {
      return "APROVADO";
    } else if (media >= 4) {
      return "RECUPERACAO";
    } else {
      return "REPROVADO";
    }
  }

  console.log(situacao(media))