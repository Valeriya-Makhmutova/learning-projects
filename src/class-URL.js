
export default class Url {
    constructor(text) {
      const checkArray = text.split('?');
      if (checkArray.length < 2) {
        this.keyWithValues = null;
      } else {
        const preKeyWithValue = ((text.split('?'))[1]).split('&');
        const arrayKeysWithValues = preKeyWithValue.map((element) => element.split('='));
  
        this.keyWithValues = Object.fromEntries(arrayKeysWithValues);
      }
      if ((text.split(':')).length > 2) {
        const [, , third] = text.split(':');
        this.flag = third;
      }
      const checkArray2 = (text.split(':')[1]).split('//');
  
      if (checkArray2.length < 2) {
        const [second, ] = text.split('?');
        console.log(text.split('?'))
        console.log(second)
        this.hostName = second;
      } else {
        console.log((((text.split(':'))[1]).split('//')[1]).split('?'))
        this.hostName = (((text.split(':'))[1]).split('//')[1]).split('?')[0];
      }
      console.log(text.split(':'))
      this.scheme = (text.split(':'))[0];
    }
  
    getScheme() {
      return this.scheme;
    }
  
    getHostName() {
      return this.hostName;
    }
  
    getQueryParams() {
      return this.keyWithValues;
    }
  
    getQueryParam(key, value = null) {
      let result = '';
      if (!this.keyWithValues[key]) {
        result = value;
      }
      if (this.keyWithValues[key]) {
        result = this.keyWithValues[key];
      }
      return result;
    }
  
    equals(url) {
      if (url.flag) {
        if (this.flag !== url.flag) {
          return false;
        }
      }
      const url1 = {
        scheme: this.scheme,
        hostName: this.hostName,
        keyWithValues: this.keyWithValues,
      };
      if (url.keyWithValues === null) {
        return false;
      }
      if (url1.scheme === url.scheme && url1.hostName === url.hostName) {
        const obj1 = Object.entries(this.keyWithValues);
        const obj = Object.entries(url.keyWithValues);
        return JSON.stringify(obj1) === JSON.stringify(obj);
      }
      return false;
    }
  }
const url = new Url('https://google.com:80?a=b&c=d&lala=value');

// console.log(url.getScheme());
// console.log(url.getHostName());
// console.log(url.getQueryParams());
// console.log(url.getQueryParam('key'))
// console.log(url.getQueryParam('key2', 'lala'))
// console.log(url.getQueryParam('new', 'ehu'))
// console.log(url.getQueryParam('new'))
// console.log(url.equals(new Url('https:google.com')))
// console.log(url.equals(new Url('http://yandex.ru:80?key=value')))
// console.log(url.equals(new Url('https://google.com:80?a=b&c=d&lala=value')))
// const googleUrl = 'https://google.com:80?a=b&c=d&lala=value';
// console.log(url.equals(new Url(googleUrl.replace('80', '443'))))
// //   url.getQueryParam('key'); // 'value'
// // // второй параметр - значение по умолчанию
// // url.getQueryParam('key2', 'lala'); // 'value2'
// // url.getQueryParam('new', 'ehu'); // 'ehu'
// // url.getQueryParam('new');
