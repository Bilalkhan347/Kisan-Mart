const Product = require("../models/productmodels");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const catchAsyncError = require("../middleware/catchAsyncError");
const ApiFeatures = require("../utils/apifeatures");
const { query } = require("express");
//create admin moule
//create produc
exports.createProduct = catchAsyncError(async  (req,res,next)=>{
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    });

    });


//GET all product
exports.getAllproducts =  catchAsyncError (async(req,res)=>{
  const apifeatures= new  ApiFeatures(Product.find(),req,query).search()
  
    const products =await apifeatures.query;
    res.status(200).json({
        success:true,
        products
    })
});

//get product details

exports.getProductDetails =  catchAsyncError(async(req,res,next)=>
{
    const products =await Product.findById(req.params.id);
    if(!product){
        return next(new Errorhandler("Product not found",404));
    }
    await product.remove();
    res.status(200).json({
        success:true,
     product
    })
});
//update product  -- admin
exports.updateProduct =  catchAsyncError (async (req,res,next)=>{
    let product = Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id.req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
});
//delete product
exports.deleteProduct = catchAsyncError(async (req,res,next)=>{
    const product =await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    await product.remove();
    res.status(200).json({
        success:true,
    message:"product deleted"
    })
});