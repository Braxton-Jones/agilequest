"use client";
import Link from "next/link";
import Image from "next/image";
import classnames from "./menu.module.scss";
import { useTheme } from "next-themes";
import menuSVG from "@/public/menu.svg";
import { useState } from "react";

export default function Menu() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <div className={classnames.menu}>
        <div className={classnames.menu__icon} onClick={handleMenuToggle}>
          <Image src={menuSVG} alt="Settings" width={30} height={30} />
        </div>

        {isMenuOpen && (
          <div className={classnames.settings__dropdown}>
            <button
              onClick={() => setTheme("light")}
              className={classnames.menu_item}
            >
              Theme
            </button>
            <Link href="dashboard/?settings=true" className={classnames.menu_item}>
              Settings
            </Link>
            <Link href="/api/auth/logout" className={classnames.menu_item}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
