const mongoose =  require('mongoose')
const Schema=mongoose.Schema
const SALT_WORK_FACTOR=10
var crypto = require('crypto')


const UsersS =new mongoose.Schema({
  email: { type: String, required: true, unique: true,lowercase: true,match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i},
  username: { type: String, required: true, unique: true,lowercase: true},
  password:String,
  salt:String,
 

})

UsersS.pre('save',function(next)
{
  if(this.password)
  {
  this.salt=crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(this.password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
    
}
next()
})
UsersS.pre('findOneAndUpdate',function(next)
{
  const user=this.getUpdate()

  console.log('Hello')
  if(user.password)
  {
  user.salt=crypto.randomBytes(16).toString('hex');
  user.password = crypto.pbkdf2Sync(user.password, user.salt,  
    1000, 64, `sha512`).toString(`hex`); 
    
}
else
{
  next()
}
next()
})

UsersS.methods.ComparePassword=function(password)
{
  var newPassword=crypto.pbkdf2Sync(password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
    return this.password==newPassword
    
}
const Users=mongoose.model('Users',UsersS,'users')
module.exports=Users