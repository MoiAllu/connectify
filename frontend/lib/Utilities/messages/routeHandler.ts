export default function routeHandler(data:{currentUserId:number, userId:number, conversationId:number, message:string, image:string}){
    console.log(data);
    return fetch(`/api/messages/route`,{
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