/* v8 ignore start */
import type { RouteObject } from "react-router";
import FinancingModuleMF from "../pages/financing";
import Home from "@/pages/home";
import AssistantChatMF from "@/pages/assistant/AssistantChat";
import AssistantAttachmentsMF from "@/pages/assistant/AssistantAttachments";
import AssistantContextMF from "@/pages/assistant/AssistantContext";
import AssistantTrainingMF from "@/pages/assistant/AssistantTraining";
import AssistantSettingsMF from "@/pages/assistant/AssistantSettings";
import AssistantAgentsMF from "@/pages/assistant/AssistantAgents";
import AssistantTeamsMF from "@/pages/assistant/AssistantTeams";

interface IRouteList {
  [key: string]: RouteObject;
}

export const listRoutes: IRouteList = {
  "": {
    path: "/",
    element: <Home />,
  },
  "assistente-conversas": {
    path: "/assistente-conversas",
    element: <AssistantChatMF />,
  },
  "assistente-anexos": {
    path: "/assistente-anexos",
    element: <AssistantAttachmentsMF />,
  },
  "assistente-contexto": {
    path: "/assistente-contexto",
    element: <AssistantContextMF />,
  },
  "assistente-treinamento": {
    path: "/assistente-treinamento",
    element: <AssistantTrainingMF />,
  },
  "assistente-configuracoes": {
    path: "/assistente-configuracoes",
    element: <AssistantSettingsMF />,
  },
  "assistente-agentes": {
    path: "/assistente-agentes",
    element: <AssistantAgentsMF />,
  },
  "assistente-equipes": {
    path: "/assistente-equipes",
    element: <AssistantTeamsMF />,
  },
  "informacoes-estatisticas": {
    path: "/informacoes-estatisticas",
    element: <AssistantSettingsMF />,
  },
  "assistente-web-scraping": {
    path: "/assistente-web-scraping",
    element: <AssistantSettingsMF />,
  },
  "financeiro": {
    path: "/financeiro",
    element: <FinancingModuleMF />,
  },
};
