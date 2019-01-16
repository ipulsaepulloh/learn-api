const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/',(req, res) => {
  res.send('Bakwan')
})

app.post("/api/Bakwan", (req, res) => {
  res.send("Bakwan");
});

app.get('/people/:id', (req, res) => {
    res.send('people id: ' + req.params.id)
})

app.get('/coba_query', (req, res) => {
    res.send(req.query.Bakwan + '  ' + req.query.gayung)
})

app.post('/coba_body', (req, res) => {
    res.send(req.body.gayung)
})



app.listen(3000, () => console.log('3000'))