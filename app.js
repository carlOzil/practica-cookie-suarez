const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(cookieParser());

//parse application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: false }))

//parse application/json
app.use(express.json())

app.use('/',require('./routers/loginRouter'));


app.listen(port, () => {
console.log(`Servidor COOKIE a la escucha del puerto ${port}`);
});