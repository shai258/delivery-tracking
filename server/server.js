require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const ordersRouter = require('./routes/orders.router')

const {API_PORT, API_HOST} = process.env

const db = require('./db/mongoose.connection')
const app = express()

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/orders', ordersRouter)

app.get('/', (req,res,next) => {
  try{ 
    res.status(200).send('<h1>This is Server Side</h1>')
  }
  catch(error){
    next(error)
  }
})

//Error Handeler
app.use((err,req,res,next) => {
  console.log(err)
  next(err)
})
app.use((err,req,res,next) => {
  res.status(500).json({error:err.message,stack:err.stack})
})

app.get('*', (req,res) => {
  res.status(404).send('NOTHING HAS BEEN FOUND')
})

db.connect()

app.listen(API_PORT, API_HOST, (error) => {
  if(error) console.log(error)
  else console.log('Server has started at port 3030')
})