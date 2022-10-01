import useSWR from "swr";
import fetcher from "../Utilities/fetcher";

export const usePost=()=>{
const {data,error}=useSWR("/userposts",fetcher)
return{
    posts:data,
    isLoading: !data && error,
    isError: error
}
} 
export const useAllPosts=()=>{
    const {data,error}=useSWR("/allposts",fetcher)
    return{
        posts:data,
        isLoading: !data && error,
        isError: error
    };
}