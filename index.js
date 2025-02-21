const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { resolve } = require('path');

const app = express();
dotenv.config();
const port = process.env.PORT;


app.use(express.static('static'));

let connect=mongoose.connect("mongodb+srv://poluriraghavas81:gflir33yGuUFolT2@cluster0.30lgl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("connected to mongodb"))
.catch((err)=>console.log("error",err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
