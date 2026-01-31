"use client";

//Next
import Image from "next/image";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <header className="bg-white relative z-50">
      {menuOpen && (
        <div className="absolute top-0 left-0 bg-amber-600 p-5 h-screen w-[40%] md:hidden">
          <button className="cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Image
              src="/img/icon-close.svg"
              alt="X Logo"
              width={25}
              height={25}
            />
          </button>
          <ul className="my-12 font-semibold opacity-60 flex flex-col gap-3">
            <li className="cursor-pointer">Collections</li>
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
        </div>
      )}
      <nav className="flex items-center justify-between my-6 px-10 md:px-15">
        <div className="flex items-center gap-4">
          <button
            className="block md:hidden cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <Image
              src="/img/icon-menu.svg"
              alt="Menu Logo"
              width={30}
              height={30}
            />
          </button>
          <Image
            src="/img/logo.svg"
            alt="Sneakers Logo"
            width={150}
            height={150}
          />
          <div className="hidden md:flex gap-10 md:gap-5 xl:ml-10 items-center opacity-60 font-semibold xl:gap-15">
            <p className="cursor-pointer">Collections</p>
            <p className="cursor-pointer">Men</p>
            <p className="cursor-pointer">Women</p>
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Contact</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/img/icon-cart.svg"
            alt="Cart Logo"
            width={30}
            height={30}
          />
          <Image
            src="/img/image-avatar.png"
            alt="Avatar Logo"
            width={40}
            height={40}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
