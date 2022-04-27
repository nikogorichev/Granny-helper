const express = require('express');
const config = require('./config/config');
const mainRouter = require('./routes/views/main.route')

const app = express();

const PORT = 3000;

config(app);
app.use('/', mainRouter)


app.listen(PORT, () => console.log(`8===э server started at ${PORT} port c===8`));
