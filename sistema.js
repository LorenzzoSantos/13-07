let alunos = [
    {nome: "Lorenzzo", notas: [10, 10, 10]},
    {nome: "Erly", notas: [6, 7, 0]},
    {nome: "Rodrigo", notas: [0, 0, 0]}
]

function buscarAluno(nome) {
for (i = 0; i < alunos.length; i++) {
    if (alunos[i].nome.toLowerCase() === nome.toLowerCase()) {
        return alunos[i];
}
}
return undefined
}
console.log(buscarAluno("Lorenzzo"))