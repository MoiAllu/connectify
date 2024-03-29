export default function createComment(url:any,data:{userId:any,postId:any,message:string,parentId:any}){

    return fetch(`/api${url}`,{
        method: "POST",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => {
        return res.json()
      })
}