import { UserButton } from '@clerk/clerk-react';
import { useSystemContext } from '@/context/SystemContext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';
import { Badge } from 'primereact/badge';
import useDrawer from '../ListRoutesMenu/hooks/useListRoutesMenu';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
	const { toggleDrawer, isDrawerOpen } = useSystemContext()
	const { drawerConfig } = useDrawer()
	const navigate = useNavigate()
	
	const ListRoutesMenu = ({ options, isDrawerOpen, navigate }) => {
		const [expandedItems, setExpandedItems] = useState([]);

		const handleParentClick = (index) => {
			if (!expandedItems.includes(index)) {
				setExpandedItems([...expandedItems, index]);
			}
		};

		const isRouteActive = (href) => {
			return location.pathname === href;
		};

		return (
			<div className="flex flex-col items-start gap-1 pt-2">
				{options.map((el, ind) => (
					<div
						className={`flex flex-col gap-1 w-full items-center cursor-pointer hover:bg-slate-100/20 rounded ${
							isRouteActive(el.href) ? 'bg-slate-100/20' : ''
						}`}
						key={ind}
					>
						<a
							className={`flex items-center px-3 py-2 cursor-pointer ${
								isRouteActive(el.href) ? 'text-primary' : 'text-black'
							}`}
							onClick={(e) => {
								e.preventDefault();
								if (el.items) {
									handleParentClick(ind);
								} else {
									navigate(el.href);
								}
							}}
						>
							<span className={`${el.icon} ${isRouteActive(el.href) ? 'text-primary' : 'text-black'}`} />
							{!!isDrawerOpen && (
								<span className={`mx-2 ${!!el.items?.length && 'font-semibold'}`}>
									{el.label}
								</span>
							)}
							{el.badge && <Badge className="ml-auto" value={el.badge} />}
							{!!isDrawerOpen && !!el.items?.length && <span className="ml-auto pi pi-angle-down" />}
							{el.shortcut && (
								<span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
									{el.shortcut}
								</span>
							)}
						</a>
						{el.items && isDrawerOpen && expandedItems.includes(ind) && (
							<div className="flex flex-col gap-1 pt-2">
								{el.items.map((item, index) => (
									<a
										key={index}
										className={`flex items-center px-3 py-2 cursor-pointer hover:bg-slate-100/20 rounded ${
											isRouteActive(item.href) ? 'bg-slate-100/20' : ''
										}`}
										onClick={(e) => {
											e.preventDefault();
											navigate(item.href);
										}}
									>
										<span
											className={`${item.icon} ${
												isRouteActive(item.href) ? 'text-primary' : 'text-black'
											}`}
										/>
										<span
											className={`mx-2 ${
												isRouteActive(item.href) ? 'text-primary' : 'text-black'
											}`}
										>
											{item.label}
										</span>
										{item.badge && <Badge className="ml-auto" value={item.badge} />}
										{item.shortcut && (
											<span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
												{item.shortcut}
											</span>
										)}
									</a>
								))}
							</div>
						)}
					</div>
				))}
			</div>
		);
	};

	return (
		<div
			onMouseEnter={toggleDrawer}
			onMouseLeave={toggleDrawer}
			className={classNames(
				!isDrawerOpen ? "w-20 transition-all duration-300" : "w-[15rem] transition-all duration-300",
				"flex flex-col items-center justify-between bg-primary dark:bg-primary-dark text-white dark:text-white flex p-2 h-screen")}
		>
			<div className='flex flex-col items-center'>
				<Button icon="pi pi-bars" className='w-full' />
				<ListRoutesMenu isDrawerOpen={isDrawerOpen} navigate={navigate} options={drawerConfig} />
			</div>

			<div className='flex flex-col gap-1 items-center max-h-20'>
				{/* {!!isDrawerOpen && <ThemeSwitcher />} */}
				<UserButton />
			</div>
		</div>
	)
}
