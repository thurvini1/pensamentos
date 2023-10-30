const express = require("express");
const router = require("./routes");
const handlbars = require("express-handlebars");
const { response, request } = require("express");

require("./database/index");

const app = express();
app.use(express.json());

// importa engine handlebars
app.engine('handlbars', exphbs.engine());
app.set('view engine', 'handlebars');

app.set("views", path)

app.listen(3333, console.log("Servidor está sendo executando na porta 3333"));