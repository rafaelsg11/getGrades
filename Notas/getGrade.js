function getGrade(grade) {
  let gradeA = grade >= 90 && grade <= 100
  let gradeB = grade >= 80 && grade < 90
  let gradeC = grade >= 70 && grade < 80
  let gradeD = grade >= 60 && grade < 70
  let gradeF = grade < 60 && grade >= 0
  let gradeFinal


  if(gradeA){
    gradeFinal = 'A'
  } else if (gradeB){
    gradeFinal = 'B'
  } else if (gradeC){
    gradeFinal = 'C'
  } else if (gradeD){
    gradeFinal = 'D'
  } else if (gradeF){
    gradeFinal = 'F'
  } else {
    gradeFinal = "Nota inválida"
  }

  return gradeFinal
}

console.log(getGrade(101))
console.log(getGrade(-1))
console.log(getGrade(0))
console.log(getGrade(1))
console.log(getGrade(45))
console.log(getGrade(60))
console.log(getGrade(61))
console.log(getGrade(75))
console.log(getGrade(85))
console.log(getGrade(90))
console.log(getGrade(100))