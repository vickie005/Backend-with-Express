import express from 'express'
import router from './route.js'

const app = express()

const PORT = 3000

// Define a simple route
// get request - to create a route
app.get('/', (req, res) =>{
    res.send("Hello, Express!")
})

/*
app.use('/user', router)

app.use(express.json())

app.post('/users', (req, res)=> {
    const {name, email} = req.body
    res.json({
        message:`user ${name} with email ${email} created successfully`
    })
})

app.put('/users/:id', (req, res)=>{
    const userId = req.params.id
    const {name, email} = req.body
    res.json({
        message: `User with ${userId} updated to ${name}, ${email}`
    })
})

app.delete('/users/:id', (req, res)=>{
    const userId = req.params.id
    res.json({
        message: `User with id ${userId} deleted successfully`
    })
})
*/

// create a route with multiple parameters
app.get('/things/:name/:id', (req, res) =>{
    const {name, id} = req.params
    res.json({
        id,
        name
    })
})

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
