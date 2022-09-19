const {getAllProductsdata , CreateProductData ,UpdateProductData, DeleteProduct , getAllProductsdataByCategoryId,getallProductByName, getBetweenData} = require("../services/Product.service")
 const getallProduct = async(req,res)=>{
    const response = await getAllProductsdata()
    return res.json({
        message : "Fetching All data Successfully",
        status : 201,
        sucess :true,
        Data : response
    })
}
const CreateProduct = async(req,res)=>{
    const response = await CreateProductData(req.body);
    return res.json({
        message : "Created Data Successfully ",
        status : 201,
        sucess :true,
        Data : response
    })
}
const UpdateProduct = async(req,res)=>{
    const response = await UpdateProductData(req.body);
    return res.json({
        message : "Updated Data Successfully ",
        status : 201,
        sucess :true,
        Data : response
    })
}
const getMetoHomePage = (req,res)=>{
  return  res.send("Welcome To Our Home Page");
}
const DeleteProductContent = async(req,res)=>{
    const response = await DeleteProduct(req.body);
    return res.json({
        massage : "data is successfully Deleted",
        sucess : true,
        code:201,
        data : response
    })
}
const getallProductBycategoryId = async(req,res)=>{
    const response = await getAllProductsdataByCategoryId(req.params);
        return res.json({
            message : "Fetching All data Successfully By category_ID",
            status : 201,
            sucess :true,
            Data : response
        })
}
const getByName = async(req,res)=>{
    const response = await getallProductByName(req.params)
    return res.json({
        message : "Fetching All data Successfully By name",
        status : 201,
        sucess :true,
        Data : response
    })
}
const getProductDataOfRange = async(req,res)=>{
    const response = await getBetweenData(req.body);
    return res.json({
        message : "Fetching All data Successfully In Between",
        status : 201,
        sucess :true,
        data : response
    })
}
module.exports = { 
    getallProduct ,CreateProduct , UpdateProduct,getMetoHomePage, DeleteProductContent , getallProductBycategoryId , getByName ,getProductDataOfRange
}