import mongoose from "mongoose";
const conversationSchema=new mongoose.Schema({
    participants:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
        },
    ],
    messages:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Message",  // pehle yahan messages tha thats why an error occured
            deafult:[],
        },
    ],
},
{timestamps:true}
);

const Conversation= mongoose.model("Conversation", conversationSchema);

export default Conversation;