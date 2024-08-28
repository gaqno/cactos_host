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
      label: "Início",
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
          label: "Equipes",
          href: "/assistente-equipes",
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
            },
            {
              label: "Karl Marx",
              href: "/assistente-conversas?id=uuid2",
              icon: "pi pi-comment",
              items: null
            },
            {
              label: "Friedrich Engels",
              href: "/assistente-conversas?id=uuid3",
              icon: "pi pi-comment",
              items: null
            }
          ]
        },
        {
          label: "Relatórios",
          href: "/assistente-relatorios",
          icon: "pi pi-chart-bar",
          items: [
            {
              label: "Relatório 1",
              href: "/assistente-relatorios?id=uuid",
              icon: "pi pi-chart-bar",
              items: null
            },
            {
              label: "Relatório 2",
              href: "/assistente-relatorios?id=uuid",
              icon: "pi pi-chart-bar",
              items: null
            },
            {
              label: "Relatório 3",
              href: "/assistente-relatorios?id=uuid",
              icon: "pi pi-chart-bar",
              items: null
            }
          ]
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