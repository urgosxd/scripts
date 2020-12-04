const Scripts = [
  {
    id: 1,
    nombre: "Suma",
    parametros: ["operador1", "operador2"],
    f: (a, b) => {
      const resultado = parseInt(a) + parseInt(b);
      return resultado;
    },
  },
  {
    id: 2,
    nombre: "Raiz",
    parametros: ["Numero"],
    f: (a) => {
      const resultado = Math.sqrt(parseInt(a));
      return resultado;
    },
  },
];

module.exports = Scripts;
