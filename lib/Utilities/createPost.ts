export default function createPost(url:any,data:{content:string}){
    return fetch(`/api${url}`),{
        method: "POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }
}