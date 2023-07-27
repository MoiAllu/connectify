export default function deletePost(url:any,data:{postId:any,userId:any,postUserId:any}){
    return fetch(`/api${url}`,{
        method: 'POST',
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }).then((res) => {
        return res.json()
      })
}