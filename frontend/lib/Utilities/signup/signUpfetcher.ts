
export default function signupfetcher(url:string,data:any){
  return fetch(`/api${url}`,{
    method:data? "POST": "GET",
    credentials:"include",
    headers:{
        "Content-Type":"application/json",
    },
    body: JSON.stringify(data),
}).then(res=>{
  return res.json()
})
}