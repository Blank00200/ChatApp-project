import React, { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation(); // Make sure it's setMessages, not setMessage
  
  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );

      // Update the messages array with the new message
      setMessages([...messages, res.data]);
      setLoading(false);
    } catch (error) {
      console.log("Error in send messages", error);
      setLoading(false);
    }
  };

  return { loading, sendMessages };
};

export default useSendMessage;
