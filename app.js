const express = require('express');
const PORT = 4000;
const app = express();
const productRouter = require('./routes/productRoutes')
const cors = require('cors')

app.use(cors())

app.set('view engine', 'hbs');

app.use('/products', productRouter)

app.all('*', (req, res) => {
    res.status(404). send("Page Not Found")
})
 
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`)
})