import { PanelMenu } from 'primereact/panelmenu';
import useDrawer from './hooks/useListRoutesMenu';
import { useSystemContext } from '@/context/SystemContext';

export default function ListRoutesMenu() {
  const { drawerConfig } = useDrawer()
  const { isDrawerOpen } = useSystemContext()

  if (!isDrawerOpen) { return null }

  return (
    <div className="hidden md:relative">
      <PanelMenu model={drawerConfig} className="w-full md:w-10rem" />
    </div>
  )
}