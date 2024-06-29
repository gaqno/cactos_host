//<reference types="react" />

declare module "@cactos_host/Components" {
  export const Header: React.ComponentType;
  export const Navbar: React.ComponentType;
  export const Footer: React.ComponentType;
  export const Sidemenu: React.ComponentType<{
    children: React.ReactNode;
    options: {
      title: string;
      items: {
        name: string;
        href: string;
      }[];
    }[];
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
}

declare module "@cactos_assistant/App" {
  const App: React.ComponentType;
  export default App;
}

declare module "@cactos_financing/App" {
  const App: React.ComponentType;
  export default App;
}

declare module "@cactos_financing/Interfaces" {
  interface IFinancing {
    name: string;
    value: number;
    installments: number;
    installment_value: number;
  }
}