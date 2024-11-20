import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { encrypt, decrypt } from "../utils/cryptoUtils.js"; // Import encryption utilities

// Send a message (with encryption)
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body; // Extract the message from the request body
        const { id: receiverId } = req.params; // Extract receiverId from route params
        const senderId = req.user._id; // Retrieve senderId from the authenticated user

        // Check if a conversation exists between sender and receiver
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] },
        });

        // If no conversation exists, create a new one
        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
            });
        }

        // Encrypt the message content
        const { iv, encryptedData } = encrypt(message);

        // Create a new encrypted message
        const newMessage = new Message({
            senderId,
            receiverId,
            message: encryptedData, // Save the encrypted message
            iv, // Save the IV used for encryption
        });

        // Save the new message and link it to the conversation
        conversation.messages.push(newMessage._id);
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json({
            message: "Message sent successfully",
            newMessage,
        });
    } catch (error) {
        console.error("Error in sendMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// Retrieve messages (with decryption)
export const getMessage = async (req, res) => {
    try {
        const { id: chatUser } = req.params; // Extract chatUser (receiver) from route params
        const senderId = req.user._id; // Retrieve senderId from the authenticated user

        // Find the conversation between sender and receiver
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, chatUser] },
        }).populate("messages"); // Populate the messages field with message data

        // If no conversation exists, return an empty array
        if (!conversation) {
            return res.status(200).json([]);
        }

        // Decrypt each message before sending it to the client
        const messages = conversation.messages.map((msg) => ({
            ...msg._doc, // Spread existing message data
            message: decrypt(msg.message, msg.iv), // Decrypt the message
        }));

        res.status(200).json(messages);
    } catch (error) {
        console.error("Error in getMessage", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
