let answer1 = document.getElementsByName('answer1')
let answer2 = document.getElementsByName('answer2')
let answer3 = document.getElementsByName('answer3')
let answer4 = document.getElementsByName('answer4')
let answer5 = document.getElementsByName('answer5')
let answer6 = document.getElementsByName('answer6')
let answer7 = document.getElementsByName('answer7')
let answer8 = document.getElementsByName('answer8')
let answer9 = document.getElementsByName('answer9')
let answer10 = document.getElementsByName('answer10')
let answer11 = document.getElementsByName('answer11')
let answer12 = document.getElementsByName('answer12')
let answer13 = document.getElementsByName('answer13')
let answer14 = document.getElementsByName('answer14')
let answer15 = document.getElementsByName('answer15')
let result = 0

function checkResult() {
  for (let i = 0; i < answer1.length; i++) {
    if (answer1[i].checked) {
      result = result + parseInt(answer1[i].value)
      break
    }
  }
  for (let i = 0; i < answer2.length; i++) {
    if (answer2[i].checked) {
      result = result + parseInt(answer2[i].value)
      break
    }
  }
  for (let i = 0; i < answer3.length; i++) {
    if (answer3[i].checked) {
      result = result + parseInt(answer3[i].value)
      break
    }
  }
  for (let i = 0; i < answer4.length; i++) {
    if (answer4[i].checked) {
      result = result + parseInt(answer4[i].value)
      break
    }
  }
  for (let i = 0; i < answer5.length; i++) {
    if (answer5[i].checked) {
      result = result + parseInt(answer5[i].value)
      break
    }
  }
  for (let i = 0; i < answer6.length; i++) {
    if (answer6[i].checked) {
      result = result + parseInt(answer6[i].value)
      break
    }
  }
  for (let i = 0; i < answer7.length; i++) {
    if (answer7[i].checked) {
      result = result + parseInt(answer7[i].value)
      break
    }
  }
  for (let i = 0; i < answer8.length; i++) {
    if (answer8[i].checked) {
      result = result + parseInt(answer8[i].value)
      break
    }
  }
  for (let i = 0; i < answer9.length; i++) {
    if (answer9[i].checked) {
      result = result + parseInt(answer9[i].value)
      break
    }
  }
  for (let i = 0; i < answer10.length; i++) {
    if (answer10[i].checked) {
      result = result + parseInt(answer10[i].value)
      break
    }
  }
  for (let i = 0; i < answer11.length; i++) {
    if (answer11[i].checked) {
      result = result + parseInt(answer11[i].value)
      break
    }
  }
  for (let i = 0; i < answer12.length; i++) {
    if (answer12[i].checked) {
      result = result + parseInt(answer12[i].value)
      break
    }
  }
  for (let i = 0; i < answer13.length; i++) {
    if (answer13[i].checked) {
      result = result + parseInt(answer13[i].value)
      break
    }
  }
  for (let i = 0; i < answer14.length; i++) {
    if (answer14[i].checked) {
      result = result + parseInt(answer14[i].value)
      break
    }
  }
  for (let i = 0; i < answer15.length; i++) {
    if (answer15[i].checked) {
      result = result + parseInt(answer15[i].value)
      break
    }
  }
  console.log((result / 6) * 10)
}
