

function normalize(coll) {
    class Collection {
        constructor(coll) {
            this.coll = coll;
            console.log(this);
        }
        map(fn) {
            const newColl = this.coll.map((element) => fn(element));

            return new Collection(newColl);
        }
        filter(fn) {
            const newColl = this.coll.filter((element) => fn(element));

            return new Collection(newColl);
        }
        reduce(fn, initialValue) {
            const newColl = this.coll.reduce((acc, element) => fn(acc, element), initialValue);
            return new Collection(newColl);
        }
        all() {
            return this.coll;
        }
    }
    const newColl = new Collection(coll);
    const newColl2 = newColl.reduce((acc, element) => {
        acc.push({ name: element.name.toLowerCase().trim(), country: element.country.toLowerCase().trim() });
        return acc;
    }, []);

    console.log(newColl2);
    const newColl3 = newColl2.reduce((acc, element) => {
      element.country = element.country.trim();
      acc[element.country] = [];
      console.log(element)
      return acc;
    }, {})
    console.log(newColl3)
    const newColl4 = newColl2.reduce((acc, element) => {
        acc.coll[element.country].push(element.name);
        return acc;
    }, newColl3);
    console.log(newColl4)
    // const set = new Set(newColl4.coll.coll.turkey)
    
    const obj = newColl4.coll.coll;
    const entries = Object.entries(obj)
    
   const ent =  entries.reduce((acc, element) => {
      const arr = [];
      const country = element[0];
      arr.push(country);
      let cities = new Set(element[1]);
      const cities2 = Array.from(cities);
      arr.push(cities2);
      acc.push(arr);
      return acc;
    }, []);

    console.log(ent)



   const object = ent.reduce((acc, element) => {
    console.log(element)
    const [c, city] = element;
     acc[c] = city;
     return acc;
   }, {})



   const sortedCountries = Object.entries(object).sort();

   console.log(sortedCountries);
//    for (const country of sortedCountries) {
//     country[1] = country[1].sort();
//   }
   const sortedNames = sortedCountries.reduce((acc, element) => {
    const arr = [];
    arr.push(element[0]);
    arr.push(element[1].sort());
    acc.push(arr);
    return acc;
   }, [])
   console.log(sortedNames);

   const result = sortedNames.reduce((acc, element) => {
     console.log(acc)
     console.log(element)
     acc[element[0]] = element[1];
     return acc;
   }, {})
    console.log(result)
    return result;
}

const coll = [
    { name: 'istanbul', country: 'turkey' },
    { name: 'Moscow ', country: ' Russia' },
    { name: 'iStanbul', country: 'tUrkey' },
    { name: 'antalia', country: 'turkeY ' },
    { name: 'samarA', country: '  ruSsiA' },
    { name: 'Miami', country: 'usa' },
];

//   {
//     russia: [
//       'moscow',
//       'samara',
//     ],
//     turkey: [
//       'antalia',
//       'istanbul',
//     ],
//     usa: [
//       'miami',

//     ],
//   }
console.log(normalize(coll));
