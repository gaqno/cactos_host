import { IChatMessage } from "@cactos_tools/Interfaces";

interface ChatHistoryMessagesProps {
  messages: IChatMessage[]
}

export default function ChatHistoryMessages({ messages }: ChatHistoryMessagesProps) {
  return (
    <div className="flex flex-col gap-2 max-h-[20rem] overflow-y-auto no-scrollbar">
      {messages && messages.map((message, index) => (
        <div className="chat chat-start border rounded-btn px-1 hover:bg-gray-100 hover:cursor-pointer" key={index}>
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={message.avatar}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center justify-between">
              <h1 className="font-bold">{message.from}</h1>
              <span className="text-xs">{new Date(message.date).toLocaleDateString('pt-br')}</span>
            </span>
            <span>{message.text}</span>
          </div>
        </div>
      ))}
    </div>
  )
}