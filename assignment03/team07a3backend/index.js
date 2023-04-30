const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Products = require('./dataSchema');
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/reactdata',
    {
        dbName: 'reactdata',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.get('/', async (req, res) => {
    const query = {};

    const allProducts = await Products.find(query);
    console.log(allProducts);
    res.send(allProducts);
});

const port = process.env.PORT || 4000;
const host =  'localhost';

app.use("/images", express.static(path.join(__dirname, "./images")));

app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
});

