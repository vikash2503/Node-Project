const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/view/partial');

app.set('view engine', 'hbs');

app.get('/about', (req, res)=>{

     res.render('about.hbs', {
     	PageTitle : "welcome vikash",
     	Footer    : new Date().getFullYear()
     });

})

//Test the Git
app.get('/', (req, res)=>{
	res.send(' First Web Node App');
	
});


app.listen(3000, ()=>{
	console.log('Server started successsfully on port : 3000');
});

