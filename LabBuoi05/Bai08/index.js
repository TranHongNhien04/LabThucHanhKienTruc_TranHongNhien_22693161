const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "db-server",
    user: "root",
    password: "rootpassword",  
    database: "mydb"     
});

app.get("/", (req, res) => {
    connection.query('SELECT "Kết nối MySQL thành công từ Node.js!" AS message', (err, results) => {
    if (err) {
      res.status(500).send("Lỗi kết nối: " + err.message);
    } else {
      res.send(`<h1>${results[0].message}</h1>`);
    }
  });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})