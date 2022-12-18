require("dotenv").config();

const express = require("express");
const cors = require("cors");
const SequelizeStore = require("connect-session-sequelize");
const { db } = require("./config/Database");
const { dbConnectMySQL } = require("./config/Database");
const session = require("express-session");
const authRoutes = require("./routes/auth");
const usersRoutes = require("./routes/users");

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
  db: db,
});

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

const PORT = process.env.PORT || 8080;
app.use(authRoutes);
app.use(usersRoutes);
app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});

dbConnectMySQL();
