import { useEffect, useState } from 'react';
import { OpenAI } from 'openai';
import { ChatCompletionCreateParams } from 'openai/resources/index.mjs';
import { ChatCompletionMessageParam } from 'openai/resources/index.js';
import { IOpenAiFlow } from '@cactos_tools/Interfaces';
import { useUser } from '@clerk/clerk-react';

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
  
  return {
    messageFlow,
    isLoading,
    sendMessage: (message: string) => {
      if (!message) return;
      handleSendMessage(message);
    },
  }
}
