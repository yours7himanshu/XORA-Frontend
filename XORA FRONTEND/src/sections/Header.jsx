import React, { useState } from "react";
import logo from "/images/xora.svg";
import NavLink from "../components/NavLink";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";
import { useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScroll,setHasScroll]=useState(false);

  useEffect(()=>{
   const handleScroll = ()=>{
    setHasScroll(window.scrollY > 32)
   }

  window.addEventListener('scroll',handleScroll);

  return ()=>{
    window.removeEventListener('scroll',handleScroll)
  }

  },[])

  return (
    <header className={clsx("fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4 ", hasScroll && "py-2 bg-black-100 backdrop-blur-[8px]  " )}>
      <div className="container flex h-14 items-center max-lg:px-5">
        <a className="lg:hidden flex-1 cursor-pointer z-2">
          <img src={logo} width={115} height={55} alt="logo" />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none"
          )}
        >
          <div className=" max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
            <nav className=" max-lg:relative max-lg:z-2 max-lg:my-auto ">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink onClick={()=>{setIsOpen(false)}} title="features" />
                  <div className="dot"></div>

                  <NavLink onClick={()=>{setIsOpen(false)}} title="Pricing" />
                </li>

                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-250}
                    
                    spy
                    smooth
                    className={clsx(
                      "max-lg:hidden transition-transform duration-500 cursor-pointer"
                    )}
                  >
                    <img
                      src="/images/xora.svg"
                      width={160}
                      height={55}
                      alt="logo"
                    />
                  </LinkScroll>
                </li>

                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot"></div>
                  <NavLink title="Downloads" />
                </li>
              </ul>
            </nav>
            <div className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290] translate-y-1/2 rotate-90 ">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={360}
                className="relative z-2"
                alt="outline"
              />

              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={360}
                className="absolute inset-0 mix-blend-soft-light opacity-5"
                alt="outline"
              />
            </div>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
