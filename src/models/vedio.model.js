import mongoose ,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const vedioSchema = new Schema(
    {
     vediofile :{
        type : String,
        required : true,
     },
     thumbnail :{
        type :String,
        required : true
     },
     title :{
        type : String,
        required : true,
     },
     Discription :{
        type : String,
        required : true,
     },
    duration :{
        type : Number,
        required : true,
     },
     View :{
        type : Number,
        default : 0
     },
     isPublish:{
        type :Boolean,
        default : true
     },
     vedioOner :{
        type : Schema.Types.ObjectId,
        ref : "user"
     }
     
     
} ,{timestamps : true}
)

vedioSchema.plugin(mongooseAggregatePaginate)
const Vedio  =  mongoose.model("Vedio",vedioSchema)