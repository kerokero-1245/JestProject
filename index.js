const express = require('express');
const app = express();
const port = process.env.port || 3000;

const sum = require('./sum');

app.get('/',(req,res) => {
    res.send(`Sum of 2 + 3 = ${sum(2,3)}`);
});

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
});