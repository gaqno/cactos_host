import { useEffect, useState } from "react";
import { ChatCompletionCreateParams, ChatCompletionMessageParam } from "openai/resources/index.mjs";
import { useUser } from "@clerk/clerk-react";
import { IOpenAiFlow } from "@cactos_tools/Interfaces";
import OpenAI from "openai";

export default function useOpenAI() {
  const { user, isLoaded } = useUser();
  const [messageFlow, setMessageFlow] = useState<IOpenAiFlow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
  });

  useEffect(() => {
    if (user && isLoaded)
      setMessageFlow([
        {
          role: 'assistant',
          content: `Olá ${user.fullName}!`,
          createdAt: new Date().toISOString()
        }
      ]);
  }, [isLoaded, user]);

  useEffect(() => {
    if (messageFlow.length > 0) {
      const lastMessage = messageFlow[messageFlow.length - 1];
      if (lastMessage && lastMessage.role === 'user') {
        setIsLoading(true);
        const params: ChatCompletionCreateParams = {
          model: 'gpt-3.5-turbo',
          messages: messageFlow.map((message) => ({
            role: message.role,
            content: message.content
          })) as ChatCompletionMessageParam[],
        };

        openai.chat.completions.create(params)
          .then((response) => {
            setMessageFlow((prev) => [
              ...prev,
              {
                role: 'assistant',
                content: response?.choices[0]?.message.content ?? '',
                createdAt: new Date().toISOString()
              }
            ])
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.error(error);
          });
      }
    }
  }, [messageFlow]);

  const handleSendMessage = (message: string) => setMessageFlow((prev) =>
    [
      ...prev,
      {
        role: 'user',
        content: message,
        createdAt: new Date().toISOString()
      }
    ]);

  const onSendMessage = (message: string) => {
    if (!message) return;
    handleSendMessage(message);
  }

  const onClearMessages = () => setMessageFlow([]);

  const onSendFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setMessageFlow((prev) =>
        [
          ...prev,
          {
            role: 'user',
            content: base64,
            createdAt: new Date().toISOString()
          }
        ]);
    }
    reader.readAsDataURL(file);
  }

  const onSendImage = (image: string) => setMessageFlow((prev) =>
    [
      ...prev,
      {
        role: 'user',
        content: image,
        createdAt: new Date().toISOString()
      }
    ]);

  const onSendAudio = (audio: string) => setMessageFlow((prev) =>
    [
      ...prev,
      {
        role: 'user',
        content: audio,
        createdAt: new Date().toISOString()
      }
    ]);

  const onSendVideo = (video: string) => setMessageFlow((prev) =>
    [
      ...prev,
      {
        role: 'user',
        content: video,
        createdAt: new Date().toISOString()
      }
    ]);

  const onSendLocation = (location: string) => setMessageFlow((prev) =>
    [
      ...prev,
      {
        role: 'user',
        content: location,
        createdAt: new Date().toISOString()
      }
    ]);

  return {
    messageFlow,
    isLoading,
    onSendMessage,
    onClearMessages,
    onSendFile,
    onSendImage,
    onSendAudio,
    onSendVideo,
    onSendLocation
  }
}