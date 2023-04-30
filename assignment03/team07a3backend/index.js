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

app.get('/:id', async (req, res) => {
    const query = { _id: req.params.id };

    const product = await Products.find(query);
    console.log(product);
    res.send(product);
});

app.post('/insert', async (req, res) => {
    const parsedProduct = {
        _id: req.body.pid,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        rating: {
            rate: req.body.averageRating,
            count: req.body.ratingCount
        }
    }
    const newProduct = new Products(parsedProduct);
    try {
        await Products.create(newProduct);
        const message = {message: `Product ${newProduct._id} inserted`};
        res.send(message);
    } catch (err) {
        console.log(err);
        res.send(err);
    }
});

app.delete('/delete/:id', async (req, res) => {
    const query = { _id: req.params.id };
    try {
        await Products.deleteOne(query);
        const message = {message: `Product ${req.params.id} deleted`};
        res.send(message);
    } catch (err) {
        console.log(err);
    }
});

const port = process.env.PORT || 4000;
const host =  'localhost';

app.use("/images", express.static(path.join(__dirname, "./images")));

app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
});

