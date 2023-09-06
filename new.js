const getCountOfSheriff = (s) => {
    let litS = 0;
    let litH = 0;
    let litE = 0;
    let litR = 0;
    let litI = 0;
    let litF = 0;

    const stringToArray = s.split("");

    for (let symb of stringToArray) {
        if (symb === "s") {
            litS += 1;
          }
          if (symb === "h"){
            litH += 1;
          }
          if (symb === "e"){
            litE += 1;
          }
          if (symb === "r"){
            litR += 1;
          }
          if (symb === "i"){
            litI += 1;
          }
          if (symb === "f"){
            litF += 1;
          }
    }

    if (
    litS < 1 ||
    litH < 1 ||
    litE < 1 ||
    litR < 1 ||
    litI < 1 ||
    litF < 2
    ) return 0;
    
    let min = Math.min(litS, litH, litE, litR, litI);

    if (litF === 2 && min === 1) {
        return min;
    }
    if (min % 2 !== 0) {
      min = min - 1;
    }
    if (litF % 2 !== 0) {
      litF = litF - 1;
    }
    return litF / min;
  };

console.log(getCountOfSheriff('fheriherffazfszkisrrs'))
console.log(getCountOfSheriff('rifftratatashe'))
console.log(getCountOfSheriff('thegorillaiswatching'))