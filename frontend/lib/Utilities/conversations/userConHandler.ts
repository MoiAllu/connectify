export default function getUserConversationHandler(data:{userId:number}){
    console.log(data)
    return fetch(`/api/conversations/userconversations`,{
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