import express from 'express'
import router from './route.js'

const app = express()

const PORT = 3000

// Define a simple route
app.get('/', (req, res) =>{
    res.send("Hello, Express!")
})

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

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
