const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const connectDb = require("./config/dbConnection");
const dotenv = require("dotenv").config();
const cors = require("cors")

app = express();
connectDb();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/api/products", require("./routes/productRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});