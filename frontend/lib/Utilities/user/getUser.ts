export default function getUser(data:{userId:any}){
    return fetch(`/api/user/getuser`,{
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