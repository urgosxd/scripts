const Fraction = require("fraction.js");

const Scripts = [
  {
    id: 1,
    nombre: "Suma",
    parametros: ["operador1", "operador2"],
    f: (a, b) => {
      const resultado = parseInt(a) + parseInt(b);
      return `$$${resultado}$$`;
    },
  },
  {
    id: 2,
    nombre: "Raiz",
    parametros: ["Numero"],
    f: (a) => {
      const resultado = Math.sqrt(parseInt(a));
      return `$$${resultado}$$`;
    },
  },
  {
    id: 3,
    nombre: "Ecuacion Primer Grado",
    parametros: ["coeficienteLineal", "terminoIndependiente"],
    f: (a, b) => {
      a = parseInt(a);
      b = parseInt(b);

      if (a !== 0) {
        const resultado = (-1 * b) / a;
        return `$$x = ${resultado}$$`;
      }
      return "a != 0";
    },
  },
  {
    id: 4,
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
        const resultado1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        const resultado2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

        return `$$x_1 = ${resultado1} \\\\ \n x_2 = ${resultado2}$$`;
      } else {
        return "No hay solucion Delta >0";
      }
    },
  },
  {
    id: 5,
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

      const back = "\\";

      if (a !== 0) {
        const ejeX = (-1 * b) / (2 * a);
        const ejeY = a * ejeX * ejeX + b * ejeX + c;
        return `$$ V ${back}left(${back}underbrace{${ejeX}}_{x},${back}underbrace{${ejeY}}_{y}${back}right)$$`;
      }
    },
  },
  {
    id: 6,
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
      const back = "\\";
      switch (bool) {
        case "y":
          const DenominadorInecuacion = (-1 * d) / c;
          const frac = new Fraction(DenominadorInecuacion);
          const frac2 = frac.toLatex(false);
          const fracFinal = frac2.toString().substring(1);

          return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${back}${fracFinal}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${back}frac{${a}}{${c}}${back}right${back}rbrace $$`;

        case "n":
          const DenominadorInecuacion_2 = (-1 * d) / c;
          const frac_2 = new Fraction(DenominadorInecuacion_2);
          const frac2_2 = frac_2.toLatex(false);
          const fracFinal_2 = frac2_2.toString().substring(1);

          return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${back}${fracFinal_2}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${0}${back}right${back}rbrace $$`;

        default:
          return "crash";
      }
    },
  },
];

module.exports = Scripts;
