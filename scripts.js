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
      "CoeficienteCuadratico",
      "CoeficienteLinear",
      "TerminoIndependiente",
    ],
    f: funciones.DominioRangoRaiz,
  },
  {
    id: 6,
    nombre: "Funcion Valor Absoluto",
    parametros: ["CoefienteAbs(index0 = coef x)", "TerminoIndependiente"],
    f: funciones.ValorAbsoluto,
  },
  {
    id: 7,
    nombre: "Funcion Maximo Entero",
    parametros: ["ValorX"],
    f: funciones.MayorMaximoEntero,
  },
  {
    id: 8,
    nombre: "Funcion Exponencial",
    parametros: ["base", "exponente"],
    f: funciones.Exponencial,
  },
  {
    id: 9,
    nombre: "Funcion Seno",
    parametros: ["Numerador", "Denominador"],
    f: funciones.FuncionSeno,
  },
  {
    id: 10,
    nombre: "Funcion Coseno",
    parametros: ["Numerador", "Denominador"],
    f: funciones.FuncionCoseno,
  },
  {
    id: 11,
    nombre: "Funcion Tangente",
    parametros: ["Numerador", "Denominador"],
    f: funciones.FuncionTangente,
  },
  {
    id: 12,
    nombre: "Funcion Cotangente",
    parametros: ["Numerador", "Denominador"],
    f: funciones.FuncionCotangente,
  },
  {
    id: 13,
    nombre: "Operacion de Funciones",
    parametros: [
      `
  1 lineal\n
  2 cuadratica\n
  3 racional\n
  4 raiz\n
  5 absoluto\n
  6 maximoEntero\n
  7 exponencial\n

  `,
      "FuncionA",
      `
    1 lineal\n
    2 cuadratica\n
    3 racional\n
    4 raiz\n
    5 absoluto\n
    6 maximoEntero\n
    7 exponencial\n
    
      `,
      "FuncionB",
    ],
    f: funciones.OperacionFunciones,
  },
];

module.exports = Scripts;
