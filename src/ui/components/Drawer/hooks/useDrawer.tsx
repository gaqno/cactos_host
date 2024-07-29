import HOST_CONFIGURE from "@/constant/Configure";
import { useSystemContext } from "@/context/SystemContext";
import { Badge } from "primereact/badge";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Item {
  label: string;
  icon: string;
  badge?: number;
  shortcut?: string;
  template: (item: Item, options: any) => JSX.Element;
  items?: Item[];
}

export default function useDrawer() {
  let [drawerConfig, setDrawerConfig] = React.useState<Item[]>([])
  let [isOpen, setIsOpen] = React.useState(false)
  const { toggleDrawer } = useSystemContext()
  const navigate = useNavigate()

  const handleNavigate = (href: string) => {
    navigate(href)
    toggleDrawer()
  }
  
  const itemRenderer = (item, options) => (
    <a className="flex align-items-center px-3 py-2 cursor-pointer" onClick={options.onClick}>
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${!!item.items?.length && 'font-semibold'}`}>{item.label}</span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
      {!!item.items?.length && <span className="ml-auto pi pi-angle-down" />}
      {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
    </a>
  );

  React.useEffect(() => {
    let obj = HOST_CONFIGURE.routes.map((item) => ({
      ...item,
      template: itemRenderer(item, { }),
      items: item.items && item.items.map((subItem: { href: any; }) => ({
        ...subItem,
        template: itemRenderer(subItem, {
          onClick: handleNavigate.bind(null, subItem.href)
        })
      }))
    }))
    setDrawerConfig(obj as any)
  }, [HOST_CONFIGURE])

  return { drawerConfig, setIsOpen, isOpen }
}