"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const navLinks = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Technology",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
];

export default function Header() {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <header className={styles.header}>
      <nav
        aria-label="Primary"
        className={`${styles.header__nav} ${
          showHamburgerMenu && styles.displayBlock
        }`}
      >
        <ul className={styles.header__navUl}>
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <Link className={styles.header__navLink} href={link.href}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Image
        src="/tripoint_logo.svg"
        width={86}
        height={24}
        alt="Tripoint logo"
      />
      <nav aria-label="Secondary" className={styles.header__iconLinks}>
        <ul className={styles.iconLinksList}>
          <li className={styles.iconLinksList__item}>
            <Link href="/" aria-labelledby="">
              <Image
                src="/search.svg"
                width={24}
                height={24}
                alt="Search"
                className={styles.iconLinks__icon}
              />
            </Link>
          </li>
          <li className={styles.iconLinksList__item}>
            <Link href="/">
              <Image
                src="/shopping-bag.svg"
                width={24}
                height={24}
                alt="Shopping Bag"
                className={styles.iconLinks__icon}
              />
            </Link>
          </li>
          <li
            onClick={() => setShowHamburgerMenu((prev) => !prev)}
            className={`${styles.hamburgerMenuIcon} ${styles.iconLinksList__item}`}
          >
            <Image
              src="/menu.svg"
              width={24}
              height={24}
              alt="Show/hide menu"
              className={styles.iconLinks__icon}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}
