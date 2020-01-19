const express = require('express');
const app = express();
const PORT = 5432;
let Sequelize= require('sequelize');
let sequelize= new Sequelize('postgres://postgres:Kingsmar24@localhost:5432/postgres');

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));