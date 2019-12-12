let answer1 = document.getElementsByName('answer1')
let answer2 = document.getElementsByName('answer2')
let answer3 = document.getElementsByName('answer3')
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
  console.log(result)
}
