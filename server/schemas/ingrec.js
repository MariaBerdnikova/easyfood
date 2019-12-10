const mongoose =  require('mongoose')
const Schema=mongoose.Schema

const IngedientsRec=new Schema
({
_id :Schema.Types.ObjectId,
ingradient:{type:Schema.Types.ObjectId, ref:'Ingradients'},
recepts:{type:Schema.Types.ObjectId, ref:'Receipt'},
amount:String


});


const ingredient=mongoose.model('IngRec',IngedientsRec)

module.exports=ingredient