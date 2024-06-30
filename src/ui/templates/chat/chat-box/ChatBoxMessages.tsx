import { IChatMessage } from "@cactos_tools/Interfaces";

interface IChatBoxMessages {
  messages: IChatMessage[]
}

export default function ChatBoxMessages(props: IChatBoxMessages) {
  const { messages } = props;

  return (
    <div className="p-2 h-[40vh] overflow-y-auto">
      {messages && messages.map((message, index) => (
        <div className="chat chat-start" key={index}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={message.avatar}
              />
            </div>
          </div>
          <div className="chat-bubble">{message.text}</div>
        </div>
      ))}
    </div>
  );
}