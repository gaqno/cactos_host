const HOST_CONFIGURE = {
  title: "Cactos",
  description: "Cactos - ReactJS",
  theme: "light",
  toast: {
    position: "top-right",
    duration: 5000,
  },
  api: {
    url: "https://api.cactos.com",
  },
  routes: [
    {
      label: "Home",
      href: "/",
      icon: "pi pi-home",
      items: null
    },
    {
      label: "Assistente",
      href: "",
      icon: "pi pi-user",
      items: [
        {
          label: "Times",
          href: "/assistente-times",
          icon: "pi pi-users",
          items: null
        },
        {
          label: "Agentes",
          href: "/assistente-agentes",
          icon: "pi pi-user",
          items: null
        },
        {
          label: "Conversas",
          href: "/assistente-conversas",
          icon: "pi pi-comment",
          items: [
            {
              label: "Vladmir Lenin",
              href: "/assistente-conversas?id=uuid",
              icon: "pi pi-comment",
              items: null
            }
          ]
        },
        {
          label: "Anexos",
          href: "/assistente-anexos",
          icon: "pi pi-paperclip",
          items: null
        },
        {
          label: "Contexto",
          href: "/assistente-contexto",
          icon: "pi pi-info",
          items: null
        },
        {
          label: "Treinamento",
          href: "/assistente-treinamento",
          icon: "pi pi-book",
          items: null
        },
      ]
    },
    {
      label: "Financeiro",
      href: "/financeiro",
      icon: "pi pi-money-bill",
      items: null
    },
  ],
  client_extras: {
    "google-analytics": {
      trackingId: "UA-1234567890",
    },
  },
}

export default HOST_CONFIGURE;