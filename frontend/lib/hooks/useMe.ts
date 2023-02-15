import useSWR from "swr";
import fetcher from "../Utilities/fetcher";

export const useMe=()=>{
const {data,error}=useSWR("/me",fetcher)
return{
    user:data,
    isLoading: !data && error,
    isError: error
}
} 