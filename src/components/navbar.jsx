import logo from "../logo.svg";
import { useEffect, useState } from "react";
import "../App.css";

function Navbar() {
  const [burger, setBurger] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = (event) => {
    event.preventDefault(); // Empêche le rafraîchissement
    console.log("Lien cliqué sans rechargement !");
    // Ajoute ici ta logique de navigation ou autre
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setBurgerState = () => {
    setBurger(!burger);
    console.log(burger);
  };

  return (
    <nav
      className={`grid w-full z-50 max-w-[1530px] ${
        isScrolled
          ? "fixed top-0 left-0 bg-white shadow-md text-black sticky"
          : " top-0 left-0 bg-white "
      }`}
    >
      <div className=" sm:h-8 flex items-center justify-around my-4">
        <p className="2xl:text-2xl xl:text-xl lg:text-lg sm:text-sm font-xs font-semibold text-xs">
          DevUs Lion
        </p>

        <ul className="2xl:text-2xl xl:text-xl lg:text-lg hidden lg:block lg:flex lg:justify-between lg:w-2/5">
          <li className="h-xs">
            <a href="/">Home</a>
          </li>
          <li className="h-xs ">
            <a href="/">About</a>
          </li>
          <li className="h-xs ">
            <a href="/">Services</a>
          </li>
          <li className="h-xs ">
            <a href="/">Blog</a>
          </li>
          <li className="h-xs ">
            <a href="/">Contact</a>
          </li>
          <li className="h-xs ">
            <a href="/">Shop</a>
          </li>
        </ul>

        <div className="lg:w-32 flex items-center  justify-around w-1/5">
          <i class="fa-solid fa-cart-shopping"></i>
          {burger ? (
            <i class="lg:hidden fa-solid fa-x" onClick={setBurgerState}></i>
          ) : (
            <i class="lg:hidden fa-solid fa-bars" onClick={setBurgerState}></i>
          )}
          {/* <i class="fa-solid fa-bars" onClick={setBurgerState}></i>
           */}
        </div>
      </div>

      {burger ? (
        <ul className="lg:hidden">
          <li className="border w-full h-xs flex justify-center">
            <a className="" href="/" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="border-b w-full h-xs flex justify-center">
            <a href="/" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="border-b w-full h-xs flex justify-center">
            <a href="/" onClick={handleClick}>
              Services
            </a>
          </li>
          <li className="border-b w-full h-xs flex justify-center">
            <a href="/" onClick={handleClick}>
              Blog
            </a>
          </li>
          <li className="border-b w-full h-xs flex justify-center">
            <a href="/" onClick={handleClick}>
              Contact
            </a>
          </li>
          <li className="border-b w-full h-xs flex justify-center">
            <a href="/" onClick={handleClick}>
              Shop
            </a>
          </li>
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
}

export default Navbar;
