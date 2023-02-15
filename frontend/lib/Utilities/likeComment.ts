export default function likeComment(data:{commentId:any,postId:any,userId:any,}){
    return fetch(`/api/likecomment`,{
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