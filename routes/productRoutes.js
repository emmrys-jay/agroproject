const express = require("express");
const router = express.Router();
const { 
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
} = require("../controllers/productControllers")

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct);


module.exports = router