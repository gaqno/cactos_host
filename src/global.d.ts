//<reference types="react" />

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

declare module "@cactos_tools/Theme" {
  export const Theme: any;
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
    theme: string;
    toast: {
      position: string;
      duration: number;
    };
    api: {
      url: string;
    };
    routes: {
      name: string;
      href: string;
      icon: string;
      childrens: any[];
    }[];
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
      name: string;
      href: string;
      icon: string;
      childrens: any[];
    }[];
    client_extras: {
      [key: string]: any;
    }
  }
}

declare module "@cactos_assistant/App" {
  const App: React.ComponentType;
  export default App;
}

declare module "@cactos_financing/App" {
  const App: React.ComponentType;
  export default App;
}