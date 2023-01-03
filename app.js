const express = require('express');
const PORT = 4000;
const app = express();
const productRouter = require('./routes/productRoutes')
const cors = require('cors')
const hbs = require('hbs')
const path = require('path')

app.use(cors())

//Setup which view engine to use
app.set('view engine', 'hbs')
//If you want to change the name of views directory
app.set('views', './templates')
//To access the static files in server
app.use(express.static('./public'))
//Indicate where to search for partials
hbs.registerPartials(path.join(__dirname, '/templates/partials'))

app.use('/products', productRouter)

app.all('*', (req, res) => {
    res.status(404). send("Page Not Found")
})
 
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})