var express = require('express');
var app = express();

app.use(express.static('Public'));
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false })
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/" + "index.html");
})

app.get('/about', function (req, res) {
    res.sendFile(__dirname + "/" + "about.html");
})
app.get('/blog', function (req, res) {
    res.sendFile(__dirname + "/" + "blog.html");
})
app.get('/contact', function (req, res) {
    res.sendFile(__dirname + "/" + "contact.html");
})


app.post('/process_post', urlencodedParser, function (req, res) {
    response = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.listen(3013, () => {
    console.log('Server is running on http://localhost:3001');
});