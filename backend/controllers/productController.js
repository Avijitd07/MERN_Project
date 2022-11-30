const Product = require('../models/productModel');
const ErrorHandler = require("../utils/errorhandler");
const cacheAsyncErrors = require("../middleware/cacheAsyncErrors");
const ApiFeatures = require('../utils/apifeatures');


//Create Product----> Admin
exports.createProduct = cacheAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({ success: true, product });
});

//Get All Product
exports.getAllProducts = cacheAsyncErrors(async (req, res) => {

    const resultPerPage = 5;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);
    const products = await apiFeature.query;

    res.status(200).json({ success: true, products });
});

//Get Product Details
exports.getProductDetails = cacheAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);
    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    res.status(200).json({ success: true, product, productCount });

});

//Update Product----> Admin
exports.updateProducts = cacheAsyncErrors(async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, usefindAndModify: false })

    res.status(200).json({ success: true, product });
});

//Remove Product----> Admin
exports.deleteProduct = cacheAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler('Product not found', 404));
    }

    await Product.remove();

    res.status(200).json({ success: true, message: 'Product delete successfully' });
});

