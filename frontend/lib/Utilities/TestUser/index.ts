export default function testUserSignIn(data:any){
    return fetch(`/api/signin`,{
        method:data? "POST": "GET",
        credentials:"include",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    }).then(res=>{
        return res.json();
    })
}