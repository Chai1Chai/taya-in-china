"use client";
import React, { useState, useEffect } from "react";

// Определяем интерфейс для ссылок навигации
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
            {/* Используем <nav> с aria-label для улучшения SEO и доступности */}
            <nav 
                aria-label="Основная навигация"
                className={`fixed top-0 left-0 w-full flex items-center px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50
                ${isScrolled 
                    ? "bg-[#FCF9EA] shadow-md py-3 md:py-4" 
                    : "bg-transparent py-4 md:py-6"
                }`}
            >             
    
                <div className="flex-1 flex justify-start">
                    <a href="/" className="flex items-center gap-2" aria-label="На главную">
                        <span className="text-lg font-semibold text-[#636024]">Logo</span>
                    </a>
                </div>      
                
                <div className="hidden text-lg md:flex items-center gap-6 lg:gap-8 xl:gap-10">
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
                
                <div className="flex-1 flex justify-end">
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-[#636024] text-2xl"
                            aria-expanded={isMenuOpen}
                            aria-label="Открыть меню"
                        >
                            ☰
                        </button>
                    </div>
                </div>      
                
                <div 
                    className={`fixed top-0 left-0 w-full h-screen bg-[#FCF9EA] flex flex-col items-center justify-center gap-6 transition-all duration-500 z-[60]
                    ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <button 
                        className="absolute top-4 right-4 text-xl"
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
                            className="text-[#636024] text-base hover:text-[#5C0F07] transition"
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