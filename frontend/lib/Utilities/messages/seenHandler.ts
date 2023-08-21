export default function seenHandler(data:{userId:number, conversationId:number}){
    return fetch(`/api/messages/seen`,{
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