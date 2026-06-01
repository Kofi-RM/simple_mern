const express = require('express');
const cors = require("cors")
const db = require('./connection/db');
const routes = require('./routes/tasks')
require('dotenv').config();
 
const app = express();
const PORT = process.env.PORT || 3001;
 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
   origin: "http://localhost:3001"
}))
app.use("/api/tasks", routes)

app.listen(PORT, () => {
  console.log(`🌍 Now listening on localhost:${PORT}`)}
);

