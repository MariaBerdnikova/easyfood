const express=require('express')
const jwt=require('jsonwebtoken')
const router=express.Router()
const mongoose =  require('mongoose')
const dburl="mongodb://localhost:27017/usersdb"
const Users=require('../schemas/useres')
const UR=require('../schemas/receipt')
const Ingr=require('../schemas/ingredient')
const IngrRec=require('../schemas/ingrec')
const cors=require('cors')
const app=express()

app.use(cors());
app.options('*',cors())
var ObjectId = mongoose.Types.ObjectId;
mongoose.Promise=Promise

//server 
mongoose.connect(dburl,err=>{
    if(err)
    {
        console.error('Error'+err)
    }
    else
    {
        console.log('okni')
    }
} )
router.get('/',(req,res)=>{
res.send('From API route')
})

//verification
function verify(res,req,next)
{
let token=req.headers.authorization
let payload=jwt.verify(token.split(' ')[1],'username')
if(!token)
{
  return res.status(401).send("Unauthorized Reqest 1")
}
if(token.split(' ')[1]==='null')
{
  return res.status(401).send("Unauthorized Reqest 2")
}
req.user._id=payload.subject
next()
}//end verification


//registartion
router.post('/registration',(req,res)=>{
let userData=req.body


//ensure email and username aren't existing
var username=userData.username
var email=userData.email


Users.find({$or:[{email:email},{username:username}]},function(error,user){
    if(error)
    {
       console.log('This is '+error)
    }else  if (user.length!=0){
        if(user[0].email==email)
        {
   res.status(400).send('Email already exists') 
        }//email exists
        else{
            res.status(400).send('Username already exists') 
       }
    }//end else if

   else
   {
    let user=new Users(userData)
    user.save((error,registeredUser)=>{
        if(error)
       {   console.log(userData)

          console.log(error)
       }
       else{
         
        let payload={ subject:user.id}
        let token=jwt.sign(payload,"username")
     res.status(200).send({token})
     localStorage.setItem('User',)
       }
       })
       
   }//end else


})//end reg


    })

 

//login
router.post('/login',(req,res)=>{
    let userData=req.body
  
    Users.findOne({email:userData.email},(error,user)=>{
     if(error)
     {
        console.log(error)
     }else 
         if
             (!user){
            res.status(401).send('User does not exist') 
            }else
             if(!user.ComparePassword(userData.password)){

                 res.status(401).send('Invalid Password') 
             }else
            
                {
                  //Console.log(user)
                   let payload={ subject:user.id}
                    let token=jwt.sign(payload,"username")
                // res.status(200).send(JSON.stringify(user)) 
               //localStorage.setItem('token',{token}) 
 
                // this.router.navigate()  
               //  return user
                
               res.status(200).send(user) 
             }
     
    })
    })
  
 router.post("/RestorePassword",(req,res)=>
 {
let userData=req.body
var  query={email:userData.email}
Users.findOneAndUpdate(query,{password:userData.password}, function(error,user){
    if(error)
    {
       console.log('This is '+error)
    }else  if (!user){
      
   res.status(200).send('Email does not exist') 
        
        
    }//end else if
    else
    {
        res.status(400).send('Password is updated') 
    }

 
 })
})
//------------------------------------------receipt------------------------------------------------------------------------------
router.post("/addIngradient",(req,res)=>
 {
let userData=req.body
//UR.findById()
//var  query={email:userData.email}
console.log(userData.email)

var Rec=new UR(
{
_id: new mongoose.Types.ObjectId(),
 email:userData.email,
 title:userData.title,
 
 type:userData.type,
 ingradient:userData.ingr,
 reciept:userData.content

});

//Rec.ingradient.push());
//


Rec.save((error,registeredUser)=>{
    if(error)
   {
      console.log(error)
   }
   else{
        res.status(200).send(registeredUser)
    }
   })
   //return _id;
    })//addRecept
    
   


 router.post("/addTitle",(req,res)=>
 {
let userData=req.body
//var  query={email:userData.email}

var Rec=new UR(
{
_id: new mongoose.Types.ObjectId(),
 email:userData.email,
 title:userData.title,
 
 type:userData.type,
 ingradient:userData.Ingr
//
})

Rec.save((error,registeredUser)=>{
    if(error)
   {
      console.log(error)
   }
   else{
        res.status(200).send(registeredUser)
    }
   })
   //return _id;
    })//addRecept
    
    router.get('/user',(req,res)=>{
      let userData=req.body
   

   
    })
    

    
  
    router.get("/addIngradient",(req,res)=>
    {
   let userData=req.body
   //var  query={email:userData.email}
   const ing=new Ingr(
    {
    _id: new mongoose.Types.ObjectId(),
    name:userData.name,
    
   
  //  rec_id:userData._id
    })
   
   
  ing.save((error,ing)=>{
       if(error)
      {
         console.log(error)
      }
      else{
           res.status(200).send(ing)
       }
      })
      return _id;
   
       })//addIngradient
    
   
       router.get("/receipt",(req,res)=>
       {
     
       Ingr.find()
       .exec()
       .then(fnd=>
           {
               res.status(200).json(fnd);
           })
       .catch(err=>{
         res.status(400).json(err);

          }) 
       
      
      
          })//getReceip
          
          router.post("/addInradientIntoReceipt",(req,res)=>
          {
         let userData=req.body
        
         const IR=new  IngrRec(
          {
          _id: new mongoose.Types.ObjectId(),
          ingradient:userData.ingradient,
          recepts:userData.recepts,
          amount:userData.amount
          
      
        //  rec_id:userData._id
          })
         
         
        IR.save((error,ing)=>{
             if(error)
            {
               console.log(error)
            }
            else{
                 res.status(200).send(ing)
             }
            })
         
         
             })//addIngradient
          
             router.get("/ingr",(req,res)=>
             {
           
             Ingr.find()
             .exec()
             .then(fnd=>
                 {
                     res.status(200).json(fnd);
                 })
             .catch(err=>{
               res.status(400).json(err);
      
                }) 
             
            
            
                })//getingr
                router.get("/sngl/:id",(req,res)=>
       {
        let userData=req.params
        console.log(userData)
        UR.findById({_id:(userData.id)})
       .exec()
       .then(fnd=>
           {
               res.status(200).json(fnd);
           })
       .catch(err=>{
         res.status(400).json(err);

          }) 
       
      
      
          })//getReceip


          router.get("/all",(req,res)=>
          {
        
          UR.find()
          .exec()
          .then(fnd=>
              {
                  res.status(200).json(fnd);
              })
          .catch(err=>{
            res.status(400).json(err);
   
             }) 
          
         
         
             })//getingr


             router.get("/all/:type",(req,res)=>
             {
              let userData=req.params
              console.log('meat '+userData.type)
              UR.find({type:userData.type})
             .exec()
             .then(fnd=>
                 {
                     res.status(200).json(fnd);
                 })
             .catch(err=>{
               res.status(400).json(err);
      
                }) 
             
            
            
                })//getReceip
      
       module.exports=router




