import mongoose from "mongoose";
import User from "../models/user.model.js";
import Message from "./message.model.js";

const conversationSchema = new mongoose.Schema(
  {
    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to User model
        required: true, // Ensuring members are required
      },
    ],
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Message', // Reference to Message model
        default: [],
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Conversation = mongoose.model("Conversation", conversationSchema); // Consistent capitalization

export default Conversation;
