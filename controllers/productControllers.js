const asyncHandler = require("express-async-handler");
const Product = require("../models/productModels");

//@desc Get all products
//@route GET /api/products
const getProducts = asyncHandler(async (req,res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

//@desc Create new product
//@route POST /api/products
const createProduct = asyncHandler(async (req,res) => {
    console.log("The request body is : ", req.body);
    const {image_url, name, category, price, rating} = req.body;
    if (!image_url || !name || !category || !price || !rating) {
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const product = await Product.create({
        name,
        image_url,
        category,
        rating,
        price,
    })
    res.status(200).json(product);
});

//@desc Get a product
//@route GET /api/products/:id
const getProduct = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("Product not found");
    }
    res.status(200).json(product);
});

//@desc Update a product
//@route PUT /api/products/:id
const updateProduct = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(400);
        throw new Error("Product not found");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedProduct);
});

//@desc Delete a product
//@route DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req,res) => {
    // const product = await Product.findById(req.params.id);
    // if (!product) {
       
    // };

    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
        res.status(400);
        throw new Error("Product not found");
    }
    res.status(200).json(deletedProduct);
});

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
};