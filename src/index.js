const express = require('express')
const hbs = require('hbs')
const path = require('path')


const app = express()
const port = process.env.PORT || 3000

const pubDir = path.join(__dirname, "../public")
const viewPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)
app.use(express.static(pubDir))


app.get('', (req, res) => {
    res.render('index', {
        title: 'About Me'
    })
})

app.get('/certificates', (req, res) => {
    res.render('certs', {
        title: 'Certificates'
    })
})

app.get('/projects', (req, res) => {
    res.render('projects', {
        title: 'Projects'
    })
})

app.listen(port, () => {

})