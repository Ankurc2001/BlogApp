const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const errorHandler = require('errorhandler');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.promise = global.Promise;

const isProduction = process.env.NODE_ENV === 'production';

const app = express();

var sessions

app.use(cors());
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'Blog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

if(!isProduction) {
  app.use(errorHandler());
}

mongoose.connect('mongodb://localhost/blogApp');
mongoose.set('debug', true);

// Add models

require('./models/Articles');
const user = require('./models/signin');

// Add routes
app.use(require('./routes'));

app.post('/',(req, res)=>{
  sessions=req.session;
  const user_name=req.body.email;
  const password=req.body.password;
  user.validateSignIn(user_name,password,(result)=>{
    if(result){
      sessions.username = user_name;
      res.send('Success')
    }
    else{
      res.send('Wrong username password')
    }
  })
})

app.post('/signup',(req, res)=>{
  const name=req.body.name;
  const email=req.body.email;
  const password=req.body.password;
 
  if(name && email && password){
      user.signup(name, email, password)
  }
  else{
    res.send('Failure');
  }
})


app.get('/home',(req, res)=>{
if(sessions && sessions.username){
  res.status(200);
}
else{
  res.send('unauthorized');
}
})



app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

if (!isProduction) {
  app.use((err, req, res) => {
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });
}

app.use((err, req, res) => {
  res.status(err.status || 500);

  res.json({
    errors: {
      message: err.message,
      error: {},
    },
  });
});




const server = app.listen(port, () => console.log(`Server started on http://localhost:${port}`));