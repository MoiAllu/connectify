export default function routeHandler(data:{userId:number, friendId:number}){
    return fetch(`/api/friends/route`,{
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