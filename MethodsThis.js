const make = (numer = 0, denom = 0) => {
  const rat = {
    numer: numer,
    denom: denom,
    setNumer: function setNumer(newNumer) {
        return this.numer = newNumer;
      },
    setDenom: function setDenom(newDenom) {
        return this.denom = newDenom;
      },
    getNumer: function getNamer() {
      return this.numer;
    },
    getDenom: function getDenom() {
        return this.denom;
    },
    add: function add(rat2) {
        const a = this.numer;
        const b = this.denom;
        const c = rat2.numer;
        const d = rat2.denom;
        const numer = (a * d + b * c);
        const denom = (b * d);
        const result = make(numer, denom);
        return result;
      },
      toString: function toString() {
        return `${this.numer}/${this.denom}`;
    },
  };
  return rat;
}

