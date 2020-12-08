const readline = require("readline");
const Messages = require("./messages");
const scripts = require("./scripts");
const os = require("os");
const clipboardy = require("clipboardy");
const api = require("termux");

let interface = readline.createInterface(process.stdin, process.stdout);

const INIT = `  


                    **************\n
                    MIS FORMULAS \n 
                    by: urgos\n
                    **************

                `;

var pantalla = "";
for (let index = 0; index < scripts.length; index++) {
  pantalla += os.EOL + `${index + 1} ` + scripts[index].nombre;
}

process.stdout.write(INIT);

setTimeout(() => {
  mainScrean();
}, 500);

async function mainScrean() {
  process.stdout.write("\033c");

  interface.question(
    Messages.Inicio + os.EOL + pantalla + os.EOL + os.EOL,
    (res) => {
      res = parseInt(res);
      if (typeof res === "number" && res < scripts.length + 1) {
        const resultado = scripts.find((scrip) => scrip.id === res);
        Ejecutar(resultado);
      } else {
        console.log("Ingresa un numero valido");
      }
    }
  );
}

async function Ejecutar(resultado) {
  let answers = [];

  for (let item of resultado.parametros) {
    answers.push(
      await new Promise((resolve) => {
        interface.question(item + `:  `, (res) => {
          resolve(res);
        });
      })
    );
  }
  interface.close();
  const final = resultado.f.apply(null, answers);
  if (!api.hasTermux) {
    clipboardy.writeSync(final);
  } else {
    api.vibrate().duration(200).run();
    clipboardy.write(final).then((dat) => {
      console.log(dat);
    });
  }
}
