const mongoose =  require('mongoose')
const Schema=mongoose.Schema

const Ingedients=new Schema
({
_id :Schema.Types.ObjectId,
 
name:String,
amount:String,
typeOfAmount:String


});


const ingredient=mongoose.model('Ingradients',Ingedients)

module.exports=ingredient