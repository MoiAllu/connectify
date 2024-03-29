export default function conversationHandlerSwr(data:{userId:number}){
    return fetch(`/api/conversations/userconversationswr`,{
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