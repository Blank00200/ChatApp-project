import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        message: {
            type: String,
            required: true, // This will store the encrypted message
        },
        iv: {
            type: String,
            required: true, // Store the initialization vector (IV) for decryption
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
