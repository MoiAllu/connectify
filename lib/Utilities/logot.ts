export default function logout(){
    return fetch(`/api$/logout`,{
        method:"GET",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
    })
}