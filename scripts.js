const student = [
  {
    name:"Julia",
    note1: 8,
    note2: 6
  },
  {
    name:"John",
    note1: 10,
    note2: 8
  },
  {
    name:"Sophia",
    note1: 2,
    note2: 6
  },
]

function calExamResult(array) {

  for (let value of array) {
    const average = (value.note1 + value.note2) / 2;

    const resultMessage = average >= 7 
    ? `Parabéns, ${value.name}! Você foi aprovado(a) no concurso!`
    : `Não foi dessa vez, ${value.name}! Tente novamente!`
    alert(`A média do(a) aluno(a) ${value.name} é ${average} \n ${resultMessage}`);
  }
}

calExamResult(student);
