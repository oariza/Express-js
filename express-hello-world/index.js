const express = require('express')

const app = express()

//app.[get | post | delete | put | patch(ruta, requestHandler)]


//endpoint1 - metodo get a la ruta raiz('/')
app.get('/', (request, response) => {

    response.write('HOLA KODERS')
    response.end()
})

//endpoint2 - metodo get a la ruta raiz('/hola')
app.get('/hola', (request, response) => {
    response.json({
        message: 'hola en json'
    })
})


app.get('/adios', (request, response) => {
    response.writeHead(200, {
        'Content-type': 'application/json'
    })
    const responseObject = {
        message: 'adios'
    }
    response.write(JSON.stringify(responseObject))
    response.end()
})

app.post('/', (request, response) => {
    response.json({
        message: "POST a root"
    })
})

app.delete('/', (request, response) => {
    response.status(400)
    response.json({
        message: "DELETE a root"
    })    
})


const fs = require('fs')

app.get('/practica', (request, response) => {
    fs.readFile('./test.txt', 'utf-8', (error, data) =>{
        if(error){
            response.write('Hubo un error al leer el archivo', error)
            return
        }
        response.json({
            message: data
        })
    })
})

app.listen(8081, () => {
    console.log('server running')
})