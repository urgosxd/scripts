const Fraction = require("fraction.js");

const back = `\\`;
const Scripts = [
  {
    id: 1,
    nombre: "Ecuacion Primer Grado",
    parametros: ["coeficienteLineal", "terminoIndependiente"],
    f: (a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (a !== 0) {
        let resultado = (-1 * b) / a;
        return `$$x = ${resultado}$$`;
      }
      return "a != 0";
    },
  },
  {
    id: 2,
    nombre: "Ecuacion Segundo Grado",
    parametros: [
      "coeficienteCuadratico",
      "coeficienteLineal",
      "terminoIndependiente",
    ],
    f: (a, b, c) => {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);

      if (Math.sqrt(b * b - 4 * a * c) > -1) {
        let resultado1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        let resultado2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

        return `$$x_1 = ${resultado1} \\\\ \n x_2 = ${resultado2}$$`;
      } else {
        return "No hay solucion Delta >0";
      }
    },
  },
  {
    id: 3,
    nombre: "Funcion Vertice Parabola",
    parametros: [
      "coeficienteCuadratico",
      "coeficienteLineal",
      "terminoIndependiente",
    ],
    f: (a, b, c) => {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);

      if (a !== 0) {
        let ejeX = (-1 * b) / (2 * a);
        let ejeY = a * ejeX * ejeX + b * ejeX + c;
        return `$$ V ${back}left(${back}underbrace{${ejeX}}_{x},${back}underbrace{${ejeY}}_{y}${back}right)$$`;
      }
    },
  },
  {
    id: 4,
    nombre: "Dominio y rango funcion Racional",
    parametros: [
      "numeradorOnX (y/n)",
      "coeficienteNumerador1",
      "TerminoIndependienteNumerador2",
      "coeficienteDenominador1",
      "TerminoIndependienteDenominador2",
    ],
    f: (bool, a, b, c, d) => {
      a = parseInt(a);
      b = parseInt(b);
      c = parseInt(c);
      d = parseInt(d);

      switch (bool) {
        case "y": {
          let DenominadorInecuacion = (-1 * d) / c;
          let frac = new Fraction(DenominadorInecuacion);
          let frac2 = frac.toLatex(false);
          let fracFinal = frac2.toString().substring(1);

          return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${back}${fracFinal}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${back}frac{${a}}{${c}}${back}right${back}rbrace $$`;
        }
        case "n": {
          let DenominadorInecuacion = (-1 * d) / c;
          let frac = new Fraction(DenominadorInecuacion);
          let frac2 = frac.toLatex(false);
          let fracFinal = frac2.toString().substring(1);

          return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${back}${fracFinal}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${0}${back}right${back}rbrace $$`;
        }
        default:
          return "crash";
      }
    },
  },
];

module.exports = Scripts;
