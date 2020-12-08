const funciones = require("./funciones");

const Scripts = [
  {
    id: 1,
    nombre: "Ecuacion Primer Grado",
    parametros: ["coeficienteLineal", "terminoIndependiente"],
    f: funciones.Ecuacion1Grado,
  },
  {
    id: 2,
    nombre: "Ecuacion Segundo Grado",
    parametros: [
      "coeficienteCuadratico",
      "coeficienteLineal",
      "terminoIndependiente",
    ],
    f: funciones.Ecuacion2Grado,
  },
  {
    id: 3,
    nombre: "Funcion Vertice Parabola",
    parametros: [
      "coeficienteCuadratico",
      "coeficienteLineal",
      "terminoIndependiente",
    ],
    f: funciones.VerticeParabola,
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
    f: funciones.DominioRangoRacional,
  },
  {
    id: 5,
    nombre: "Dominio y rango funcion Raiz",
    parametros: [
      "Cuadratica/linear (y/n)",
      "CoeficienteCuadratico",
      "CoeficienteLinear",
      "TerminoIndependiente",
    ],
    f: funciones.DominioRangoRaiz,
  },
];

module.exports = Scripts;
