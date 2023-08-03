//Requerir deendencias
const express = require("express");
const app = express();
const path = require("path");

//app.use(express.static(path.resolve(__dirname, "./public")));
app.use(express.static("public"));

const PORT = process.env.PORT || 3001;

app.listen( PORT, () => console.log(`Server corriendo en el puerto${PORT}`) );

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
})

app.get("/product", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/product.html"))
})

