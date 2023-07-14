
function Money(value, currency = 'usd') {
    this.value = value;
    this.currency = currency;
    Money.prototype.getValue = function getValue() {
        return this.value;
    }
    Money.prototype.getCurrency = function getCurrency() {
        return this.currency;
    }
    Money.prototype.exchangeTo = function exchangeTo(newCurrency) {
        if (this.currency !== newCurrency) {
            if (newCurrency === 'eur') {
                this.value = this.value * 0.7;
                this.currency = newCurrency;
            } else {
                this.value = Math.ceil(this.value * 1.42);
                this.currency = newCurrency;
            }
        }
        return new Money(this.value, this.currency);
    }
    Money.prototype.add = function add(money) {
        let firstValue = this.value;
        let firstCurrency = this.currency;
        let secondValue = money.value;
        let secondCurrency = money.currency;

        console.log(firstValue)
        console.log(firstCurrency)

        if (firstCurrency !== secondCurrency) {
            if (firstCurrency === 'usd') {
                secondValue = secondValue * 1.2;
                secondCurrency = 'usd';
            }
            if (firstCurrency === 'eur') {
                secondValue = secondValue * 0.7;
                secondCurrency = 'eur';
            }
        }
        return new Money((firstValue + secondValue), firstCurrency);
    };
    Money.prototype.format = function format() {
        return this.value.toLocaleString(undefined, { style: 'currency', currency: this.currency })
    }
};


const money1 = new Money(100);
console.log(money1)
console.log(money1.getValue()); // 100
console.log(money1.getCurrency());
console.log(money1.exchangeTo('eur').getValue());
console.log(money1.exchangeTo('eur').getCurrency());
console.log(money1.exchangeTo('usd').getValue())

const money2 = new Money(200, 'eur');
console.log(money2)
console.log(money2.getValue()); // 200
const money3 = money2.add(money1);
console.log(money3.getValue()) // 270
console.log(money2)
console.log(money1)
const money4 = money1.add(money2);
console.log(money4.getValue()); //

console.log(money1.format()); // "$100.00"
console.log(money2.format()); // "€200.00"
const money5 = new Money(10000);
console.log(money5.format());
