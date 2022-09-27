export default function createPost(url:any,data:{content:string;user:any}){
    return fetch(`/api${url}`),{
        method: "POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }
}