export default function converastionHandler(data:{conversationId:number,userId:number}){
    return fetch(`/api/conversations/conversation`,{
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