import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body; // get the message
    const { id: receiverId } = req.params; // get the recievr id
    const senderId = req.user._id; // get the sender id

    let conversation = await Conversation.findOne({
      //find conversation
      participants: { $all: [senderId, receiverId] },
    });

    //create conversation if not
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
        //message: [],
      });
    }

    //create message
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    // await newMessage.save();

    if (newMessage) {
      conversation.messages.push(newMessage._id); //push into array
    }

    // await conversation.save();
    await Promise.all([conversation.save(), newMessage.save()]); // this will run in parallel

    //SOCKET IO functionality will go here
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      //below is used to send events to speciifc client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sending message: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages"); //will search but till now we know that it takes each message instead of id (//not refernce but actual message)

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessage controller: ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
