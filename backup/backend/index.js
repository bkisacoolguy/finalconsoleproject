const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./Models/db');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());

const authRouter = require('./Routers/AuthRouter');
const productRouter = require('./Routers/ProductRouter'); 
   // Import TestRouter
app.use('/auth', authRouter);   
app.use('/products', productRouter);                      // Mount TestRouter on /auth

app.get('/ping', (req, res) => {
  res.send('PONG');
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});



// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routers/AuthRouter');

// require('dotenv').config();
// require('./Models/db');

// const PORT = process.env.PORT || 8080;

// app.get('/ping', (req, res) => {
//     res.send('PONG');
// });

// app.use(bodyParser.json());
// app.use(cors());
// // app.use('/auth', AuthRouter);


// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })