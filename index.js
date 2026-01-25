import express from 'express'
import router from './route.js'

const app = express()

const PORT = 3000

// Define a simple route
app.get('/', (req, res) =>{
    res.send("Hello, Express!")
})

app.use('/user', router)

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
