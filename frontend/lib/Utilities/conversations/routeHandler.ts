export default function routeHandler(data:{currentUserId:number,members:any, isGroup : boolean, userId:number, name:string}){
    console.log(data);
    return fetch(`/api/conversations/route`,{
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