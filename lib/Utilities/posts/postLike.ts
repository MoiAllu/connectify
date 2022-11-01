export default function likePost(data:{postId:any,userId:any,}){
    return fetch(`/api/likepost`,{
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