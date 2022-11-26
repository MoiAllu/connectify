const UploadProfileUrl=(data:{user:any,pictureUrl:any})=>{
    console.log(data.pictureUrl)
return fetch("/api/uploadprofilepicture",{
    method:"PUT",
    credentials:"include",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify(data),
})
}
export default UploadProfileUrl