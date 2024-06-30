import { IChatMessage } from "@cactos_tools/Interfaces";
import ChatHistoryHeader from "./ChatHistoryHeader";
import ChatHistoryMessages from "./ChatHistoryMessages";

interface ChatHistoryProps {
  messages: IChatMessage[]
}

export default function ChatHistory({ messages }: ChatHistoryProps) {
  return (
    <div className="p-2">
      <ChatHistoryHeader />
      <ChatHistoryMessages messages={messages} />
    </div>
  );
}
