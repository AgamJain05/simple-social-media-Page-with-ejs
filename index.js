const express = require('express');
const path = require('path');
const app = express();

const port = 5500;

app.set("view engine", "ejs"); 
app.set('views', path.join(__dirname, 'views'))
app.get('/', (req, res) => {
    res.render("instagram.ejs");
    }
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
