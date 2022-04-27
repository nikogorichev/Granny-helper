const express = require('express');
const config = require('./config/config');

const app = express();

const PORT = 3000;

config(app);

app.listen(PORT, () => console.log(`8===э server started at ${PORT} port c===8`));
