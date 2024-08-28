import { Button } from 'primereact/button';
import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [iconClassName, setIconClassName] = useState('pi-moon');

  const onThemeToggler = () => {
    const root = document.getElementsByTagName('html')[0];

    root.classList.toggle('dark');
    setIconClassName((prevClasName) =>
      prevClasName === 'pi-moon' ? 'pi-sun' : 'pi-moon'
    );
  };

  return (
    <Button
      icon={`pi ${iconClassName}`}
      onClick={onThemeToggler}
      rounded
      text
      className="transition duration-500 ease-in-out"
    />
  );
};

export default ThemeSwitcher;