const express = require('express');
const cors = require("cors");
const path = require('path');
const app = express();
const bodyParser = require("body-parser");




const port = 5000;
console.log(__dirname)
//--------------------- Serve Assets ---------------------


app.use(bodyParser.json());
app.use(cors());

app.get('/api/test', (req, res, next) => {//endpoint de testing
  console.log('api/users called!')
  res.json([{
    id: 0,
    instrumento: "Guitarra acustica",
    precio: 1000,
    url: "https://media.istockphoto.com/photos/acoustic-guitar-picture-id156547833?s=612x612",
    genero: "Cuerda"
  },
  {
    id: 1,
    instrumento: "Guitarra eléctrica",
    precio: 5000,
    url: "https://media.istockphoto.com/photos/flying-v-electric-guitar-picture-id157725190?s=612x612",
    genero: "Eléctrico"

  },
  {
    id: 2,
    instrumento: "Acordeón",
    precio: 6000,
    url: "https://media.istockphoto.com/photos/red-accordion-picture-id97521968?s=612x612",
    genero: "Viento"
  },
  {
    id: 3,
    instrumento: "Flauta",
    precio: 900,
    url: "https://media.istockphoto.com/photos/flute-picture-id527682468?s=612x612",
    genero: "Viento"
  },
  {
    id: 4,
    instrumento: "Flauta dulce",
    precio: 100,
    url: "https://media.istockphoto.com/photos/recorder-instrument-picture-id682528626?s=612x612",
    genero: "Viento"
  },
  {
    id: 5,
    instrumento: "Clarinete",
    precio: 2500,
    url: "https://media.istockphoto.com/photos/clarinet-isolated-over-white-background-picture-id1167388600?s=612x612",
    genero: "Viento"
  },
  {
    id: 6,
    instrumento: "Teclado",
    precio: 6500,
    url: "https://media.istockphoto.com/photos/electronic-synthesizer-isolated-on-white-background-picture-id513439116?s=612x612",
    genero: "Teclas"
  },
  {
    id: 7,
    instrumento: "Piano",
    precio: 10000,
    url: "https://media.istockphoto.com/photos/grand-piano-black-picture-id1150731667?s=612x612",
    genero: "Teclas"
  },
  {
    id: 8,
    instrumento: "Batería",
    precio: 15000,
    url: "https://media.istockphoto.com/photos/drum-kit-picture-id478693197?s=612x612",
    genero: "Percusión"
  }])
});



app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});