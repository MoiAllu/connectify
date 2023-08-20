export default function getHandler(data:{user:any,userId:number, conversationId:number}){
    console.log(data);
    return fetch(`/api/messages/get`,{
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