const express = require('express')
const hbs = require('hbs');
require('dotenv').config(); //Establezco las variables de entorno de .env
const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials');

//middles una funcion que se ejecuta antes de hacer otra cosa
// Servir contenido estatico
app.use(express.static('public') );


  app.get('/', function (req, res) {
    res.render('home', {
      nombre: 'Nicolas Ciccarelli',
      titulo: 'Curso de Node'

    });
  });

  app.get('/generic', function (req, res) {
    res.render('generic', {
      nombre: 'Nicolas Ciccarelli',
      titulo: 'Curso de Node'

    });
  });
  
  app.get('/elements', function (req, res) {
    res.render('elements', {
      nombre: 'Nicolas Ciccarelli',
      titulo: 'Curso de Node'

    });
  });
  



  //viejo sin HBS
  // app.get('/index', function (req, res) {
  //   res.sendFile(__dirname + '/public/index.html')
  // })

  // app.get('/generic', function (req, res) {
  //   res.sendFile(__dirname + '/public/generic.html')
  // })

  // app.get('/elements', function (req, res) {
  //   res.sendFile(__dirname + '/public/elements.html')
  //  })

  // app.get('*', function (req, res) {
  //   res.sendFile(__dirname + '/public/404.html')
  // })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  