import EmailButton from './EmailButton';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export const HeaderNav = () => {
    let Links =[
        {name: "Artists",link:"#artist"},
        {name: "Videos",link:"/"},
        {name: "Music",link:"/"},
        {name: "About",link:"/"},
    ];
    let [open,setOpen] = useState(false);

    return (
        <div className="shadow uppercase md w-full top-0 left-0 bg-black bg-opacity-90">
            <div className="md:flex items-center justify-around py-[22px] md:py-5 text-white md:px-[155px] px-7">   
                <div className="font-bold text-2xl cursor-pointer flex items-center">
                    <span className="text-3xl text-[#7C0F82] px-4">
                        <i class="fa-solid fa-record-vinyl"></i>
                    </span>
                     Núcleo Corp
                </div>
                <div onClick={()=>setOpen(!open)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <ion-icon name={open ? 'close' : 'menu-outline'}></ion-icon>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-12 transition-all duration-500 ease-in ${open ? 'top-10 opacity-100':'top-[-490px]'} md:opacity-100`}>
                    {
                        Links.map((link)=>(
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                    <EmailButton/>
                </ul>
            </div>
        </div>
    );
}