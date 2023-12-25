import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('darkMode') === 'true');

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[location.pathname]);

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);
  
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Root;