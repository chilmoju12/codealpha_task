let app = new Vue({
  el: '#app',
  data() {
    return {
      current: '',
      changeMode: true,
    };
  },
  methods: {
    degreesToRadians(degrees) {
      return (degrees * Math.PI) / 180;
    },
    press: function (event) {
      let me = this;
      let key = event.target.textContent;

      if (
        key != '=' &&
        key != 'C' &&
        key != '*' &&
        key != '/' &&
        key != '√' &&
        key != 'x ²' &&
        key != '%' &&
        key != '<=' &&
        key != '±' &&
        key != 'sin' &&
        key != 'cos' &&
        key != 'tan' &&
        key != 'log' &&
        key != 'ln' &&
        key != 'x^' &&
        key != 'x !' &&
        key != 'π' &&
        key != 'e' &&
        key != 'rad' &&
        key != '∘'
      ) {
        me.current += key;
      } else if (key === '=') {
        try {
          if (me.current.includes('^')) {
            let [base, exponent] = me.current.split('^');
            me.current = Math.pow(parseFloat(base), parseFloat(exponent)).toString();
          } else {
            me.current = eval(me.current);
          }
        } catch (error) {
          me.current = 'Error';
        }
      } else if (key === 'C') {
        me.current = '';
      } else if (key === '*') {
        me.current += '*';
      } else if (key === '/') {
        me.current += '/';
      } else if (key === '+') {
        me.current += '+';
      } else if (key === '-') {
        me.current += '-';
      } else if (key === '±') {
        if (me.current.charAt(0) === '-') {
          me.current = me.current.slice(1);
        } else {
          me.current = '-' + me.current;
        }
      } else if (key === '<=') {
        me.current = me.current.substring(0, me.current.length - 1);
      } else if (key === '%') {
        me.current = me.current / 100;
      } else if (key === 'π') {
        me.current = (parseFloat(me.current) * Math.PI).toString();
      } else if (key === 'x ²') {
        me.current = (parseFloat(me.current) * parseFloat(me.current)).toString();
      } else if (key === '√') {
        me.current = Math.sqrt(parseFloat(me.current)).toString();
      } else if (key === 'sin') {
        me.current = Math.sin(this.degreesToRadians(parseFloat(me.current))).toString();
      } else if (key === 'cos') {
        me.current = Math.cos(this.degreesToRadians(parseFloat(me.current))).toString();
      } else if (key === 'tan') {
        me.current = Math.tan(this.degreesToRadians(parseFloat(me.current))).toString();
      }else if (key === 'log') {
        me.current = Math.log10(parseFloat(me.current)).toString();
      } else if (key === 'ln') {
        me.current = Math.log(parseFloat(me.current)).toString();
      } else if (key === 'x^') {
        me.current += '^';
      } else if (key === 'x !') {
        let number = 1;
        if (me.current === '0') {
          me.current = '1';
        } else if (parseFloat(me.current) < 0) {
          me.current = 'NaN';
        } else {
          let n = parseFloat(me.current);
          for (let i = n; i > 0; i--) {
            number *= i;
          }
          me.current = number.toString();
        }
      } else if (key === 'e') {
        me.current = Math.exp(parseFloat(me.current)).toString();
      } else if (key === 'rad') {
        me.current = (parseFloat(me.current) * (180 / Math.PI)).toString();
      } else if (key === '∘') {
        me.current = (parseFloat(me.current) * (Math.PI / 180)).toString();
      }
    },
    changeModeEvent: function () {
      let me = this;
      me.changeMode = !me.changeMode;
    },
  },
});
