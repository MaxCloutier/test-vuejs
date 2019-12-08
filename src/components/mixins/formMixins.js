export default {
  methods: {
    isNormalInteger(value) {
      if (value === undefined || value === null) {
        return true;
      }

      const n = Math.floor(value);

      return n !== Infinity && n >= 0;
    },
    isNormalIntegerOrDash(value) {
      if (value === undefined || value === null) {
        return true;
      }

      const { min, max, size } = this.splitSpendAbility(value);

      return this.isNormalInteger(min) && this.isNormalInteger(max) && size <= 2;
    },
    splitSpendAbility(value) {
      const numbers = value.split('-');
      const size = numbers.length;
      let min = null,
          max = null;

      if (size === 0 || size === 1) {
        min = value;
      }
      else if (size === 2) {
        min = numbers[0];
        max = numbers[1];
      }

      return { min, max, size };
    },
    formatUSD(value) {
      if (value === '' || value === null) {
        return '';
      }

      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
      });

      return formatter.format(value);
    },
    formatSpendAbility(value) {
      if (value === '' || value === null) {
        return '';
      }
      const { min, max } = this.splitSpendAbility(value);

      return `${this.formatUSD(min)} - ${this.formatUSD(max)}`;
    }
  }
};
