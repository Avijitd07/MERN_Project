const express = require('express');
const { getAllProducts, createProduct, updateProducts, deleteProduct, getProductDetails } = require('../controllers/productController');

const router = express.Router();

//Get product route
router.route('/products').get(getAllProducts);

//Create product route
router.route('/product/new').post(createProduct);

//Update product route
router.route('/product/:id').put(updateProducts).delete(deleteProduct).get(getProductDetails);



module.exports = router;