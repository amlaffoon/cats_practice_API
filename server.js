const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public')) //use method is for middleware - goes before each request

let cats = ["Chai", "Peach", "Zelda", "Razzle"];

app.get('/cats', (req, res) => {
    res.send(JSON.stringify(cats))
})

app.post('/cats', (req, res) => {
    let newCat = req.body.cat
    cats.push(newCat);
    console.log("Added New Cat", cats);
    res.send(JSON.stringify(cats))
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})