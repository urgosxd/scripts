const Scripts = [
  {
    id: 1,
    nombre: "Ecuacion cuadratica",
    parametros: ["valorX"],
    f: (a) => {
      const resultado = Math.sqrt(parseInt(a));
      return resultado;
    },
  },
];

module.exports = Scripts;
