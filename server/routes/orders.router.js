const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')
const {MAX_STEP} = process.env

const orderModel = require('../models/order.model')

router.get('/:orderNum', async (req,res,next) => {
  try{ 
    const order = await orderModel.findOne({orderNumber: req.params.orderNum})
    res.status(200).json(order)
  }
  catch(error){
    next(error)
  }
})

router.get('/promote_step/:orderNum', async (req,res,next) => {
  try{
    const order = await orderModel.findOne({orderNumber: req.params.orderNum})

    if(order.orderStatus >= MAX_STEP) res.status(200).json(false)
    else{
      order.orderStatus++
      await order.save()
      res.status(200).json(true)
    }
  }
  catch(error){
    next(error)
  }
})

router.post('/new_order', async (req,res,next) => {
  try{
    const newOrder = {
      orderNumber: uuidv1(),
      orderStatus: 1,
      ...req.body
    }
    orderModel.create(newOrder)
  
    res.status(200).json(newOrder)
  }
  catch(error){
    next(error)
  }
})

module.exports = router