const mongoose = require("mongoose");

const productschema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Product Name"]
       
    }
    /*
  description:{
        type:String,
        requried:[true,"Please Enter Description"]
    r
    },
    price:{
        type:Number,
        required:[true,"Please Enter Price"],
        maxLength:[8, "Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        defult:0
    },
    images:[
        {
        public_id:{
            type:String,
            required:true
        },
       url:{
        type:String,
        required:true
       } 
    }
    ],
    categrory:{
        type:String,
        required:[true,"Please Enter Product Category"]

    },
    Stock:{
        type:Number,
        required:[true,"Please Enter Product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
   reviews:[
        {
            name:{
                type:String,
                required:true,
            },
            rating:{
                type:Number,
                required:true,

            },
            comment:{
        type:String,
        reqired :true
            }
        }
    ],
    createdAt:{
        type:Date,
        default:Date.now
    }
    */

})
module.exports= mongoose.model("Product", productschema)