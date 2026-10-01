//problem:1
function totalFine(fare) {
  if (typeof fare !== "number" || fare <= 0) {
    return "invalide";
  }
  let fine = fare + fare * (20 / 100) + 30;
  return fine;
}

//console.log(totalFine(200));

//problem-2
function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "invalid";
  }
  let result = str.replaceAll(" ", "");
  result = result.toUpperCase();
  return result;
}
//console.log(onlyCharacter(7));

//problem:3
function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "invalide";
  }
  let team1 = player1.foul + player1.cardY + player1.cardR;
  let team2 = player2.foul + player2.cardY + player2.cardR;

  if (team1 < team2) {
    return player1.name;
  } else if (team2 < team1) {
    return player2.name;
  } else {
    return "tie";
  }
}

//console.log(
//  bestTeam(
//    { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
//    { name: "Argentina", foul: 7, cardY: 0, cardR: 0 },
//  ),
//);
//problem:4
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return "invalid";
  }
  let this1 = arr1.length;
  let this2 = arr2.length;

  if (this1 !== this2) {
    return false;
  }

  for (let i = 0; i < this1; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
//problem:5
function resultReport(arr) {
  if (!Array.isArray(arr)) {
    return "invalid";
  }

  let finalscoor = 0;
  let pass = 0;
  let fail = 0;
  if (arr.length === 0) {
    return {
      finalscoor: 0,
      pass: 0,
      fail: 0,
    };
  }
  for (let i = 0; i < arr.length; i++) {
    finalscoor = finalscoor + arr[i];
    if (arr[i] >= 40) {
      pass++;
    } else {
      fail++;
    }
  }
  let avarage = Math.round(finalscoor / arr.length);

  return {
    finalScore: avarage,
    pass: pass,
    fail: fail,
  };
}

//console.log(resultReport([99, 87, 67, 12, 87]));
