import { type FormEvent, useEffect, useRef, useState } from "react";
import useChat from "./useOpenAI";

export default function useChatbox() {
  const { sendMessage, messageFlow, isLoading } = useChat();
  const messagesEndRef = useRef<null | HTMLDivElement>(null)
  const [question, setQuestion] = useState<string>('');

  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    sendMessage(question);
    setQuestion('');
  }

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  useEffect(() => { scrollToBottom()}, [messageFlow]);

  
  return {
    messageFlow,
    handleSendMessage,
    question,
    setQuestion,
    isLoading,
    messagesEndRef
  }
}