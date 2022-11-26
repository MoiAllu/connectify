const uploadToCloudinary= async(formData:any)=>{
    
    const res= await fetch('https://api.cloudinary.com/v1_1/doiif4p0p/image/upload', {
        method: 'POST',
        body: formData
    }).then(r => r.json());
    return res
}
export default uploadToCloudinary