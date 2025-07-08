import {useState} from "react";

function Header() {
    const [showSideNav, setShowSideNav] = useState(false);
    const [showSideNavTab, setShowSideNavTab] = useState(false);
    const [showSideNavMobile, setShowSideNavMobile] = useState(false);

    return (
        <>
            {/* Top Header */}
            <header className="bg-black text-white p-4 fixed top-0 left-0 right-0 shadow-md z-50">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <img
                        src="/Assets/Logos/Logo White.svg"
                        alt="Logo"
                        className="h-10 w-auto mr-3"
                    />

                    {/* Desktop / Tablet Navigation */}
                    <nav className="hidden md:flex justify-center gap-6">
                        <a href="#home" className="hover:underline">HOME</a>
                        <a href="#screens" className="hover:underline">OUR SCREENS</a>
                        <a href="#schedule" className="hover:underline">SCHEDULE</a>
                        <a href="#movies" className="hover:underline">MOVIE LIBRARY</a>

                        {/* LOCATION (hidden in md, visible in lg+) */}
                        <a href="#location" className="hover:underline hidden lg:inline">
                            LOCATION & CONTACT
                        </a>
                    </nav>

                    {/* Gallery - Only visible in side nav */}
                    {/* Hamburger - visible only on mobile/tablet */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setShowSideNav(true)}
                    >
                        <img
                            src="/Assets/Icons/Menu White.svg"
                            alt="Logo"
                            className="h-5 w-auto mr-3"
                        />
                    </button>
                </div>
            </header>

            {/* Side Navigation Overlay */}
            {showSideNav && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={() => setShowSideNav(false)}
                    />

                    {/* Side Drawer */}
                    <div className="fixed top-0 right-0 bottom-0 w-80 bg-black text-white z-50 p-6 flex flex-col gap-6 shadow-lg">
                        <button
                            className="self-end text-white text-2xl"
                            onClick={() => setShowSideNav(false)}
                        >
                            ✕
                        </button>
                        <a href="#home" onClick={() => setShowSideNav(false)}>HOME</a>
                        <a href="#screens" onClick={() => setShowSideNav(false)}>OUR SCREENS</a>
                        <a href="#schedule" onClick={() => setShowSideNav(false)}>SCHEDULE</a>
                        <a href="#movies" onClick={() => setShowSideNav(false)}>MOVIE LIBRARY</a>
                        <a href="#gallery" onClick={() => setShowSideNav(false)}>GALLERY</a>
                        <a href="#location" onClick={() => setShowSideNav(false)}>LOCATION & CONTACT</a>
                    </div>
                </>
            )}


        </>
    );
}

export default Header;
