const express = require('express');

const app = express();

app.get('/',(request, response) => {
    return response.json({ message: 'Hello woooord' });
})

app.listen(3333);