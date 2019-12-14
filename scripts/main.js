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
  result = (result / 22) * 50
  let queryString = "?para1=" + result
  window.location.href = 'pages/results.html' + queryString
}

function showResults() {
  let queryString = decodeURIComponent(window.location.search)
  queryString = queryString.substring(1)
  let queries = queryString.split("=");
  let score = queries[1]
  document.getElementById("score").textContent = "Votre score est de " + score + "%"
  switch (true) {
    case (score < 20):
      document.getElementById("class").textContent = "Fretin"
      document.getElementById("advice").textContent = "Vous n'êtes pas dépendant aux micro-transaction%0DSi vous connaissez quelqu'un ou si vous voulez en savoir plus sur l'adiction aux micro-transactions et ces risque, nous vous invitons consulter nos conseils afin de pouvoir prévenir de la dépendance."
      break;
    case (score >= 20 && score < 40):
      document.getElementById("class").textContent = "Thon"
      document.getElementById("advice").textContent = "Vous êtes susceptible d'être dépendant aux micro-transaction%0DAfin de pouvoir continuer à rester maitre de votre jeu, nous vous conseillons de consulter nos conseils afin de pouvoir éviter tout risque de dépendances."
      break;
    case (score >= 40 && score < 60):
      document.getElementById("class").textContent = "Dauphin"
      document.getElementById("advice").textContent = "Vous êtes susceptible d'être dépendant aux micro-transaction%0DAfin de pouvoir continuer à rester maitre de votre jeu, nous vous conseillons de consulter nos conseils afin de pouvoir éviter tout risque de dépendances."
      break;
    case (score >= 60 && score < 80):
      document.getElementById("class").textContent = "Béluga"
      document.getElementById("advice").textContent = "Vous semblez être dépendant des micro-transaction%0DPour combattre votre addiction, nous vous suggérons fortement de consultez nos conseils afin de retrouver le contrôle."
      break;
    case (score >= 80):
      document.getElementById("class").textContent = "Baleine"
      document.getElementById("advice").textContent = "Vous semblez être dépendant des micro-transaction%0DPour combattre votre addiction, nous vous suggérons fortement de consultez nos conseils afin de retrouver le contrôle."
      break;
    default:
      document.write("Votre résultat n'a pas pu être chargé")
  }
}
