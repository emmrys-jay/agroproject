const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please add the product name"],
        },
        image: {
            type: String,
            required: [true, "Please add the product's image"],
        },
        category: {
            type: String,
            required: [true, "Please add the product category"],
        },
        rating: {
            type: Number,
            required: [false],
        },
        price: {
            type: Number,
            required: [true, "Please add the product price"],
        },
        
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Product", productSchema);