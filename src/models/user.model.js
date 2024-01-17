import { Schema } from "mongoose";
import mongoose ,{Schema} from "mongoose";
import  Jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const UserSchema = new Schema (
    {
      username : {
        type : string,
        required : true,
        unique : true,
        lowercase : true,
        trim: true,
        index : true,
      },
      email : {
        type : string,
        required : true,
        lowercase : true,
        trim: true,
        
      },
      Fullname : {
        type : string,
        required : true,
        lowercase : true,
        trim: true,
        index : true,
      },
      avtar :{
        type : string ,//clouding url,
        required : true
      },
      coverImage :{
        typr :string //clouding url
      },
      watchhistory :[{
        type : Schema.Type.ObjectId,
        ref :"vedio"
      }],
      password:{
        type : string ,
        required : [true , "Password is required"]
      },
      refreshtoken :{
        type:string,
      }

     } ,{timestamps : true}
)
UserSchema.pre("save" ,async function (next) {
    if(!this.isModified("password")) return next ();
    this.password = bcrypt.hash(this.password,10)
    next()
})

UserSchema.method.isPasswordCorrect = async function (password){
    return await bcrypt.compare(password,this.password)
}
UserSchema.method.generateAccessToken = function() { 
   return jwt.sign({
    _id : this._id,
    email : this.email,
    username : this.username,
    Fullname : this.Fullname
    
},
 process.env.Access_Token_Secert, { expiresIn : process.env.Access_Token_Expiry
 }
)

}
UserSchema.method.generateRefreshToken = function() { 
    return jwt.sign(
      {
     _id : this._id,
      },
     process.env.Access_Token_Secert,
     {
        expiresIn : process.env.Refresh_Token_Expiry
     }
 )
 }


const User = mongoose . model("User" , UserSchema)