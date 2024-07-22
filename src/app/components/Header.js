"use client";

export default function Header() {
    return (
        <header 
            className="p-10 shadow-lg 
                    bg-gradient-to-r from-primary via-purple-800 via-[percentage:20%_70%] to-pink-600
                    flex flex-col items-center justify-center"
        >
            <h1 className="text-4xl text-center font-semibold text-white">Melboss Task Management</h1>
            <img alt="Melboss Logo" src="https://www.melboss.com/assets/images/logo_melboss_white.svg" className="my-4 max-w-[200px]"></img>
            <small className="text-slate-300">Darius Murariu</small>
        </header>
    )
}