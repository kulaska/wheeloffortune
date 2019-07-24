const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: __dirname + "/public"});
});

app.use(express.static('public'))

app.listen(5000, () => console.log('working'));