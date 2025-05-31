import { Webhook } from "svix";
import User from "../Models/User.js";

const clerWebhooks = async (req ,res)=>{
    try {
        //  create a svix
        const whook = new Webhook(process.env.CLERK_WEBHOOK-SEC)

        // geeying headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"]
        }
        // verifing headers
        await whook.verify(JSON.stringify(Request.body), headers)
        // geetinh data
        const {data ,type}  =req.body
        const userdata= {
            _id:data.id,
            email:data.email_addresses[0].email_address,
            username : data.first_name +""+ data.last_name,
            image : data.image_Url
        }
        console.log(data);
        
        // swich 

        switch (type) {
            case "User.created":{
                await User.create(userdata)
                break
            }
                
                case "User.updated":{
                await User.findByIdAndUpdate(data.id ,  userdata)
                break
            }
              case "User.deleted":{
                await User.findByIdAndDelete(data.id )
                break
            }
            default:
                break;
        }
        res.json({succes:true , message:"Webhook Recived"})
        
    } catch (error) {
        console.log(error.message);
        res.json({succes:false , message:error.message})
        
    }
}

export default clerWebhooks