import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { UserButton } from '@clerk/clerk-react';
import { useSystemContext } from '@/context/SystemContext';

export default function Navbar() {
    const { toggleDrawer } = useSystemContext()

    const start = (
        <div className="flex align-items-center gap-2">
            <button onClick={toggleDrawer} className="p-link">
                <span className="pi pi-bars"></span>
            </button>
        </div>
    );

    const end = (
        <div className="flex align-items-center gap-2">
            <InputText placeholder="Search" type="text" className="w-8rem sm:w-auto" />
            <UserButton />
        </div>
    );

    const items = [
        {
            label: 'File',
            icon: 'pi pi-file',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus',
                    command: () => {
                    }
                },
                {
                    label: 'Print',
                    icon: 'pi pi-print',
                    command: () => {
                    }
                }
            ]
        },
        {
            label: 'Search',
            icon: 'pi pi-search',
            command: () => {
            }
        },
        {
            separator: true
        },
        {
            label: 'Sync',
            icon: 'pi pi-cloud',
            items: [
                {
                    label: 'Import',
                    icon: 'pi pi-cloud-download',
                    command: () => {
                    }
                },
                {
                    label: 'Export',
                    icon: 'pi pi-cloud-upload',
                    command: () => {
                    }
                }
            ]
        }
    ];


    return (
        <Menubar
            start={start}
            end={end}
            model={items}
            menuIcon={null}
        />
    )
}
