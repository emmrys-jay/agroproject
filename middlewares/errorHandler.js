const errorHandler = (err,req,res,next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case 400:
            res.json({
                title: "Validation Error", 
                message: err.message, 
            });
            break;
        case 404:
            res.json({
                title: "Not Found", 
                message: err.message, 
            });
            break;
        case 500:
            res.json({
                title: "Server Error", 
                message: err.message, 
            });
            break;
        default:
            console.log("No Error, All good!");
            break;
    }
};

module.exports = errorHandler;