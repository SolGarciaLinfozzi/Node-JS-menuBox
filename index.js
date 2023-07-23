const express = require('express')          
const app = express()
const hbs = require('hbs')
const path = require('path')
const nodemailer = require('nodemailer')
const bcryptjs = require(`bcryptjs`)
const { default: swal } = require('sweetalert')

require('dotenv').config()

const PORT = process.env.PORT || 9000

//middelware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

//configuración hbs
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, 'views/partials'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/Nosotros', (req, res) => {
    res.render('nosotros')
})

app.get('/contacto', (req, res) => {
    res.render('contacto')
})



// servidor 
app.listen(PORT, () => {
    console.log(`Servidor trabajando en el puerto ${PORT}`);
})




