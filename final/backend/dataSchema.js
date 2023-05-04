const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    _id: {type: Number},
    title: {type: String},
    price: {type: Number},
    description: {type: String},
    image: {type: String},
    seller_id: {type: Number},
}, {collection: 'product_catalog'});

const sellerSchema = new mongoose.Schema({
    _id: {type: Number},
    location: {type: String},
    title: {type: String},
    description: {type: String},
    image: {type: String},
}, {collection: 'seller_catalog'})

const Products = mongoose.model('product_catalog', productSchema);
const Sellers = mongoose.model('seller_catalog', sellerSchema);
module.exports = {Products, Sellers}