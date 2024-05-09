const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res) => {
    res.render('index', {
        title:'Homepage',
        name:'Express Homepage'
    })
})

app.get('/about',(req,res) =>{
    res.render('about',{
        title:'About',
        name:'The Wave'
    })
})

app.get('/help',(req,res) =>{
    res.render('help',{
        title:'Help',
        name:'The Wave'
    })
})

app.get('/help/*',(req,res) => {
    res.render('404')
})

app.get('/products',(req,res) => {
    if(!req.query.search){
       return res.send({
            error:'You must provide a search term.'
        })
    } 
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('*',(req,res) =>{

    res.render('404')
})





app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})