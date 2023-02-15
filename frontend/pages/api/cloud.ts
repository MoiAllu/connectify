import cloudinary from "../../cloudinary";
export default async(req:any,res:any)=>{
        try{ 
                const {images} = req.body;
                console.log(images)
                if(!images){
                        res.status(403)
                        res.json({ error: 'file is empty'})
                        return
                }else{
                        // const uploadedImgs = images.map(async (image:any)=>{
                        //  const upload =  await cloudinary.uploader.upload(image,
                        //       { 
                        //         upload_preset: 'unsigned_upload',
                        //         allowed_formats : ['png', 'jpg', 'jpeg', 'svg', 'ico', 'jfif', 'webp'],
                        //     }, 
                        //       function(error:any, result:any) {
                        //           if(error){
                        //               console.log(error)
                        //           }
                        //            });
                        //   return upload
                        // })
                }
            }catch(e){
                res.status(501)
                res.json({ error: 'Opps something went wrong'})
                return
            }
        
};
