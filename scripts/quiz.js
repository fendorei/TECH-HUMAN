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
let question = document.getElementsByClassName('question')
let picture = document.getElementsByClassName('imageText')
let result = 0

function showQuestion() {
  question[0].style.display = "contents"
}

function checkResult(answer, j) {
  for (let i = 0; i < answer.length; i++) {
    if (answer[i].checked) {
      result = result + parseInt(answer[i].value)
      break
    } else if (i == answer.length - 1) {
      return;
    }
  }
  if (answer == answer11) {
    result = Math.round((result / 22) * 50)
    let queryString = "?para1=" + result
    window.location.href = 'results.html' + queryString
  } else {
    question[j].style.display = "none"
    question[j + 1].style.display = "contents"
  }
}

function showResults() {
  let queryString = decodeURIComponent(window.location.search)
  queryString = queryString.substring(1)
  let queries = queryString.split("=");
  let score = queries[1]
  document.getElementById("score").textContent = "Votre score est de " + score + "%"
  document.getElementById("myBar").style.width = score + "%"
  switch (true) {
    case (score < 20):
      document.getElementById("class").textContent = "Fretin"
      document.getElementById("advice1").textContent = "Vous n'êtes pas dépendant aux microtransactions"
      document.getElementById("advice2").textContent = "Si vous connaissez quelqu'un ou si vous voulez en savoir plus sur l'adiction aux microtransactions et ces risque, nous vous invitons consulter nos conseils afin de pouvoir prévenir de la dépendance."
      document.getElementById("myBar").style.backgroundColor = "green"
      document.getElementById('fish').src = "../images/undraw_fish_bowl_uu88.png"
      break;
    case (score >= 20 && score < 40):
      document.getElementById("class").textContent = "Thon"
      document.getElementById("advice1").textContent = "Vous êtes susceptible d'être dépendant aux microtransactions"
      document.getElementById("advice2").textContent = "Afin de pouvoir continuer à rester maitre de votre jeu, nous vous conseillons de consulter nos conseils afin de pouvoir éviter tout risque de dépendances."
      document.getElementById("myBar").style.backgroundColor = "lightgreen"
      document.getElementById('fish').src = "../images/tuna.png"
      break;
    case (score >= 40 && score < 60):
      document.getElementById("class").textContent = "Dauphin"
      document.getElementById("advice1").textContent = "Vous êtes susceptible d'être dépendant aux microtransactions"
      document.getElementById("advice2").textContent = "Afin de pouvoir continuer à rester maitre de votre jeu, nous vous conseillons de consulter nos conseils afin de pouvoir éviter tout risque de dépendances."
      document.getElementById("myBar").style.backgroundColor = "yellow"
      document.getElementById('fish').src = "../images/dauphin bleu.png"
      break;
    case (score >= 60 && score < 80):
      document.getElementById("class").textContent = "Béluga"
      document.getElementById("advice1").textContent = "Vous semblez être dépendant des microtransactions"
      document.getElementById("advice2").textContent = "Pour combattre votre addiction, nous vous suggérons fortement de consultez nos conseils afin de retrouver le contrôle."
      document.getElementById("myBar").style.backgroundColor = "orange"
      document.getElementById('fish').src = "../images/béluga.png"
      break;
    case (score >= 80):
      document.getElementById("class").textContent = "Baleine"
      document.getElementById("advice1").textContent = "Vous semblez être dépendant des microtransactions"
      document.getElementById("advice2").textContent = "Pour combattre votre addiction, nous vous suggérons fortement de consultez nos conseils afin de retrouver le contrôle."
      document.getElementById("myBar").style.backgroundColor = "red"
      document.getElementById('fish').src = "../images/baleine.png"
      break;
    default:
      document.write("Votre résultat n'a pas pu être chargé")
  }
}

function giveAdvice() {
  let queryString = decodeURIComponent(window.location.search)
  queryString = queryString.substring(1)
  let queries = queryString.split("=")
  let score = queries[1]
  queryString = "?para1=" + score
  window.location.href = 'advice.html' + queryString
}

function showAdvice() {
  let queryString = decodeURIComponent(window.location.search)
  queryString = queryString.substring(1)
  let queries = queryString.split("=")
  let score = queries[1]
  switch (true) {
    case (score < 20):
      document.getElementById("advice-head1").textContent = "N'oubliez pas de jouer et de prendre du plaisir, que vous n'êtes pas là pour acheter."
      document.getElementById("advice-body11").textContent = "Pendant votre partie, il peut vous arrivez que vous passez plus de temps à vouloir effectuer des microtransactions que de profiter du jeu."
      document.getElementById("advice-body12").textContent = "Ne perdez pas de vue la raison de votre venu sur ce jeu, que ce soit de vous amusez seul ou avec des amis et non d'achetez des objet, vous n'êtes pas venu pour ça à la base."
      document.getElementById("advice-img1").src = "../images/quiz5.png"
      document.getElementById("advice-head2").textContent = "Ne surestimez pas votre niveau de capacité à résister à la tentation."
      document.getElementById("advice-body21").textContent = "Il est important que vous ne vous reposez pas sur vos acquis."
      document.getElementById("advice-body22").textContent = "Bien que vous êtes résistant face à l'envie d'acheter, il se peut que vous finissiez par céder à l'envie et que vous effectuez une microtransaction, il ne suffit que d'une seul fois en vous disant que c'est exceptionnel, pour qu'ensuite il vous prenne le besoin de recommencer."
      document.getElementById("advice-body23").textContent = "Prenez conscience de vos limite et réfléchissez plusieurs fois avant de passer à l'achat."
      document.getElementById("advice-img2").src = "../images/quiz7.png"
      document.getElementsByClassName("advice3")[0].style.display = "none";
      document.getElementsByTagName("hr")[2].style.display = "none";
      document.getElementsByClassName("advice4")[0].style.display = "none";
      document.getElementsByTagName("hr")[3].style.display = "none";
      break;
    case (score >= 20 && score < 40):
      document.getElementById("advice-head1").textContent = "Définir un budget d'achat afin de ne pas dépenser plus qu'il n'en faut"
      document.getElementById("advice-body11").textContent = "Définir un budget, vous permet de contrôler vos limites afin de ne pas dépenser de somme énorme."
      document.getElementById("advice-body12").textContent = "Cela vous permet ainsi de garder le control de vos dépenses."
      document.getElementById("advice-img1").src = "../images/quiz5.png"
      document.getElementById("advice-head2").textContent = "N'oubliez pas de jouer et de prendre du plaisir, que vous n'êtes pas là pour acheter."
      document.getElementById("advice-body21").textContent = "Pendant votre partie, il peut vous arrivez que vous passez plus de temps à vouloir effectuer des microtransactions que de profiter du jeu."
      document.getElementById("advice-body22").textContent = "Ne perdez pas de vue la raison de votre venu sur ce jeu, que ce soit de vous amusez seul ou avec des amis et non d'achetez des objet, vous n'êtes pas venu pour ça à la base."
      document.getElementById("advice-img2").src = "../images/quiz7.png"
      document.getElementById("advice-head3").textContent = "Prenez du recul sur le jeu et ces achats"
      document.getElementById("advice-body31").textContent = "Il est nécessaires de prendre du recul afin de vous reposez et ainsi que vous puissiez éviter d'être constamment préoccupé par le jeu et ces achats."
      document.getElementById("advice-body32").textContent = "Il est conseillé de prendre du recul le plus longtemps possible afin de vous changer les idées."
      document.getElementById("advice-img3").src = "../images/quiz11.png"
      document.getElementsByClassName("advice4")[0].style.display = "none";
      document.getElementsByTagName("hr")[3].style.display = "none";
      break;
    case (score >= 40 && score < 60):
      document.getElementById("advice-head1").textContent = "Définir un budget d'achat afin de ne pas dépenser plus qu'il n'en faut"
      document.getElementById("advice-body11").textContent = "Définir un budget, vous permet de contrôler vos limites afin de ne pas dépenser de somme énorme."
      document.getElementById("advice-body12").textContent = "Cela vous permet ainsi de garder le control de vos dépenses."
      document.getElementById("advice-img1").src = "../images/quiz5.png"
      document.getElementById("advice-head2").textContent = "N'oubliez pas de jouer et de prendre du plaisir, que vous n'êtes pas là pour acheter."
      document.getElementById("advice-body21").textContent = "Pendant votre partie, il peut vous arrivez que vous passez plus de temps à vouloir effectuer des microtransactions que de profiter du jeu."
      document.getElementById("advice-body22").textContent = "Ne perdez pas de vue la raison de votre venu sur ce jeu, que ce soit de vous amusez seul ou avec des amis et non d'achetez des objet, vous n'êtes pas venu pour ça à la base."
      document.getElementById("advice-img2").src = "../images/quiz7.png"
      document.getElementById("advice-head3").textContent = "Faites des pauses quand vous jouez."
      document.getElementById("advice-body31").textContent = "Il est nécessaires de faire des pauses afin de vous reposez et ainsi que vous puissiez éviter d'être constamment préoccupé par le jeu et ces achats."
      document.getElementById("advice-body32").textContent = "Il est conseillé de faire des pauses durant une session de jeu afin d'éviter d'être tenté ou durant plusieurs sessions de jeu afin de vous aérée la tête pour prendre du recul"
      document.getElementById("advice-img3").src = "../images/quiz11.png"
      document.getElementById("advice-head4").textContent = "Prenez conscience que ne vous n'ête obliger d'acheter un objet"
      document.getElementById("advice-body41").textContent = "Quand vous jouez en multi ou solo, vous pouvez vous sentir obliger d'acheter telle ou telle item comme les autres joueurs ou amis."
      document.getElementById("advice-body42").textContent = "Prenez conscience que rien ne vous y oblige, vos amis ne vous en voudront pas si vous n'avez pas le même skin qu'eux;"
      document.getElementById("advice-body43").textContent = "En ce qui concerne les items limité dans le temps spécial période, dites vous qu'après il deviendra démodé quand la période sera passé"
      document.getElementById("advice-img4").src = "../images/quiz15.png"
      break;
    case (score >= 60 && score < 80):
      document.getElementById("advice-head1").textContent = "Faites des pauses quand vous jouez."
      document.getElementById("advice-body11").textContent = "Il est nécessaires de faire des pauses afin de vous reposez et ainsi que vous puissiez éviter d'être constamment préoccupé par le jeu et ces achats."
      document.getElementById("advice-body12").textContent = "Il est conseillé de faire des pauses durant une session de jeu afin d'éviter d'être tenté ou durant plusieurs sessions de jeu afin de vous aérée la tête pour prendre du recul"
      document.getElementById("advice-img1").src = "../images/quiz5.png"
      document.getElementById("advice-head2").textContent = "Chercher le label pegi sur les achats intégrer afin de pouvoir éviter de prendre un jeu pouvant vous tenter d'acheter des bonus"
      document.getElementById("advice-body21").textContent = "En 2018, Pegi a mis en place un nouveau label, un label prévenant des achats intégré dans un jeu"
      document.getElementById("advice-body22").textContent = "Ce label vous prévient si ce jeu contient des microtransactions afin que vous puissiez être au courant avant de l'acheter et ainsi vous faire réfléchir à 2 fois avant de le prendre"
      document.getElementById("advice-body23").textContent = "Mais attention, ce label n'est pas présent sur tout les jeux contenant des microtransactions"
      document.getElementById("advice-img2").src = "../images/Conseil-page-xd-1.jpg"
      document.getElementById("advice-head3").textContent = "Abstenez-vous le plus possible de toute achat que ce soit un skin ou une lootbox"
      document.getElementById("advice-body31").textContent = "Essayer le plus possible d'éviter d'acheter un item ou une lootbox, afin de ne pas tomber dans le besoin d'obtenir toujours plus d'items et de skin."
      document.getElementById("advice-body32").textContent = "Pour ce faire, essayer d'effectuer une seul microtransaction par mois maximum"
      document.getElementById("advice-img3").src = "../images/quiz11.png"
      document.getElementById("advice-head4").textContent = "Retirer vos donnée bancaire du jeu afin que vous devez les rentrer à chaque achat"
      document.getElementById("advice-body41").textContent = "Si vous retirer tout raccourci qui pourrais faciliter la transaction, vous serez obliger de les rentrer par vous même de façon manuelle"
      document.getElementById("advice-body42").textContent = "Cette procédure longue et fastidieuse vous découragera d'effectuer cette achat et ainsi vous arriverez à mieux limiter vos dépenses"
      document.getElementById("advice-img4").src = "../images/quiz15.png"
      break;
    case (score >= 80):
      document.getElementById("advice-head1").textContent = "Faites des pauses quand vous jouez."
      document.getElementById("advice-body11").textContent = "Il est nécessaires de faire des pauses afin de vous reposez et ainsi que vous puissiez éviter d'être constamment préoccupé par le jeu et ces achats."
      document.getElementById("advice-body12").textContent = "Il est conseillé de faire des pauses durant une session de jeu afin d'éviter d'être tenté ou durant plusieurs sessions de jeu afin de vous aérée la tête pour prendre du recul"
      document.getElementById("advice-img1").src = "../images/quiz5.png"
      document.getElementById("advice-head2").textContent = "Chercher le label pegi sur les achats intégrer afin de pouvoir éviter de prendre un jeu pouvant vous tenter d'acheter des bonus"
      document.getElementById("advice-body21").textContent = "En 2018, Pegi a mis en place un nouveau label, un label prévenant des achats intégré dans un jeu"
      document.getElementById("advice-body22").textContent = "Ce label vous prévient si ce jeu contient des microtransactions afin que vous puissiez être au courant avant de l'acheter et ainsi vous faire réfléchir à 2 fois avant de le prendre"
      document.getElementById("advice-body23").textContent = "Mais attention, ce label n'est pas présent sur tout les jeux contenant des microtransactions"
      document.getElementById("advice-img2").src = "../images/Conseil-page-xd-1.jpg"
      document.getElementById("advice-head3").textContent = "Abstenez-vous le plus possible de toute achat que ce soit un skin ou une lootbox afin d'éviter tout problèmes financiers "
      document.getElementById("advice-body31").textContent = "Essayer le plus possible d'éviter d'acheter un item ou une lootbox, afin de ne pas tomber dans le besoin d'obtenir toujours plus d'items et de skin."
      document.getElementById("advice-body32").textContent = "Pour ce faire, essayer d'effectuer une seul microtransaction par mois maximum"
      document.getElementById("advice-body33").textContent = "Et surtout, évitez d'emprunter de l'argent à un proche car vous pourrez le mêler lui aussi dans les conséquences financiers"
      document.getElementById("advice-img3").src = "../images/quiz11.png"
      document.getElementById("advice-head4").textContent = "Parler-en avec un médecin afin de pouvoir suivre une thérapie adapté."
      document.getElementById("advice-body41").textContent = "Sachez que vous n'êtes pas tout seul, que des cas similaires aux vôtres existes et qu'elles peuvent être soignés."
      document.getElementById("advice-body42").textContent = "Parler-en avec votre médecin afin de pouvoir suivre une thérapie adapté ou dans un cercle de parole"
      document.getElementById("advice-body43").textContent = "Avec l'aide et le soutien qui vous sera apporté, vous vous sortirez plus fort dans cette épreuve"
      document.getElementById("advice-img4").src = "../images/quiz15.png"
      break;
    default:
      document.write("Vos conseils n'ont pas pu être chargé")
  }
}
