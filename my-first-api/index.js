const fs = require('fs')
const express = require('express')

const kodemia = JSON.parse(fs.readFileSync('kodemia.json'))

const server = express()
server.use(express.json()) //middleware (use para agregar un middleware, se ejecuta cada request)

// endpoint: combinación de método y ruta
// método: método HTTP - GET, POST, DELETE, PUT, PATCH
// ruta: strings que denotan recursos en nuestro servidor
server.get("/", (request, response) => {
    response.json({
        message: 'My first API is running'
    })
})


//query parameters
server.get("/koders", (req, res) => {
    const { limit = 10 } = req.query
    res.json({
        message: 'All the koders',
        data: {
            koders: kodemia.koders.slice(0,parseInt(limit))
        }
    })    
})

server.post('/koders', (request, response) =>{
    const { name, generation } = request.body
//    const newKoder = {
//        name: request.body.name,
//        generation: request.body.generation
//    }


    kodemia.koders.push({
        name,
        generation
    })
    response.json({
        message: 'new koder added',
        data: {
            koder: {
                name, 
                generation
            }
        }
    })
})

// uri parameters
// /GET /koders/[name]
// GET /koders/charles -> name = charles
// GET / koders/Fer -> name = fernanda
// GET /koders/[name]

/*
server.get('/koders/:name', (request, response) => {
    response.json({
        name: request.params.name
    })
})
*/

server.get('/koders/:index', (request, response) => {
    const {index} = request.params
    response.json({
        message: 'Index ok',
        data: {
            name:kodemia.koders[index]
        } 
    })
})



// query paraneters
// http://servidor/ruta/del/recurso?
// http://api.kodemia.mx/koders?limit=666&from=10&to=100


server.get("/mentors", (req, res) => {
    res.json({
        message: 'All the mentors',
        data: {
            mentors: kodemia.mentors
        }
    })    
})

server.post('/mentors', (request, response) =>{
    const newMentor = {
        name: request.body.name,
        lesson: request.body.lesson
    }
    kodemia.mentors.push(newMentor)

    response.json({
        message: 'new mentor added',
        data: {
            mentor: newMentor
        }
    })

})


server.listen(8081, () => {
    console.log('Server is running')
})