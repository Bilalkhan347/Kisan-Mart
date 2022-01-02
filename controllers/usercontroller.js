const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password } = req.body;

const user = await user.create({
  name,
  email,
  password
});
res.status(200).json({
    success: true,
   user,
  });
});