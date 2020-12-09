const Fraction = require("fraction.js");
const back = `\\`;
var Interval = require("math.interval");

String.prototype.replaceAt = function (index, char) {
  var ca = this.split("");
  ca[index] = char;
  return ca.join("");
};

function getNumbers(numberString) {
  var regx = numberString.match(/-?\d+/g).map(Number);
  return regx;
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

    return withoutFormat == "y" ? resultado : `$$x = ${resultado}$$`;
  }
  return "a tiene que ser diferente a  0";
};

exports.Ecuacion2Grado = (a, b, c, withoutFormat) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

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
      ? [resultado1, resultado2]
      : `$$x_1 = ${resultado1} \\\\ \n x_2 = ${resultado2}$$`;
  } else {
    return "No hay solucion Delta >0";
  }
};

exports.VerticeParabola = (a, b, c) => {
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
      let frac = new Fraction(ejey);
      let frac2 = frac.toLatex(false);
      ejey = frac2.toString();
    } else {
    }
    return `$$ V ${back}left(${back}underbrace{${ejeX}}_{x},${back}underbrace{${ejeY}}_{y}${back}right)$$`;
  }
};

exports.DominioRangoRacional = (bool, a, b, c, d) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);
  d = parseInt(d);

  switch (bool) {
    case "y": {
      var DenominadorInecuacion = (-1 * d) / c;
      var Rango = 0;
      if (DenominadorInecuacion % 1 !== 0) {
        let frac = new Fraction(DenominadorInecuacion);
        let frac2 = frac.toLatex(false);
        DenominadorInecuacion = frac2.toString();
      } else {
      }

      if ((a / c) % 1 !== 0) {
        let frac = new Fraction(a / c);
        let frac2 = frac.toLatex(false);
        Rango = frac2.toString();
      } else {
        Rango = a / c;
      }
      return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${DenominadorInecuacion}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${Rango}${back}right${back}rbrace $$`;
    }
    case "n": {
      var DenominadorInecuacion = (-1 * d) / c;

      if (DenominadorInecuacion % 1 !== 0) {
        let frac = new Fraction(DenominadorInecuacion);
        let frac2 = frac.toLatex(false);
        DenominadorInecuacion = frac2.toString();
      } else {
      }

      return `$$Dominio: ${back}mathbf{R} - ${back}left${back}lbrace${DenominadorInecuacion}${back}right${back}rbrace ${back}${back}\n Rango: ${back}mathbf{R} - ${back}left${back}lbrace${0}${back}right${back}rbrace $$`;
    }
    default:
      return "crash";
  }
};

exports.DominioRangoRaiz = (bool, a, b, c) => {
  a = parseInt(a);
  b = parseInt(b);
  c = parseInt(c);

  switch (bool) {
    case "y": {
      let criticos = this.Ecuacion2Grado(a, b, c, "y");
      let interval = new Interval(
        `[${criticos[0]},${Number.POSITIVE_INFINITY})`
      );
      let interval2 = interval.union(
        `(${Number.NEGATIVE_INFINITY},${criticos[1]}]`
      );

      let intervalFinal = interval2
        .toString()
        .replace("Infinity", `${back}infty`)
        .replace("Infinity", `${back}infty`);

      return `$$Dominio(f) = ${intervalFinal.replaceAt(
        intervalFinal.indexOf(",", 9),
        `${back}cup`
      )} ${back}${back}\n Rango(f) = [0,${back}infty)
      $$`;
    }
    case "n": {
      let criticos = this.Ecuacion1Grado(b, c, "y");
      let interval = new Interval(`[${criticos},${Number.POSITIVE_INFINITY})`);
      let intervalFinal = interval
        .toString()
        .replace("Infinity", `${back}infty`);
      intervalFinal =
        criticos % 1 !== 0
          ? intervalFinal.replace(
              `${criticos}`,
              `${criticos.toLatex().toString()}`
            )
          : intervalFinal;

      return `$$Dominio(f) =${intervalFinal} ${back}${back}\n Rango(f) = [0,${back}infty)$$`;
    }

    default:
      break;
  }
};

exports.ValorAbsoluto = (str, c) => {
  c = parseInt(c);
  let b = 0;
  let c2 = 0;
  let signo;
  str = getNumbers(str);

  str.push("y");

  let result = this.Ecuacion1Grado.apply(null, str);

  let interval = new Interval(`[${c},${Number.POSITIVE_INFINITY})`);
  let intervalFinal = interval.toString().replace("Infinity", `${back}infty`);

  return `$$Dominio(f) = ${back}mathbf{R} ${back}${back}\n Rango(f)= ${intervalFinal}${back}${back}\n  V ${back}left(${back}underbrace{${result}}_{x},${back}underbrace{${c}}_{y}${back}right)$$`;
};
