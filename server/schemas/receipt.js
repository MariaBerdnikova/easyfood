const mongoose =  require('mongoose')
const Schema=mongoose.Schema
const Ingr=require('../schemas/ingredient')

const JustTitle=new Schema
({
_id :Schema.Types.ObjectId,
  email:{ type: String, required: true, unique: true,lowercase: true,match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i},

  title:String,
  type:String,
  ingradient:
  [
{
  nameOfIngradient:String,
amount:String,



typeOfAmount:String
}

  ],
 
  reciept:[
    {
      paragraph:String,
    
    }
    
      ]


 
})




const Receipt=mongoose.model('Rtitle',JustTitle,'rtitle')

module.exports=Receipt
