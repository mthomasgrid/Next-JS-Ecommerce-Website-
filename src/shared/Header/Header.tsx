import React from "react";
import Image from "next/image";
import "./Header.css";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="topbar-left">
          <div className="topbar-left__content">
            <Image
              src="/icons/mail.svg"
              alt="mail icon"
              width={14}
              height={12}
            />
            <p>mthomas&#64;gmail.com</p>
          </div>
          <div className="topbar-left__content">
            <Image
              src="/icons/phone.svg"
              alt="mail icon"
              width={16}
              height={16}
            />
            <p>(12345)67890</p>
          </div>
        </div>
        <div className="topbar-right">
          <ul className="topbar-right__content">
            <li>
              <a href="">English</a>
            </li>
            <li>
              <a href="">USD</a>
            </li>
            <li className="con">
              <a href="">
                Login
                <Image
                  src="/icons/login.svg"
                  alt="mail icon"
                  width={16}
                  height={16}
                />
              </a>
            </li>
            <li>
              <a href="">
                Whislist
                <Image
                  src="/icons/whislist.svg"
                  alt="mail icon"
                  width={16}
                  height={16}
                />
              </a>
            </li>
            <li>
              <Link href="/Cart">
                <Image
                  src="/icons/cart.svg"
                  alt="mail icon"
                  width={16}
                  height={16}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <nav className="navbar">
        <div className="navbar-left">
          <div className="logo">
            <Link href="/">
            <Image
              src="/assets/Hekto.png"
              alt="Website Logo"
              width={100}
              height={27}
            /></Link>
          </div>
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <div className="navbar-right-wrapper">
            <input
              type="text"
              name="text"
              placeholder="Search"
              className="input-search"
            />
            <button className="navbar-btn">
              <Image
                src="/icons/search.svg"
                alt="mail icon"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
