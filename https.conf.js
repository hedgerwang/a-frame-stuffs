// # HTTPS

// https://github.com/FiloSottile/mkcert
// https://ithelp.ithome.com.tw/articles/10230052

// $ mkcert --install
// $ mkcert localhost 

// /localhost.pem
// /localhost-key.pem
// The file `localhost.pem` and `localhost-key.pem` should be generated locally
// to enable HTTPS connection.


var fs = require("fs");
 
module.exports = {
  cert: fs.readFileSync(__dirname + "/localhost.pem"),
  key: fs.readFileSync(__dirname + "/localhost-key.pem"),
  passphrase: "12345"
};