import { validateRoute } from "../../lib/Utilities/auth";

export default validateRoute((req:any,res:any,user:any)=>{
    res.json(user);
})