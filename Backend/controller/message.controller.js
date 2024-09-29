import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        // Check if a conversation exists
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] },
        });

        // Create a new conversation if it doesn't exist
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId], // Use 'members' instead of 'part'
            });
        }

        // Create a new message
        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        // Save the new message and push it to the conversation
        conversation.messages.push(newMessage._id);
        
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({
            message: "Message sent successfully",
            newMessage,
        });
        
    } catch (error) {
        console.log("Error in sendMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, chatUser] },
        }).populate("messages");
        if (!conversation) {    
            return res.status(201).json([])
        }
        const messages = conversation.messages;
        res.status(201).json(messages);

    } catch (error) {
        console.log ("Error in getMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
}