const cloudinary = require('cloudinary')
const dotenv = require('dotenv');

 cloudinary.config({
    cloud_name: 'dpakfvvhu',
    api_key: '584978425819123',
    api_secret: 'Ab3WDXdgBVOh0f6XPan0WyBBXGQ'
});

const Uplaods =  (file:any, folder:any) =>{
   return new Promise(resolve =>{
       cloudinary.uploader.upload(file, (results:any) =>{
           resolve({
               url:results.url,
               imageId:results.public_id
           })
        },{
            resource_type:"auto",
            folder:folder
    
       })
   })

}
const Uplaodprofile =  (file:any, folder:any) =>{
    return new Promise(resolve =>{
        cloudinary.uploader.upload(file, (results:any) =>{
            resolve(
                results.url,
            )
         },{
             resource_type:"auto",
             folder:folder
     
        })
    })
 
 }

const deleteImage =  (file:any, folder:any) =>{
    return new Promise(resolve =>{
        // cloudinary.uploader.upload(file, (results:any) =>{
        //     resolve({
        //         url:results.url,
        //         imageId:results.public_id
        //     })
        //  },{
        //      resource_type:"auto",
        //      folder:folder
     
        // }
        
        // )
    
    })
 
 }

export default{
    Uplaods, deleteImage,Uplaodprofile
  } 
  