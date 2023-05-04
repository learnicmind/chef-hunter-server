const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

const chefs = require('./data/chefdetails.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Chef Hunter')
})

app.get('/chefdetails', (req, res) => {
    res.send(chefs)
})

app.get('/chefdetails/:id', (req, res) => {
  const id = req.params.id;
  const selectedChef = chefs.find(chef => parseInt(chef.id) === parseInt(id))
  res.send(selectedChef)
  console.log(id, selectedChef)
})

app.listen(port, () => {
  console.log(`chef site is running on port: ${port}`)
})