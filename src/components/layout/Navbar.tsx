"use client";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/favicon.svg";
import Image from "next/image";

interface NavLink {
    name: string;
    path: string;
}

const Navbar: React.FC = () => { 
    const navLinks: NavLink[] = [
        { name: 'Главная', path: '#hero' },
        { name: 'Услуги', path: '#services' },
        { name: 'Обо мне', path: '#about-me' },
        { name: 'Вузы', path: '#universities' },
        { name: 'Вопросы', path: '#faq' },
        { name: 'Отзывы', path: '#testimonial' },
        { name: 'Контакты', path: '#contact-block' },
    ];

    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = (): void => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="font-[Montserrat]">
            <nav 
                aria-label="Основная навигация"
                className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
                ${isScrolled 
                    ? "bg-[#FCF9EA] shadow-md py-3 md:py-4" 
                    : "bg-transparent py-4 md:py-6"
                }`}
            >                 
    
                {/* Логотип: всегда слева */}
                <div className="flex items-center flex-shrink-0 z-10">
                    <a href="/" className="flex items-center gap-2" aria-label="На главную">
                        <Image 
                            src={Logo} 
                            alt="Логотип" 
                            priority     
                            className="h-12 w-12 flex-shrink-0 object-contain" 
                        />
                    </a>
                </div>      
                
                {/* Ссылки навигации: жестко по центру экрана за счет absolute и left-1/2 */}
                <div className="hidden text-lg lg:flex items-center gap-6 xl:gap-10 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.path} 
                            className="group relative text-[#636024] transition-colors duration-300 hover:text-[#5C0F07] whitespace-nowrap"
                        >
                            {link.name}                                           
                            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#5C0F07] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>               
                
                {/* Правая часть: кнопка меню (или пустой контейнер-заглушка для флекса на десктопе, чтобы не ломать justify-between) */}
                <div className="lg:flex flex-shrink-0 z-10">
                    <div className="lg:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#636024] text-2xl p-2"
                            aria-expanded={isMenuOpen}
                            aria-label="Открыть меню"
                        >
                            ☰
                        </button>
                    </div>
                    {/* На десктопе этот блок пустой, но он нужен, чтобы распределять justify-between */}
                    <div className="hidden lg:block w-12 h-12 pointer-events-none"></div>
                </div>      
                
                {/* Мобильное меню (шторка) */}
                <div 
                    className={`fixed top-0 left-0 w-full h-screen bg-[#FCF9EA] flex flex-col items-center justify-center gap-6 transition-all duration-500 z-[60]
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <button 
                        className="absolute top-4 right-4 text-xl p-2"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Закрыть меню"
                    >
                        ✕
                    </button>
                    {navLinks.map((link, i) => (
                        <a 
                            key={i} 
                            href={link.path} 
                            onClick={() => setIsMenuOpen(false)}
                            className="text-[#636024] text-xl hover:text-[#5C0F07] transition"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;