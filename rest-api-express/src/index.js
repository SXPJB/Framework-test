const express=require('express')
const morgan=require('morgan')
const app=express()
const cors = require('cors')
const userRouter=require('./routes/user')

//settings
app.set('port',process.env.PORT || 3000)
app.set('json spaces',2)

//midelware
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())
//Route
app.use('/user',userRouter)

//start Server
app.listen(app.get('port'),()=>console.log('Server on port: ',app.get('port')))
