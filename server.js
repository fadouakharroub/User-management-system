const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = process.env.PORT|| 5000;




const db = require('./models')

db.sequelize.sync({force: false});

   
    
      
//tempaling engine

const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//Router
app.get('', (req, res)=>{
res.render('home')
});


 

