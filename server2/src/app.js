const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes");
const session = require("express-session");
const errorMiddleware = require("./middlewares/errorMiddleware");

app.use(cors(require("./config/corsConfig")));
app.use(session(require("./config/sessionConfig")));
app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

module.exports = app;