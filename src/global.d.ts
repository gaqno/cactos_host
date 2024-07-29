//<reference types="react" />
declare module "@cactos_host/Styles" {
  export const GlobalStyle: React.ComponentType;
  export const ThemeProvider: React.ComponentType;
}

declare module "@cactos_host/tailwind.config" {
  const tailwindConfig: any;
  export default tailwindConfig;
}

declare module "@cactos_host/Hooks" {
  export const useClerk: () => {
    user: any;
    isLoaded: boolean;
    isError: boolean;
  };
  export const useOpenAI: () => {
    messageFlow: any[];
    isLoading: boolean;
    question: string;
    setQuestion: (question: string) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    setQuestion: (question: string) => void;
    onSendMessage: (message: string) => void;
    onClearMessages: () => void;
    onSendFile: (file: File) => void;
    onSendImage: (image: File) => void;
    onSendVideo: (video: File) => void;
    onSendAudio: (audio: File) => void;
    onSendLocation: (location: { lat: number; lng: number }) => void;
  };
  export const useFormatChatMessage: () => {
    formatChatMessage: (message: any[]) => any[];
  };
}

declare module "@cactos_host/Components" {
  export const Header: React.ComponentType;
  export const Navbar: React.ComponentType;
  export const Footer: React.ComponentType;
  export const Sidemenu: React.ComponentType<{
    children: React.ReactNode;
    options: React.ReactNode;
  }>;
  export const Toast: React.ComponentType;
  export const Modal: React.ComponentType;
  export const Tabs: React.ComponentType<{
    tabs?: {
      name: string;
      component: React.ComponentType;
    }[];
  }>;
  export const DataTable: React.ComponentType<{
    columns: {
      name: string;
      selector: string;
    }[];
    data: any[];
  }>;
}

declare module "@cactos_tools/Messages" {
  interface IMessages {
    [key: string]: string;
  }
  export const MESSAGES: IMessages
}

declare module "@cactos_tools/SystemConfiguration" {
  interface ISystemConfiguration {
    title: string;
    description: string;
    drawer: {
      isOpen: boolean;
      toggle: () => void;
    }
    theme: string;
    toast: {
      position: string;
      duration: number;
    };
    api: {
      url: string;
    };
    routes: IRoutes[];
    client_extras: {
      [key: string]: any;
    }
  }
  const SYSTEM_CONFIGURATION: ISystemConfiguration;
  export default SYSTEM_CONFIGURATION
}

declare module "@cactos_tools/Interfaces" {
  interface IRoutes {
    name: string;
    href: string;
    icon: string;
    childrens: any[];
  }

  interface IChatMessage {
    text: string;
    date: string;
    from: string;
    avatar: string;
    reactions: {
      [key: string]: number;
    }
  }

  interface IFinancing {
    name: string;
    value: number;
    installments: number;
    installment_value: number;
  }

  interface IOpenAiFlow {
    role: string;
    content: string;
    createdAt: string;
  }
  interface ISystemConfiguration {
    title: string;
    description: string;
    theme: string;
    toast: {
      position: string;
      duration: number;
    };
    api: {
      url: string;
    };
    routes: {
      label: string;
      href: string;
      icon: string;
      items: any[];
    }[];
    client_extras: {
      [key: string]: any;
    }
  }

}

declare module "@cactos_assistant/assistente-conversas" {
  const AssistantChat: React.ComponentType<{ props: any }>;
  export default AssistantChat;
}

declare module "@cactos_assistant/assistente-anexos" {
  const AssistantAttachments: React.ComponentType<{ props: any }>;
  export default AssistantAttachments;
}

declare module "@cactos_assistant/assistente-contexto" {
  const AssistantContext: React.ComponentType<{ props: any }>;
  export default AssistantContext;
}

declare module "@cactos_assistant/assistente-treinamento" {
  const AssistantTraining: React.ComponentType<{ props: any }>;
  export default AssistantTraining;
}

declare module "@cactos_assistant/assistente-configuracoes" {
  const AssistantSettings: React.ComponentType<{ props: any }>;
  export default AssistantSettings;
}

declare module "@cactos_assistant/modelos" {
  const AssistantModels: React.ComponentType<{ props: any }>;
  export default AssistantModels;
}

declare module "@cactos_assistant/informacoes-estatisticas" {
  const AssistantStatistics: React.ComponentType<{ props: any }>;
  export default AssistantStatistics;
}

declare module "@cactos_assistant/informacoes-web-scraping" {
  const AssistantWebScraping: React.ComponentType<{ props: any }>;
  export default AssistantWebScraping;
}

declare module "@cactos_financing/App" {
  const App: React.ComponentType;
  export default App;
}