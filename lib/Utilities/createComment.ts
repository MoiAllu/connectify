export default function createComment(url:any,data:{}){
    return fetch(`/api${url}`),{
        method: "POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }
}