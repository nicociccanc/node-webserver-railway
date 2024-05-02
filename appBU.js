const http = require('http');


http.createServer( (req, res)  => {

    // Status 200 es un mensaje exitoso

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.writeHead(200, {'Content-Type': 'text/plain'})

    //Le avisa al navegador que se va a descargar un archivo y el nombre
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'})


    res.write( 'Hi world');
  
    res.end();
})

.listen( 8080 );



console.log('Escuchando el puerto', 8080);