import React, { ReactNode } from 'react';
import { AiOutlineClose } from "react-icons/ai";

interface props  {
    isOpen: boolean
    onClose: Function
    children: ReactNode
    name: string
}

const Popup = ({ isOpen, onClose, children, name }:props) => {
    return (
        isOpen ? (
            <div className="fixed shadow-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[70vw] h-[75vh] flex justify-center items-center  z-[1202] overflow-y-auto overflow-x-hidden rounded-lg bg-white dark:bg-darkBG">
                <div className="h-full w-full">
                    <div className=' relative top-0 left-0 w-full h-[40px] bg-primaryWellTalkUni'/>

                    <button onClick={() => onClose(name)} className="absolute top-2 right-2 text-black dark:text-white hover:text-gray-800 hover:scale-150 transition-all">
                        <span className=''><AiOutlineClose/></span>
                    </button>
                    
                    {children}
                </div>
            </div>
        ) : null
    );
}


export default Popup;
