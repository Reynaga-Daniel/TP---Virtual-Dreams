TP - VIRTUAL DREAMS

# Ejercicio 2
1)	¿Qué es un servidor HTTP?

Los servidores HTTP son los encargados de despachar todos los archivos de una página o aplicación web y mostrarlos a los usuarios a través de su navegador.

2)	¿Qué son los verbos HTTP? Mencionar los más conocidos

Los verbos HTTP son un conjunto de métodos de petición que indican que acción queremos realizar sobre el servidor.

GET: esto método se utiliza para recuperar información de un servidor o un recurso en específico. Es decir, cuando se pide el contenido de una página web y este devuelve la representación en un formato concreto: HTML, XML, JSON o imágenes, JavaScript, CSS, etc.

POST: Este método se utiliza cuando es necesario enviar información desde el cliente al servidor como un archivo de actualización, información de formulario, etc. En otras palabras, éste método se usa utiliza sobre todo para crear un recurso.

DELETE: esto método se utiliza para eliminar un recurso. es decir, este método utilizado para solicitar al servidor que elimine un archivo en una ubicación específica.

PUT: esto método se utiliza para actualizar información de un recurso, si el recurso no existe lo crea.

3)	¿Qué es un request y un response en una comunicación HTTP? ¿Qué son los headers?

Request: cuando un cliente solicita un pedido al servidor con el objetivo de acceder a un recurso en el servidor.
Response: una vez que el servidor ha recibido y procesado la solicitud, éste debe devolver un mensaje de respuesta HTTP hacia el cliente.

Los headers HTTP son los parámetros que se envían en una petición o respuesta HTTP al cliente o al servidor para proporcionar información esencial sobre la transacción en curso. Esta información que resulta útil por ejemplo para establecer o identificar cookies, saber si el navegador acepta envío de información comprimida, etc.

4)	¿Qué es un queryString? (En el contexto de una url)

La Query String es un término que se utiliza para hacer referencia a una interacción con una base de datos. Además, es la parte de una URL que contiene los datos que deben pasar a las aplicaciones web.

5)	¿Qué es el responseCode? ¿Qué significado tiene los posibles valores devueltos?

Los códigos de estado son emitidos por un servidor en respuesta si se ha completado satisfactoriamente una solicitud HTTP específica.

>1.	Respuestas informativas (100–199),
>2.	Respuestas satisfactorias (200–299),
>3.	Redirecciones (300–399),
>4.	Errores de los clientes (400–499),
>5.	y errores de los servidores (500–599).

6)	¿Cómo se envía data en un Get y cómo en un POST?

En el método GET los datos que se envían al servidor, se escriben en la misma dirección URL como por ejemplo `http://www.ejemplo.com/test/demo/form.php?name1=value1&name2=value2`

El método POST introduce los parámetros en la solicitud HTTP para el servidor. Por ello, no quedan visibles para el usuario.

7)	¿Qué verbo http utiliza el navegador cuando accedemos a una página?

El verbo http que utiliza el navegador cuando accedemos a una página web es GET.

8)	Explicar brevemente qué son las estructuras de datos JSON y XML dando ejemplo de estructuras posibles.

El formato JSON es formato ligero de intercambio de datos, sintácticamente similar al código para crear objetos JavaScript. Se escriben como pares clave / valor.

> Como un objeto:
> 
>{“Persona”:
>
>{“Nombre”: “Daniel”,
>
>“Edad”: 28,
>
>“Provicincia”: “Bs As”
>
>}}

> Como un Array:
>
> {“Persona”:
> 
>[{“Nombre”:”Daniel”,”Provincia”:”Bs As”},
>
>{“Nombre”:”Pablo”,”Provincia”:”Jujuy”}
>
>]}


> var cliente = {
> 
>"nombre":"Pedro",
>
>"apellido":"Perez",
>
>"edad": 22,
>
>"hijos":["elisa","juan"],
>
>pareja: {
>
>"nombre":"Andrea"
>
>}
>
>}

El XML almacena datos en formato de texto sin formato. Que permite definir etiquetas personalizadas para descripción y organización de los datos.

la estructura XML está formada por dos partes:
Prólogo (opcional): contiene una secuencia de instrucciones de procesamiento y/o declaración del tipo de documento.
Cuerpo: es el contenido de información del documento, organizado como un árbol único de elementos marcados.

> `<?xml version="1.0" encoding="ISO-8859-1"?>`
> 
>`<nota>`
>
>`<para>Pedro</para>`
>
>`<de>Laura</de>`
>
>`<titulo>Recordatorio</titulo>`
>
>`<contenido>A las 7:00 pm en la puerta del teatro</contenido>`
>
>`</nota>`

La primera línea es la opcional, especifica la versión XML que se utiliza y el tipo de codificación utilizada.

9)	Explicar brevemente el estándar SOAP

SOAP es un protocolo estándar que permitir la comunicación entre las aplicaciones que se diseñaban con diferentes lenguajes y en diferentes plataformas que pueden comunicarse por medio de intercambio de datos XML.

10)	Explicar brevemente el estándar REST Full

REST define un conjunto de restricciones sobre cómo debe comportarse la arquitectura que se ejecuta sobre HTTP. Los servicios Web RESTful se basan en recursos, la cual se almacena principalmente en un servidor y el cliente solicita el recurso utilizando servicios Web RESTful.


11)	¿Qué son los headers en un request? ¿Para qué se utiliza el key Content-type en un header?

headers en un request son los que contienen más información del navegador del cliente, de la página solicitada, del servidor, etc.
Ejemplo:

> GET /index.php?option=com_content&view=article&id=57&Itemid=86 HTTP/1.1
> 
>Host: aprenderaprogramar.com
>
>User-Agent: Mozilla/5.0 (Windows NT 6.3; WOW64; rv:42.0) Gecko/20100101 Firefox/42.0
>
>Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
>
>Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3
>
>Accept-Encoding: gzip, deflate
>
>Referer: `http://aprenderaprogramar.com/`
>
>Cookie: 6bat36d0999f4da0e8214bc3a90328f50=p3eug5t?pvonb5lrf40jf5dcf71
>
>Connection: keep-alive

La primera línea indica el método que se va utilizar, el resto son pares “nombre:valor” que tienen información diversa sobre la petición HTTP, sobre el navegador y del sistema operativo desde que se hace la petición. También Informa al servidor sobre el algoritmo de codificación y sobre todos los lenguajes que el cliente puede entender. 
Content-Type es la propiedad de header usada para indicar el  media type (en-US) del recurso. Es decir, indicar la naturaleza y el formato de un documento, archivo o conjunto de datos.

# Ejercicio 3

Se instalo POSTMAN para obtener y enviar informacion a la base de datos.

3.1 Con el metodo GET se obtuvo la informacion de la base de datos firebase
![Img](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/blob/master/Ejercicio%203/3_1.jpg?raw=true "Img")

3.2 Con el metodo POST se envio la informacion a la base de datos firebase
![Img2](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/blob/master/Ejercicio%203/3_2.jpg?raw=true "Img2")

3.3 Con el metodo GET se obtuvo la informacion actualizada con los datos cargos en el punto anterior
![img3](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/blob/master/Ejercicio%203/3_3.jpg?raw=true "img3")
# Ejercicio 4

[Repositorio ejercicio 4](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/tree/master/Ejercicio%204)

Se instalo el package request-promise, ejecutando lo siguiente en la terminal
>npm i request-promise

para ejecutar el script, escribir en la terminal 
>node mostrarPersonas.js

![img4](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/blob/master/Ejercicio%204/img/4.jpg?raw=true "img4")
# Ejercicio 5

[Repositorio ejercicio 5](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/tree/master/Ejercicio%205 "Repociturio ejercicio 5")

Se instalaron los package request, cors y  express, ejecutando lo siguiente en la terminal
>npm install request
>
>npm install cors
>
>npm install express

para ejecutar el script, escribir en la terminal 
>node index.js

# Ejercicio 6

ejecutar los pasos del ejercicio 5 para iniciar el servidor y luego abrir crearPersonas.html

[repositorio ejercicio 6](https://github.com/Reynaga-Daniel/TP---Virtual-Dreams/tree/master/Ejercicio%206 "repositorio ejercicio 6")
