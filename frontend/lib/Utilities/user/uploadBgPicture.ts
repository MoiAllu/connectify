const UploadBgPicture=(data:{user:any,pictureUrl:any})=>{
    return fetch("/api/uploadbackgroundpicture",{
        method:"PUT",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    })
    }
    export default UploadBgPicture