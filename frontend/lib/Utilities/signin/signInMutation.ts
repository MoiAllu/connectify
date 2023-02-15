import signInFetcher from "./signInfetcher";

export default function signInAuth(body:{email:string,password:string}){
 return signInFetcher("/signin",body);
}