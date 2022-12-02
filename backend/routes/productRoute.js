const express = require('express');
const { getAllProducts, createProduct, updateProducts, deleteProduct, getProductDetails, createProductReview, deleteReview, getProductReviews } = require('../controllers/productController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

//Get product route
router.route('/products').get(getAllProducts);

//Create product route
router.route('/admin/product/new').post(isAuthenticatedUser, authorizeRoles('admin'), createProduct);

//Update product route
router.route('/admin/product/:id').put(isAuthenticatedUser, authorizeRoles('admin'), updateProducts).delete(isAuthenticatedUser, authorizeRoles('admin'), deleteProduct);

// Get product details
router.route('/product/:id').get(getProductDetails);

// Review
router.route('/review').put(isAuthenticatedUser, createProductReview).get(getProductReviews).delete(isAuthenticatedUser, deleteReview);


module.exports = router;