import { IChatMessage, IOpenAiFlow } from "@cactos_tools/Interfaces"

export function formatChatMessage(message: IOpenAiFlow[]) {
  return message.map((message) => {
    const chatMessage: IChatMessage = {
      avatar: message.role === "user" ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : "https://cdn-icons-png.flaticon.com/512/149/149071.png",
      date: String(message.createdAt),
      from: message.role,
      text: message.content,
      reactions: {}
    }

    return { ...chatMessage }
  });
}