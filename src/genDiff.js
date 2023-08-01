
// added — ключ отсутствовал в первом объекте, но был добавлен во второй
// deleted — ключ был в первом объекте, но отсутствует во втором
// changed — ключ присутствовал и в первом и во втором объектах, но значения отличаются
// unchanged — ключ присутствовал и в первом и во втором объектах с одинаковыми значениями


function genDiff(firstObj, secondObj) {
    let resultObj = {};
    console.log(firstObj)
    console.log(secondObj)
    const keys1 = Object.keys(firstObj);
    const keys2 = Object.keys(secondObj);
    console.log(keys1)
    console.log(keys2)
    for (const element of keys1) {
        if (!keys2.includes(element)) {
            resultObj[element] = 'deleted';
        }
        if (keys2.includes(element)) {
            if (firstObj[element] === secondObj[element]) {
                resultObj[element] = 'unchanged';
            }
            if (firstObj[element] !== secondObj[element]) {
                resultObj[element] = 'changed';
            }
        }
    }
    for (const element2 of keys2) {
        if (!keys1.includes(element2)) {
            resultObj[element2] = 'added';
        }
    }
    return resultObj;
}

console.log(genDiff(
    { one: 'eon', two: 'two', four: true },
    { two: 'own', zero: 4, four: true },
));

  // {
//   one: 'deleted',
//   two: 'changed',
//   four: 'unchanged',
//   zero: 'added',
// }