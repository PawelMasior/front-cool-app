import React, { useState } from "react";
import Link from "next/link";

// Define the props interface
interface MobileMenuProps {
    hiddenClass: string;
    handleRemove: () => void;
  }

const divHeader = "navbar-backdrop fixed inset-0 bg-stone-800 opacity-25";
const navHeader = "fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto transition duration-300";
const ulText = "mobile-menu";
const ulExpand = "block p-4 text-base text-stone-900 hover:bg-stone-50 hover:text-stone-700 font-bold rounded-xl";
const sublinkText = "menu-sub-item text-sm text-stone-900 hover:text-stone-800";

const MobileMenu: React.FC<MobileMenuProps> = ({ hiddenClass, handleRemove }) => {
    const [isActive, setIsActive] = useState<{ status: boolean; key: string }>({ status: false, key: "" });

    const handleToggle = (key: string) => {
        setIsActive(prev => prev.key === key ? { status: false, key: "" } : { status: true, key });
    };

    return (
        <div className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}>
            <div className={divHeader}></div>
            <nav className={navHeader}>
                <button onClick={handleRemove} className="absolute top-4 right-4 text-stone-900">
                    ✖️
                </button>
                <Link href="/" className="leading-none wow animate__animated animate__fadeIn hover-up-2 duration-500">
                    <p className="py-4 lg:text-2xl text-lg font-semibold text-stone-900">🧭 Dalongo</p>
                </Link>
                <div>
                    <ul className={ulText}>
                        {[1, 2].map((key) => (
                            <li key={key} className={`mb-1 menu-item-has-children rounded-xl ${isActive.key === key.toString() ? "active" : ""}`} onClick={() => handleToggle(key.toString())}>
                                <span className="menu-expand">+</span>
                                <Link href="#" className={ulExpand}>🗿 Placeholder_{key}</Link>
                                <ul className={isActive.key === key.toString() ? "dropdown pl-5" : "hidden"}>
                                    {[...Array(3)].map((_, idx) => (
                                        <li key={idx}>
                                            <Link href="/contact" className={sublinkText}>placeholder_{key}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-20 space-y-2 pt-6 border-t border-stone-100">
                        <Link href="/contact">
                            <div className="flex mb-2 p-1 border-stone-600 border-2 rounded-lg w-full justify-center text-base text-stone-900">
                                Contact us
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;
