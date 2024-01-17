import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


          
cloudinary.config({ 
  cloud_name: process.env.Cloud_Name, 
  api_key: process.env.Api_Key, 
  api_secret: process.env.Api_Secret
});

const UploadCloudinary = async (localFilePath ) =>{
    try {
        if(!localFilePath) return null
        //upload form cloudnary 
      const response = await cloudinary.uploader.upload(localFilePath,{
              resource_type : 'auto',
        })
        //file upload successfully 
        console.log("File are upload successfylly ",response.url)
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove the locally saved tempory files as the operstion got failed
        
    }
}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });

  export {localFilePath}