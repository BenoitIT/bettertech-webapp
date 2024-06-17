"use client"
import Message from "../(components)/cards/message"
import { useState } from "react";
interface messagePageProps {
  messages: any[];
}

const Messages = ({ messages }: messagePageProps) => {
  const [messageToReply, setMsgToreply] = useState<number>(0);

  return (
    <div className="flex flex-col gap-3 mt-6">
      {messages.length > 0 ? (
        messages.map((message: any) => (
          <Message
            email={message.email}
            subject={message.subject}
            body={message.message}
            id={message.id}
            responded={message?.responded}
            messageToReply={messageToReply}
            onClick={setMsgToreply}
            key={message.id}
          />
        ))
      ) : (
        <div className="mt-[10vh] text-sm w-full text-center">
          We have not yet been contacted by someone..
        </div>
      )}
    </div>
  );
};
export default Messages;

