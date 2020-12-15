const Fraction = require("fraction.js");
const back = `\\`;
var Interval = require("math.interval");
const Reales = new Interval(
  `(${Number.NEGATIVE_INFINITY},${Number.POSITIVE_INFINITY})`
);

String.prototype.replaceAt = function (index, char) {
  var ca = this.split("");
  ca[index] = char;
  return ca.join("");
};

function getNumbers(numberString) {
  let regex = numberString.split(",").map((el) => parseFloat(el));
  return regex;
}

exports.Ecuacion1Grado = (a, b, withoutFormat) => {
  a = parseInt(a);
  b = parseInt(b);

  if (a !== 0) {
    var resultado = (-1 * b) / a;
    if (resultado % 1 !== 0) {
      let frac = new Fraction(resultado);

      let frac2 = withoutFormat == "y" ? frac : frac.toLatex(false);
      resultado = withoutFormat == "y" ? frac2 : frac2.toString();
    } else {
    }

    return withoutFormat == "y"
      ? [resultado, [Reales, Reales]]
      : `$$x = ${resultado}$$`;
  }
  return "a tiene que ser diferente a  0";
};

exports.Ecuacion2Grado = (a, b, c, withoutFormat) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  if (a !== 0) {
    var ejeX = (-1 * b) / (2 * a);
    var ejeY = a * ejeX * ejeX + b * ejeX + c;

    if (ejeY % 1 !== 0) {
      if (a > 0) {
        var Rango = new Interval(`[${ejeY},${Number.POSITIVE_INFINITY})`);
      } else {
        var Rango = new Interval(`[${Number.NEGATIVE_INFINITY},${ejeY})`);
      }

      let frac = new Fraction(ejeY);
      let frac2 = frac.toLatex(false);
      ejeY = frac2.toString();
    } else {
      if (a > 0) {
        var Rango = new Interval(`[${ejeY},${Number.POSITIVE_INFINITY})`);
      } else {
        var Rango = new Interval(`[${Number.NEGATIVE_INFINITY},${ejeY})`);
      }
    }

    Rango =
      withoutFormat == "y"
        ? Rango
        : Rango.toString()
            .replace("Infinity", `${back}infty`)
            .replace("Infinity", `${back}infty`);
    if (Math.sqrt(b * b - 4 * a * c) > -1) {
      var resultado1 = (-1 * b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
      var resultado2 = (-1 * b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

      if (resultado1 % 1 !== 0) {
        let frac = new Fraction(resultado1);
        let frac2 = withoutFormat == "y" ? frac : frac.toLatex(false);
        resultado1 = withoutFormat == "y" ? frac2 : frac2.toString();
      } else {
      }

      if (resultado2 % 1 !== 0) {
        let frac = new Fraction(resultado2);
        let frac2 = withoutFormat == "y" ? frac : frac.toLatex(false);
        resultado2 = withoutFormat == "y" ? frac2 : frac2.toString();
      } else {
      }

      return withoutFormat == "y"
        ? [
            [resultado1, resultado2],
            [Reales, Rango],
          ]
        : `$$x_1 = ${resultado1} ${back}${back} \n x_2 = ${resultado2} ${back}${back} \n Dominio = ${back}mathbf{R} ${back}${back} \n Rango = ${Rango}$$`;
    } else {
      return withoutFormat == "y"
        ? [null, [Reales, Rango]]
        : `$$Dominio = ${back}mathbf{R}  ${back}${back} \n Rango = ${Rango}$$`;
    }
  }
};

exports.VerticeParabola = (a, b, c, withoutFormat) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  if (a !== 0) {
    var ejeX = (-1 * b) / (2 * a);
    var ejeY = a * ejeX * ejeX + b * ejeX + c;

    if (ejeX % 1 !== 0) {
      let frac = new Fraction(ejeX);
      let frac2 = frac.toLatex(false);
      ejeX = frac2.toString();
    } else {
    }

    if (ejeY % 1 !== 0) {
      let frac = new Fraction(ejeY);
      let frac2 = frac.toLatex(false);
      ejeY = frac2.toString();
    } else {
    }
    return withoutFormat == "y"
      ? [ejex, ejeY]
      : `$$ V ${back}left(${back}underbrace{${ejeX}}_{x},${back}underbrace{${ejeY}}_{y}${back}right)$$`;
  }
};

exports.DominioRangoRacional = (a, b, c, d) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  d = parseInt(d);

  var DenominadorInecuacion = (-1 * d) / c;
  if (DenominadorInecuacion % 1 !== 0) {
    let frac = new Fraction(DenominadorInecuacion);
    let frac2 = frac.toLatex(false);
    DenominadorInecuacion = frac2.toString();
  } else {
  }
  var Rango = a / c;

  if (Rango % 1 !== 0) {
    let frac = new Fraction(a / c);
    let frac2 = frac.toLatex(false);
    Rango = frac2.toString();
  } else {
  }

  return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${DenominadorInecuacion}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${Rango}${back}right${back}rbrace $$`;
};

exports.DominioRangoRaiz = (a, b, c, withoutFormat) => {
  a = parseFloat(a);
  b = parseFloat(b);
  c = parseFloat(c);

  if (a !== 0) {
    let criticos = this.Ecuacion2Grado(a, b, c, "y");
    let interval = new Interval(`[${criticos[0]},${Number.POSITIVE_INFINITY})`);
    let interval2 = interval.union(
      `(${Number.NEGATIVE_INFINITY},${criticos[1]}]`
    );

    let intervalFinal =
      withoutFormat == "y"
        ? interval2
        : interval2
            .toString()
            .replace("Infinity", `${back}infty`)
            .replace("Infinity", `${back}infty`);

    return withoutFormat == "y"
      ? intervalFinal
      : `$$Dominio(f) = ${intervalFinal.replaceAt(
          intervalFinal.indexOf(",", 9),
          `${back}cup`
        )} ${back}${back}\n Rango(f) = [0,${back}infty)
      $$`;
  } else {
    let criticos = this.Ecuacion1Grado(b, c, "y");
    let interval = new Interval(`[${criticos},${Number.POSITIVE_INFINITY})`);
    let intervalFinal =
      withoutFormat == "y"
        ? interval2
        : interval.toString().replace("Infinity", `${back}infty`);
    intervalFinal =
      withoutFormat == "y"
        ? intervalFinal
        : criticos % 1 !== 0
        ? intervalFinal.replace(
            `${criticos}`,
            `${criticos.toLatex().toString()}`
          )
        : intervalFinal;

    return withoutFormat == "y"
      ? intervalFinal
      : `$$Dominio(f) =${intervalFinal} ${back}${back}\n Rango(f) = [0,${back}infty)$$`;
  }
};

exports.ValorAbsoluto = (str, c, withoutFormat) => {
  c = parseFloat(c);
  str = getNumbers(str);

  str.push("y");

  let result = this.Ecuacion1Grado.apply(null, str);

  let interval = new Interval(`[${c},${Number.POSITIVE_INFINITY})`);
  let intervalFinal =
    withoutFormat == "y"
      ? interval
      : interval.toString().replace("Infinity", `${back}infty`);

  return withoutFormat == "y"
    ? intervalFinal
    : `$$Dominio(f) = ${back}mathbf{R} ${back}${back}\n Rango(f)= ${intervalFinal}${back}${back}\n  V ${back}left(${back}underbrace{${result}}_{x},${back}underbrace{${c}}_{y}${back}right)$$`;
};

exports.MayorMaximoEntero = (a, withoutFormat) => {
  a = parseFloat(a);
  let resultado = Math.ceil(a);
  resultado = resultado - 1;
  return withoutFormat == "y"
    ? resultado
    : `$$${resultado}${back}${back} \n Dominio(f) = ${back}mathbf{R} ${back}${back} \n Rango(f) = ${back}mathbf{Z} $$`;
};

exports.Exponencial = (a, exp, withoutFormat) => {
  a = parseFloat(a);
  exp = parseFloat(exp);

  if (withoutFormat == "y") {
    return Math.pow(a, exp);
  } else {
    if (a > 1) {
      let resultado = Math.pow(a, exp);

      return `$$${resultado} Creciente ${back}${back} \n Dominio(f) = ${back}mathbf{R} ${back}${back} \n Rango(f) = (0,${back}infty)$$`;
    } else if (a > 0 && a < 1) {
      let resultado = Math.pow(a, exp);
      return `$$${resultado} Decreciente ${back}${back} \n Dominio(f) = ${back}mathbf{R} ${back}${back} \n Rango(f) = (0,${back}infty)$$`;
    } else {
      console.log("A != 1 and 0");
    }
  }
};

exports.FuncionSeno = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);

  let frac = new Fraction(a / b);

  let res = Math.sin((frac.s * frac.n * Math.PI) / frac.d);

  return `$$ ${res} ${back}${back} \n Dominio(f) = ${back}mathbf{R} ${back}${back} \n Rango(f) = [-1,1]$$`;
};

exports.FuncionCoseno = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);

  let frac = new Fraction(a / b);

  let res = Math.cos((frac.s * frac.n * Math.PI) / frac.d);

  return `$$ ${res} ${back}${back} \n Dominio(f) = ${back}mathbf{R} ${back}${back} \n Rango(f) = [-1,1]$$`;
};

exports.FuncionTangente = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);

  let frac = new Fraction(a / b);

  let res = Math.c((frac.s * frac.n * Math.PI) / frac.d);

  return `$$ ${res} ${back}${back} \n Dominio(f) = ${back}mathbf{R} - ${back}left${back}lbrace k${back}pi + ${back}frac{${back}pi}{2} , k ${back}in ${back}mathbf{Z} ${back}right${back}rbrace ${back}${back} \n Rango(f) = ${back}mathbf{R}$$`;
};

exports.FuncionCotangente = (a, b) => {
  a = parseInt(a);
  b = parseInt(b);

  let frac = new Fraction(a / b);

  let res = 1 / Math.tan((frac.s * frac.n * Math.PI) / frac.d);

  return `$$ ${res} ${back}${back} \n Dominio(f) = ${back}mathbf{R} - ${back}left${back}lbrace k${back}pi , k ${back}in ${back}mathbf{Z} ${back}right${back}rbrace ${back}${back} \n Rango(f) = ${back}mathbf{R}$$`;
};

exports.OperacionFunciones = (typeA, funA, typeB, funB) => {
  const na = `
  1 lineal\n
  2 cuadratica\n
  3 racional\n
  4 raiz\n
  5 absoluto\n
  6 maximoEntero\n
  7 exponencial\n

  `;

  funA = getNumbers(funA);
  funB = getNumbers(funB);
  switch (typeA) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      break;
    case "7":
      break;

    default:
      break;
  }

  return `JAJAJA`;
};
