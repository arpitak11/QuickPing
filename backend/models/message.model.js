import mongoose from "mongoose";

//schema bana rhe message wala for database
const messageSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId, //mongoose se baaki bs type of id hai jo bhi tha will review
        ref:"User",
        required:true
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    message:{
        type:String,
        required: true
    },
    //createdAt, updatedAt=> message.createdAt: 15:30
},{ timestamps: true})

const Message= mongoose.model("Message", messageSchema);

export default Message;