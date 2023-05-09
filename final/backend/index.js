const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {Products, Sellers} = require('./dataSchema.js');
const app = express();
const path = require("path");

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/finaldata',
    {
        dbName: 'finaldata',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

app.post('/insert', async (req, res) => {
    const parsedProduct = {
        _id: req.body.pid,
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        seller_id: req.body.seller_id,
        category: req.body.category,
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

app.delete('/delete', async (req, res) => {
    const query = { _id: req.body.pid };
    try {
        await Products.deleteOne(query);
        const message = {message: `Product ${query._id} deleted`};
        res.send(message)
    } catch (err) {
        console.log(err);
        res.send(err)
    }
})

app.get('/products', async (req, res) => {
    const query = {};

    const allProducts = await Products.find(query);
    res.send(allProducts);
});

app.get('/product/:id', async (req, res) => {
    const query = { _id: req.params.id };

    try {
        const product = await Products.find(query);
        res.send(product)
    } catch (err) {
        res.send(err)
    }
});

app.put('/update', async (req, res) => {
    const query = { _id: req.body.pid };
    const parsedProduct = { $set: {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        seller_id: req.body.seller_id,
        category: req.body.category
    }}
    console.log(parsedProduct)
    try {
        await Products.updateOne(query, parsedProduct);
        const message = {message: `Product ${req.body.pid} updated`};
        console.log(message)
        res.send(message);
    } catch (err) {
        console.log(err);
    }
});

app.get('/sellers', async (req, res) => {
    const query = {};

    const allProducts = await Sellers.find(query);
    res.send(allProducts);
});

// app.get('/:id', async (req, res) => {
//     const query = { _id: req.params.id };

//     const product = await Products.find(query);
//     console.log(product);
//     res.send(product);
// });

// app.post('/insert', async (req, res) => {
//     const parsedProduct = {
//         _id: req.body.pid,
//         title: req.body.title,
//         price: req.body.price,
//         description: req.body.description,
//         category: req.body.category,
//         image: req.body.image,
//         rating: {
//             rate: req.body.averageRating,
//             count: req.body.ratingCount
//         }
//     }
//     const newProduct = new Products(parsedProduct);
//     try {
//         await Products.create(newProduct);
//         const message = {message: `Product ${newProduct._id} inserted`};
//         res.send(message);
//     } catch (err) {
//         console.log(err);
//         res.send(err);
//     }
// });

// app.put('/update/:id', async (req, res) => {
//     const query = { _id: req.params.id };
//     const parsedProduct = { $set: {
//         title: req.body.title,
//         price: req.body.price,
//         description: req.body.description,
//         category: req.body.category,
//         image: req.body.image,
//         rating: {
//             rate: req.body.averageRating,
//             count: req.body.ratingCount
//         }
//     }}
//     console.log(parsedProduct)
//     try {
//         await Products.updateOne(query, parsedProduct);
//         const message = {message: `Product ${req.params.id} updated`};
//         console.log(message)
//         res.send(message);
//     } catch (err) {
//         console.log(err);
//     }
// });

// app.delete('/delete/:id', async (req, res) => {
//     const query = { _id: req.params.id };
//     try {
//         await Products.deleteOne(query);
//         const message = {message: `Product ${req.params.id} deleted`};
//         res.send(message);
//     } catch (err) {
//         console.log(err);
//     }
// });

const port = process.env.PORT || 4000;
const host =  'localhost';

app.use("/images", express.static(path.join(__dirname, "./images")));

app.listen(port, () => {
    console.log(`App listening at http://${host}:${port}`);
});

