const ProductItems = require("../controller/Product.controller");
const { isAuthenticated, checkAdminOrSeller } = require("../Middlewares/Authentication.Validation");
const { ValidateCreate, UpdateValidator, DeleteValidator} = require("../Middlewares/validators");
const routes = (app)=>{
    app.get("/ecomm/Product/HomePage",ProductItems.getMetoHomePage);
    app.get("/ecomm/Product/getallProduct",ProductItems.getallProduct);
    app.get("/ecomm/Product/getallProduct/:categoryId",ProductItems.getallProductBycategoryId);
    app.get("/ecomm/Product/getallProductByName/:name",ProductItems.getByName);
    app.get("/ecomm/Product/between",ProductItems.getProductDataOfRange);
    app.post("/ecomm/Product/CreateProductData",isAuthenticated,checkAdminOrSeller,ValidateCreate,ProductItems.CreateProduct);
    app.put("/ecomm/Product/UpdateProductData",isAuthenticated,checkAdminOrSeller,UpdateValidator,ProductItems.UpdateProduct);
    app.delete("/ecomm/Product/DeleteProduct",isAuthenticated,checkAdminOrSeller,DeleteValidator,ProductItems.DeleteProductContent);
    
}

module.exports = routes;