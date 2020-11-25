const express = require('express');
const app = express();
const hbsExpress = require('express-handlebars');
const { route } = require('./routes/user');
const routeHome = require('./routes/home');
const routeUser = require('./routes/user');


//server base
const port = process.env.PORT || 3001
app.listen(port, () => {
  console.log(`Server started on port - ${port}`)
})

//handlebars
const hbs = hbsExpress.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine) //declaration hbs
app.set('view engine', 'hbs') //use hbs
app.set('views', 'views') //set hi


//routes
app.use('/', routeHome)
app.use('/user', routeUser);

