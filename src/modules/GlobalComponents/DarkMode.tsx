'use client'

import React, { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import { moon, sun } from '../../../public/svgs/svgs';

const DarkMode = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem("DarkMode");
        if (storedMode !== null) {
            setState(storedMode === "true");
            updateHtmlClass(storedMode === "true");
        } else {
            setState(window.matchMedia("(prefers-color-scheme: dark)").matches);
            updateHtmlClass(window.matchMedia("(prefers-color-scheme: dark)").matches);
        }
    }, []);

    const handleChange = (checked:boolean) => {
        setState(checked);
        localStorage.setItem('DarkMode', checked.toString());
        updateHtmlClass(checked);
    };

    const updateHtmlClass = (darkMode:boolean) => {
        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            if (darkMode) {
                htmlElement.classList.add('dark');
            } else {
                htmlElement.classList.remove('dark');
            }
        }
    };

    return (
        <ReactSwitch 
            checked={state} 
            onChange={handleChange} 
            onColor='#FFFF99' 
            checkedIcon={sun()} 
            uncheckedIcon={moon()}
            className=' text-black'
        />
    );
};

export default DarkMode;
