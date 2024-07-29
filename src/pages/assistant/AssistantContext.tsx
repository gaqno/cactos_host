import React from "react";
import { OpenMicrofrontend } from "../../microfrontends/ErrorBoundary";
import { useMessageContext } from "@/context/MessageContext";
import { formatChatMessage } from "@/utils/formatChatMessage";
import { useSystemContext } from "@/context/SystemContext";
import { useUser } from "@clerk/clerk-react";
import { EChatboxRoutes } from ".";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const AssistantContext = React.lazy(() => import("@cactos_assistant/assistente-contexto"));

export default function AssistantContextMF() {
  const { question, setQuestion, handleKeyDown, messageFlow } = useMessageContext();
  const { user } = useUser()
  const configurations = useSystemContext()

  return (
    <OpenMicrofrontend name={EChatboxRoutes.ASSISTENTE_CONTEXTO}>
      <AssistantContext props={{
        configurations,
        view: EChatboxRoutes.ASSISTENTE_CONTEXTO,
        user,
        assistant: {
          formatChatMessage,
          question,
          setQuestion,
          handleKeyDown,
          messageFlow,
        }
      }} />
    </OpenMicrofrontend>
  );
}
