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
];

module.exports = Scripts;
