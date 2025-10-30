const express=require("express");
const app = express();
const cors=require("cors");
const port = 3001;
const host = "localhost";
const mongoose = require('mongoose');
const router = require("./router");

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

const uri = 'mongodb+srv://rems:Rems@cluster0.qsmlqvs.mongodb.net/emsDB';

const connect = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    }
    catch(error) {
        console.error('MongoDB Error: ', error);
    }
};

connect(); /*call above connect function*/

const server = app.listen(port, host, function () {
    console.log(`Node server is listening on http://${host}:${port}`);
});

app.use("/api", router);