import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessages from "./ChatBoxMessages";
import ChatBoxForm from "./ChatBoxForm";
import { useChatbox, useFormatChatMessage } from "../../../../hooks";

export default function ChatBox() {
  const { messageFlow } = useChatbox();
  const { formatChatMessage } = useFormatChatMessage()
  return (
    <div className="p-2 flex flex-col h-full justify-between">
      <ChatBoxHeader />
      <ChatBoxMessages messages={formatChatMessage(messageFlow)} />
      <ChatBoxForm />
    </div>
  );
}
