const express = require('express');
const cors = require("cors")
const db = require('./connection/db');
const routes = require('./routes/tasks')
require('dotenv').config();
 
const app = express();
const PORT = process.env.PORT || 3001;
 console.log(process.env.MONGO_URI)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
   origin: "http://localhost:3000"
}))
app.use("/api/tasks", routes)

app.get("/", (req,res) => {
  res.send('Home')
})
app.listen(PORT, () => {
  console.log(`🌍 Now listening on localhost:${PORT}`)}
);

