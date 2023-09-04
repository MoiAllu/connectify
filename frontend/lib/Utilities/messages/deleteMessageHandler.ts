export default function deleteMessageHandler(data:{messageId:Number,userId:number, conversationId:number, }){
    return fetch(`/api/messages/deletemessage`,{
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