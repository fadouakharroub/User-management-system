const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const db = require('./models')

db.sequelize.sync({force: false})

    app.listen(3000, () => {
        console.log('Success  3000');
    });
      
//tempaling engine

const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//Router
app.get('', (req, res)=>{
res.render('home')
});
 

