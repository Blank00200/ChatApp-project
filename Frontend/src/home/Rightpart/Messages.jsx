import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage.js";
import Loading from "../../components/Loading.jsx";

function Messages() {
  const { loading, messages } = useGetMessage();
  const lastMsgRef = useRef();

  useEffect(() => {
    if (lastMsgRef.current) {
      setTimeout(() => {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [messages]);

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {messages.length > 0 ? (
            messages.map((message) => (
              <Message
                key={message._id} // Ensure _id is unique for each message
                message={message}
                ref={message === messages[messages.length - 1] ? lastMsgRef : null} // Attach ref to the last message
              />
            ))
          ) : (
            <div>
              <p className="text-center mt-[20%]">
                This is the beginning of your legendary conversation!
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Messages;
