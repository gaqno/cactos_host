import { useOpenAI } from "@/hooks/useOpenAI";
import { IChatMessage } from "@cactos_tools/Interfaces";
import { ReactNode, useState } from "react";

import { createContext, useContext } from "use-context-selector";

interface IMessageContextValue {
  configurations: {
    [key: string]: any;
  };
  setMessagesConfigurations: (messages: any) => void;
  setQuestion?: (question: string) => void;
  handleKeyDown?: (event: any) => void;
  messageFlow?: any;
  isLoading?: boolean;
  question?: string;
}

export const MessageContext = createContext({} as IMessageContextValue);
export const useMessageContext = () => useContext(MessageContext);

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [configurations, setConfigurations] = useState({} as IMessageContextValue["configurations"]);

  const { question, setQuestion, handleKeyDown, messageFlow } = useOpenAI()

  return (
    <MessageContext.Provider
      value={{
        configurations,
        setMessagesConfigurations: setConfigurations,
        question,
        setQuestion,
        handleKeyDown,
        messageFlow,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
