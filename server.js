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
    genero: "Cuerda",
    descripcion: "Con más de un siglo en la fabricación de instrumentos musicales, Yamaha es una marca que habla por sí sola. Al ser una referente mundial de la industria musical, su sello de calidad en guitarras es un diferencial asegurado para tus canciones.Un modelo para cada guitarrista La tapa de abeto genera un tono brillante y claro, incluso en los registros más agudos."
  },
  {
    id: 1,
    instrumento: "Guitarra eléctrica",
    precio: 5000,
    url: "https://media.istockphoto.com/photos/flying-v-electric-guitar-picture-id157725190?s=612x612",
    genero: "Eléctrico",
    descripcion: "Disfruta con esta guitarra Squier by Fender Mainstream de la conexión con la música. Con este instrumento descubrirás nuevos acordes, entonarás tus canciones y disfrutarás de la vida musical. Explora, amplifica tu creatividad y desarrolla tu pasión."

  },
  {
    id: 2,
    instrumento: "Acordeón",
    precio: 6000,
    url: "https://media.istockphoto.com/photos/red-accordion-picture-id97521968?s=612x612",
    genero: "Viento",
    descripcion: "HOHNER ACORDEÓN COMPADRE FBbEb ROJO A48421 El Compadre es un acordeón diatónico de tres filas perfecto para los acordeonistas intermedios, o aquellos que buscan comprar un segundo acordeón. Tambien incluye un funda diseñado para proteger tu acordeón."
  },
  {
    id: 3,
    instrumento: "Flauta",
    precio: 900,
    url: "https://media.istockphoto.com/photos/flute-picture-id527682468?s=612x612",
    genero: "Viento",
    descripcion: "Las flautas transversales Cora by L. America son de las más vendidas y aprobadas por maestros. Muestra un terminado impecable. Platos cerrados, embocadura biselada y zapatillas de doble capa de alta calidad."
  },
  {
    id: 4,
    instrumento: "Flauta dulce",
    precio: 100,
    url: "https://media.istockphoto.com/photos/recorder-instrument-picture-id682528626?s=612x612",
    genero: "Viento",
    descripcion: "Se cree que Fife se originó en la flauta transversal oriental que se introdujo en la Europa medieval y se mejoró al estilo actual. En Europa y América, se utiliza mucho en la música folclórica y en las bandas de tambores y pífanos. Su sonido terroso también atrae a mucha gente en Japón, donde el pífano se usa popularmente como instrumento melódico en bandas de batería y pífano y como instrumento de iniciación para aquellos que planean tocar flauta o flautín. "
  },
  {
    id: 5,
    instrumento: "Clarinete",
    precio: 2500,
    url: "https://media.istockphoto.com/photos/clarinet-isolated-over-white-background-picture-id1167388600?s=612x612",
    genero: "Viento",
    descripcion: "Los Clarinetes Cora de la compañía America son instrumentos perfectos para el músico estudiante. Este clarinete presenta un cuerpo de alta calidad con llaves durables niqueladas y apoyo para el dedo pulgar ajustable. Cada clarinete es inspeccionado por técnicos en el centro de distribución de Cora en los Estados Unidos para asegurar que son alcanzados los estándares de alta calidad ."
  },
  {
    id: 6,
    instrumento: "Teclado",
    precio: 6500,
    url: "https://media.istockphoto.com/photos/electronic-synthesizer-isolated-on-white-background-picture-id513439116?s=612x612",
    genero: "Teclas",
    descripcion: "Pasa al siguiente nivel Con sus 61 teclas, podrás tocar una amplia variedad de obras y sumergirte en el mundo del intérprete musical. Ideal para niveles intermedios que quieren superarse y seguir el camino de los grandes músicos."
  },
  {
    id: 7,
    instrumento: "Piano",
    precio: 10000,
    url: "https://media.istockphoto.com/photos/grand-piano-black-picture-id1150731667?s=612x612",
    genero: "Teclas",
    descripcion: "Las teclas son de peso completo. Aparte del sonido de piano cuenta con mas sonido lo que lo hace mas versatil, conexion USB, graba tus interpretaciones, cuenta con el tan prestigioso sonido de grand piano de Kurzweil, acabado que da elegancia al piano."
  },
  {
    id: 8,
    instrumento: "Batería",
    precio: 15000,
    url: "https://media.istockphoto.com/photos/drum-kit-picture-id478693197?s=612x612",
    genero: "Percusión",
    descripcion: "¡SONIDO POTENTE! Este instrumento es ideal para ti porque se puede utilizar por largos periodos de tiempo, sin afectar el sonido; además, un baterista es fundamental por la versatilidad de estilos que maneja como el rock, jazz, blues, pop, entre otros."
  }])
});



app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});