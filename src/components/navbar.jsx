import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { Theme, Settheme } from "../App";
import { Link } from "react-router-dom";
import logo from "../assets/kbeelogonbg.png";

export function Navbar() {
  const [showMobile, setshowMobile] = useState(false);
  const [scrolled, setscrolled] = useState();
  const navigate = useNavigate();

  const theme = useContext(Theme);
  const settheme = useContext(Settheme);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setscrolled(true);
      } else {
        setscrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-[100vw] flex flex-col lg:items-center">
      <div
        className={`flex justify-between z-50 px-[1rem] fixed items-center w-[100vw] pt-[1vh] ${
          scrolled
            ? "bg-[#ffffff] navbar mb-[2rem]"
            : "lg:bg-white bg-transparent"
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className="w-[20vw] lg:w-[15vw] my-[-5vh] lg:my-[-10vh]"
        />

        <div
          onClick={() => {
            setshowMobile(true);
          }}
          className="lg:hidden mr-[1rem]"
        >
          <svg
            width="35px"
            height="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="style=linear">
                {" "}
                <g id="menu-strawberry">
                  {" "}
                  <path
                    id="vector"
                    d="M3 6H21"
                    stroke="#000009"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_2"
                    d="M5 12H19"
                    stroke="#000009"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    id="vector_3"
                    d="M7 18H17"
                    stroke="#000009"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
        </div>

        <div className="hidden lg:flex lg:mr-[1rem]">
          <Link to="/" className="nav">
            <p className="text-[1.5vw] font-bold text-[#000009]">Home</p>
          </Link>
          <a href="#about" className="nav">
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">
              About
            </p>
          </a>
          <a href="#clients" className="nav">
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">
              Clients
            </p>
          </a>
          <a href="#newMusicFriday" className="nav">
            <p className="text-[1.5vw] mx-[1rem] font-bold text-[#000009]">
              New Music Friday
            </p>
          </a>
          <Link to="/Contact" className="nav">
            <p className="text-[1.5vw] font-bold text-[#000009]">Contact</p>
          </Link>
        </div>

        <div
          className={
            showMobile
              ? `${
                  theme === "Dark"
                    ? "bg-[#000000] landing2"
                    : theme === "Light"
                    ? "bg-white"
                    : ""
                } h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center ml-[-1rem] fixed show`
              : "bg-[#000009] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
          }
        >
          <div
            className={
              showMobile
                ? `${
                    theme === "Dark"
                      ? "overlay-Dark"
                      : theme === "Light"
                      ? "overlay-Light"
                      : ""
                  } h-[100vh] top-0 w-[100vw] flex flex-col items-center justify-center fixed show`
                : "bg-[#323b0a] h-[100vh] no top-0 w-[100vw] flex flex-col items-center justify-center fixed"
            }
          ></div>
          <p
            className="absolute headingfont text-[#ffd200] top-7 nav text-[5vw] left-[85%]"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            X
          </p>
          <Link
            to="/"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#ffd200] headingfont font-bold">
              Home
            </p>
          </Link>
          <a
            href="#about"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#ffd200] my-[1rem] headingfont font-bold">
              About
            </p>
          </a>
          <a
            href="#clients"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#ffd200] my-[1rem] headingfont font-bold">
              Clients
            </p>
          </a>
          <a
            href="#newMusicFriday"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#ffd200] my-[1rem] headingfont font-bold">
              New Music Friday
            </p>
          </a>
          <Link
            to="/Contact"
            className="nav"
            onClick={() => {
              setshowMobile(false);
            }}
          >
            <p className="text-[6vw] text-[#ffd200] headingfont font-bold">
              Contact
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
