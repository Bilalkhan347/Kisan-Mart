const express = require("express");
const { getAllproducts,createProduct, updateProduct, deleteProduct, getProductDetails } = require("../controllers/productcontroller");

const router = express.Router();

 router.route("/products").get(getAllproducts);
router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/products/:id").get(getProductDetails);

module.exports = router 