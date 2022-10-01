import fetcher from "./fetcher";
const posts =async(url:string)=>{
const response= await fetcher(url);
return response;
}
export default posts;