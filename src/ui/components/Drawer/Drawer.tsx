import { PanelMenu } from 'primereact/panelmenu';
import { Card } from 'primereact/card';
import useDrawer from './hooks/useDrawer';
import React from 'react';
import { useSystemContext } from '@/context/SystemContext';

export default function Drawer() {
  const { drawerConfig } = useDrawer()
  const { isDrawerOpen } = useSystemContext()

  const Clock = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString())
    React.useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString())
      }, 1000)
      return () => clearInterval(interval)
    }, [])
    return <span>{time}</span>
  }

  if (!isDrawerOpen) { return null }

  return (
    <div className="card flex flex-column justify-content-between bg-primary p-2">
      <PanelMenu model={drawerConfig} className="w-full md:w-10rem" />
      <Card>
        <div className="flex flex-column items-center">
          <Clock />
        </div>
      </Card>
    </div>
  )
}