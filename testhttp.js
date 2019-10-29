const http = require('http'); // import package http

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});  // mengubah jenis konten yang akan dikirim ke client
    // jenis html kode 200 artinya responnya bagus
    res.write('Hello world!'); // untuk menulis body atau konten yang akan dikirim yaitu hello world
    res.end(); // meghentikan dari end-point tersebut
}).listen(8080); // port aplkasi

console.log('Aplikasi berjalan'); // menampilkan tulisan tersebut di console