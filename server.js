const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({extended:true}));

app.get('/api', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.listen(PORT, () => {
    console.log(`SERVER up on port: ${PORT} and is listening for requests to respond`);
    })