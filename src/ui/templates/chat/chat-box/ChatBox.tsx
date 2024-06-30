import ChatBoxHeader from "./ChatBoxHeader";
import ChatBoxMessages from "./ChatBoxMessages";
import ChatBoxForm from "./ChatBoxForm";
import { useOpenAI } from "../../../../hooks";

export default function ChatBox() {
  const { messageFlow } = useOpenAI();

  return (
    <div className="p-2 flex flex-col h-full justify-between">
      <ChatBoxHeader />
      <ChatBoxMessages messages={messageFlow} />
      <ChatBoxForm />
    </div>
  );
}
