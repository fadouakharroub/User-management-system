const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT|| 3000;
const router = require('./routes/route');
const handlebars = exphbs.create({ extname: '.hbs',});
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');
app.use('/', router);



const models = require('./models')

app.get('', (req, res)=>{
    res.render('home')
    });
    

app.listen(port, ()=>{
    console.log('the server is listening on port ${port}')
})