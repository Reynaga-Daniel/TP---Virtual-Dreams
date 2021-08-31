const request = require('request');
const express = require('express');
var cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/test', (req, res) => {


    if (Object.keys(req.body).length != 3) {
        return res.status(400).json({
            ok: false,
            message: "Formate invalido1, Ingrese nuevamente"
        })
    }

    if (!req.body.hasOwnProperty("nombre") && !req.body.hasOwnProperty("apellido") && !req.body.hasOwnProperty("dni")) {
        return res.status(400).json({
            ok: false,
            message: "Formate invalido2, Ingrese nuevamente"
        })
    }
    

    if (!req.body.nombre || !req.body.apellido) {
        return res.status(400).json({
            ok: false,
            message: "Campo vacio, Ingrese un nombre/apellido"
        })
    }

    if (typeof req.body.nombre !== "string" || typeof req.body.apellido !== "string") {
        return res.status(400).json({
            ok: false,
            message: "Error, ingrese un texto"
        })
    }

    if (typeof req.body.dni !== "number" || req.body.dni.toString().length > 10) {
        return res.status(400).json({
            ok: false,
            message: "Error, Ingrese un valor numerico nuevamente"
        })
    }


    res.json({
        status: "ok"
    })


    var dataString = JSON.stringify(req.body);


    var options = {
        url: 'https://reclutamiento-14cf7.firebaseio.com/personas.json',
        method: 'POST',
        body: dataString
    }

    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }

    request(options, callback);
})



app.get('/', (req, res) => {
    res.send("hello word");
})

app.listen(3000, () => {
    console.log("Server iniciado en el puerto 3000");
})
