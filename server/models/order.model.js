const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
  country: String,
  city: String,
  street: String,
  number: Number
})

const CustomerSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  address: AddressSchema
})

const ProviderSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
  address: AddressSchema
})

const orderSchema = new Schema({
  orderNumber: String,
  orderStatus: Number,
  title: String,
  description: String,
  imgUrl: String,
  price: Number,
  customer: CustomerSchema,
  provider: ProviderSchema
})

const orderModel = mongoose.model('orders', orderSchema)

module.exports = orderModel