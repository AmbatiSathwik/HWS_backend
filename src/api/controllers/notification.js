const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { notification } = require("../models/notification");

const bcrypt = require('bcryptjs');



 
 

const uploadNotification= catchAsync(async (req, res) => {
  const body = req.body;
  const data = await notification.create({
      url: body.url,
      name: body.name,
  },
  );
  console.log(data)
  return data
});

const getNotification = catchAsync(async (req, res) => {
  const data = await notification.findAll({order: [['createdAt', 'DESC']]});
  res.status(200).json({
      data: data,
      
  });
  console.log(data)
  
});

const deleteNotification = catchAsync(async (req, res) => {
    const data = await notification.destroy({
        where: {
            url: req.body.url,
        }
    });
    if(data) res.status(200).json({message: "successfully deleted"});
    else res.status(401).json({err: "notification with that id not exists"});
});


module.exports={
    uploadNotification,
    getNotification,
    deleteNotification

}