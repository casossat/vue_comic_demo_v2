export default {
  data() {
    return {
      min: 0,
      max: 2400,
    };
  },
  methods: {
    generateRandomId() {
      return Math.floor(Math.random() * (this.max - this.min)) + this.min;
    },
    generateRandomIdObject() {
      return `_${Math.random().toString(36).substr(2, 7)}`;
    },
  },
};
