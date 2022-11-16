import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";

const p: Persona = new Persona("Coder", "House");

const app = express();

app.get("/", (req, res) => {
 res.send({
   time: getTime(),
   name: p.getFullName(),
 });
});

const PORT = 8080;
app.listen(PORT, () => {
 console.log(`conectado al puerto: ${PORT}`);
});



// configuarición de node - ts - webpack
// paso 1: npm init -y
// paso 2: npm i -D typescript ts-loader webpack webpack-cli webpack-node-externals
// paso 3: npm i express @types/express
// paso 4: tsc --init
// paso 5: modificar el tsconfig.json