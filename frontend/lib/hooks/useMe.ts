import useSWR from "swr";
import fetcher from "../Utilities/fetcher";
import getUser from "../Utilities/user/getUser";
import conversationHandlerSwr from "../Utilities/conversations/conversationHandlerSwr";
import { useEffect } from "react";
const {useState}=require("react")

export const useMe=()=>{
const {data,error}=useSWR("/me",fetcher)
return{
    user:data,
    isLoading: !data && error,
    isError: error
}
} 
export const useAllUsers=()=>{
    const {data,error}=useSWR("/allusers",fetcher)
    return{
        users:data,
        isLoading:!data && !error,
        isError:error
    };
}
export const useGetUser=(userId:Number)=>{
    const {data,error}=useSWR(userId,getUser)
    return{
        user:data,
        isLoading:!data && !error,
        isError:error
    };

}
export const useGetUserConversations=(userId:any)=>{
    const [allConversations,setAllConversations]=useState([])
    const [countUnseenMessages,setCountUnseenMessages]=useState(0)
    const {data,error}=useSWR(userId,conversationHandlerSwr);

    useEffect(()=>{
        if(data){
            setCountUnseenMessages(0)
            setAllConversations(data)
            allConversations.map((conversation:any)=>{
                if(!conversation.message[conversation.message.length-1]?.users.map((user:any)=>user.id).includes(userId) && conversation.message[conversation.message.length-1]?.senderId!==userId)
                {
                    setCountUnseenMessages(countUnseenMessages+1)  
                }
                return
            })
        }
    },[userId,data])
    
    return{
        conversations:data,
        allConversations:allConversations,
        setAllConversations:setAllConversations,
        isLoading:!data && !error,
        isError:error,
        countUnseenMessages:countUnseenMessages
    };
}
