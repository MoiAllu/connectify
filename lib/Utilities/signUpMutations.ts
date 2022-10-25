import signupfetcher from "./signUpfetcher";
export default function singUpAuth(body:{email:string;password:string;name:string;dob:string}){
    return signupfetcher("/signup",body)
}