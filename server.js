const express = require('express'); // import package express
const app = express(); // membuat var app yang berisi express
const port = 8080; // port aplikasi

app.set('view engine', 'ejs'); // menggunakan view enggine ejs
app.use(express.static('public')); // menggunakan express sebagai file static

app.get('/', function(req, res) {
    res.render('index.ejs'); // membuat end-point '/' yang nanti akan menampilkan index.ejs
});

app.listen(port, function() {
    console.log(`Server di ${port}`); // menampilkan pesan server berjalan pada port di console
});