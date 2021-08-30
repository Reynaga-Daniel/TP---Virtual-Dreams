var rp = require('request-promise');

rp('https://reclutamiento-14cf7.firebaseio.com/personas.json')
    .then(function(res){
        console.log(JSON.parse(res))
    })
    .catch(function (err) {
        console.log("Ha ocurrido un error")
    });
    