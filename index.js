import express from 'express'
const app = express()

const PORT = 3000

// Define a simple route
app.get('/', (req, res) =>{
    res.send("Hello, Express!")
})

// About Route
app.get('/about', (req, res) =>{
    res.send("This is About Route")
})

// Contact Route
app.get('/contact', (req, res) =>{
    res.send("This is Contact Route")
})

app.get('/user/:username', (req, res) =>{
    const username = req.params.username;
    res.send(`Welcome, ${username}!`)
})

// /search?keyword=express
app.get('/search', (req, res) =>{
    const keyword = req.query.keyword;
    res.send(`Searching for ${keyword}`)
})

app.listen(PORT, () =>{
    console.log(`Server is running at http://localhost:${PORT}`)
})
