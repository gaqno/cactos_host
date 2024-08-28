import React from "react";
import { OpenMicrofrontend } from "../../microfrontends/ErrorBoundary";
import { useMessageContext } from "@/context/MessageContext";
import { formatChatMessage } from "@/utils/formatChatMessage";
import { useSystemContext } from "@/context/SystemContext";
import { useUser } from "@clerk/clerk-react";
import { EChatboxRoutes } from ".";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const AssistantTeams = React.lazy(() => import("@cactos_assistant/assistente-equipes"));

export default function AssistantTeamsMF() {
  const { question, setQuestion, handleKeyDown, messageFlow } = useMessageContext();
  const { user } = useUser()
  const configurations = useSystemContext()

  return (
    <OpenMicrofrontend name={EChatboxRoutes.EQUIPES}>
      <AssistantTeams props={{
        configurations,
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
