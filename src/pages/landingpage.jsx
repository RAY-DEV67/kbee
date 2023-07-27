// IMPORT FIRESTRORE //////////////////////////////////
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { Theme } from "../App";
import mayorkun from "../assets/mayorkun.jpg";
import ayojay from "../assets/ayojay.jpg";
import bella from "../assets/bella.jpg";
import ycee from "../assets/ycee.jpg";
import nmf from "../assets/nmf.jpg";
import nmfv from "../assets/nmfv.mp4";
import timaya from "../assets/timaya.webp";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import LoadingSpinner from "../components/spinner";
import { Footer } from "../components/footer";

export function LandingPage() {
  const theme = useContext(Theme);
  const [email, setemail] = useState("");
  const [loading, setloading] = useState(false);
  const [welcome, setwelcome] = useState(false);

  const upload = async () => {
    setloading(true);
    await addDoc(collection(db, "Email"), {
      Email: email,
    });
    setloading(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    upload();
    setwelcome(true);
    setTimeout(() => {
      setwelcome(false);
    }, 4000);
  };

  return (
    <div className="bg-[#ffffff] text-[#000009]">
      <div className="relative">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-[100vw] lg:hidden bg-[white] top-0 "
        >
          <source
            src="https://res.cloudinary.com/dvl38skbc/video/upload/v1690358616/kbee/164367753_671352078200615_9120271567644228323_n_1_ti3hno.mp4"
            type="video/mp4"
          />
        </video>
        <div className="bg-black bg-opacity-60 h-[100%] w-[100vw] absolute z-40 top-0 flex-col pb-[5vh] px-[16px] justify-end flex">
          <h1 className="text-[4vw] relative z-50 text-white flex flex-row gap-x-3 items-center">
            WELCOME TO{" "}
            <span className="text-[#ffd200] text-[7vw] mt-[-2h] font-semibold">
              {" "}
              KBEE{" "}
            </span>{" "}
            PROMOTIONS
          </h1>
          <h1 className="text-[4vw] mt-[-5.5vw] relative z-50 text-transparent flex flex-row gap-x-3 items-center">
            WELCOME TO{" "}
            <span className="text-[#ffd200] text-[7vw] mt-[-1h] font-semibold">
              {" "}
              KBEE{" "}
            </span>{" "}
            PROMOTIONS
          </h1>
          <button className="bg-[#ffd200] w-[45vw] py-[8px] rounded-[20px] text-[2.5vh] mt-[16px] font-semibold">
            Contact Us
          </button>
        </div>
      </div>

      <div className="flex-row hidden lg:flex">
        <div className="bg-black bg-opacity-60 h-[100%] w-[100vw] absolute z-40 top-0 flex-col pb-[5vh] px-[16px] justify-end flex">
          <h1 className="text-[3vw] relative z-50 text-white flex flex-row gap-x-3 items-center">
            WELCOME TO{" "}
            <span className="text-[#ffd200] text-[6vw] mt-[-1h] font-semibold">
              {" "}
              KBEE{" "}
            </span>{" "}
            PROMOTIONS
          </h1>
          <button className="bg-[#ffd200] w-[200px] py-[8px] rounded-l-[20px] text-[2.5vh] mt-[16px] font-semibold">
            Contact Us
          </button>
        </div>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-[100vw] h-[100vh] hidden lg:block bg-[white] top-0 "
        >
          <source
            src="https://res.cloudinary.com/dvl38skbc/video/upload/v1690358616/kbee/164367753_671352078200615_9120271567644228323_n_1_ti3hno.mp4"
            type="video/mp4"
            className="h-[100vh]"
          />
        </video>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-[100vw] h-[100vh] hidden lg:block bg-[white] top-0 "
        >
          <source
            src="https://res.cloudinary.com/dvl38skbc/video/upload/v1690358616/kbee/164367753_671352078200615_9120271567644228323_n_1_ti3hno.mp4"
            type="video/mp4"
            className="h-[100vh]"
          />
        </video>
      </div>

      <div id="about" className="my-[2vh] mx-[16px] lg:flex lg:flex-row-reverse justify-center items-center">
        <div className="flex flex-col gap-y-3 mb-[16px]">
          <div className="flex flex-row justify-center gap-3">
            <div className="bg-[#ffd200] w-[45vw] lg:w-[20vw] h-[55vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-l-[50%]">
              <p className="text-[3vw] lg:text-[1.5vw] font-semibold">
                Music And Media Promotions
              </p>
            </div>
            <div className="bg-[#000000] w-[45vw] lg:w-[20vw] h-[55vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-r-[50%]">
              <p className="text-[3vw] lg:text-[1.5vw] text-white font-semibold">
                Artiste Management And Pr
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-3">
            <div className="bg-[#000000] lg:w-[20vw] w-[45vw] h-[55vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-l-[50%]">
              <p className="text-[3vw] lg:text-[1.5vw] text-white font-semibold">
                Artiste A&R
              </p>
            </div>
            <div className="bg-[#ffd200] lg:w-[20vw] w-[45vw] h-[55vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-r-[50%]">
              <p className="text-[3vw] lg:text-[1.5vw]  font-semibold">
                Outdoor Advertisement
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="flex flex-row gap-3 text-[5vw] lg:text-[2.5vw] justify-center font-semibold">
              COMPANY <p className="text-[#ffd200]">PROFILE</p>
            </h2>
            <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
              {" "}
              KBEE Promoworld is a Brand Promotion and Media communication
              Company that offers a range of quality solutions towards promoting
              Artists, Encompassing Events, and Promotional campaigns and
              Marketing Programs.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="flex flex-row gap-3 text-[5vw] mt-[16px] lg:text-[2.5vw] justify-center font-semibold">
              WHAT WE <p className="text-[#ffd200]">DO</p>
            </h2>
            <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
              {" "}
              KBEE Promo World is a full- Service Promotions Agency that offers
              Strategic Marketing support, Creative development and Renegade
              Marketing, Social Media Influence and Electronic/Print Media
              promotions to local and international publics. Movie promotions |
              Bus branding | Concert promotions Event management | Talent
              management{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row justify-center lg:items-start flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-[90%]">
          <h2 className="flex flex-row gap-3 text-[5vw] lg:text-[2.5vw] mt-[16px] justify-center font-semibold">
            PROMOTIONAL <p className="text-[#ffd200]">TOOLS</p>
          </h2>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            • Promoting songs Online (Songs & Videos on Any sites/Blogs).
          </p>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            • Radio and TV, Billboard Sponsor Ads for Events
          </p>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            • Itunes, Spotify, Music Plus, etc. (Sell your Music and get paid)
          </p>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            • Facebook &Instagram Ads.
          </p>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            • Burst YouTube views, likes, comments. • Twitter Trend.
          </p>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            • Online DJ Mix.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-[90%]">
          <h2 className="flex flex-row gap-3 lg:text-[2.5vw] text-[5vw] mt-[16px] justify-center font-semibold">
            OUR <p className="text-[#ffd200]">PROJECTS</p>
          </h2>
          <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
            KBEE Promoworld through its hard work and immeasurable efforts aided
            the promotion of Timaya’s COLD OUTSIDE, Bellashmurda’s latest ep
            ,TJAN’s ADUKE, Ycee’s JUICE, Mayorkun’s MAMA, Ayo Jay’s YOUR NUMBER
            REMIX, Wale Turner’s NO to name a few.
          </p>
        </div>
      </div>

      <div id="clients">
        <h2 className="flex flex-row gap-3 lg:text-[2.5vw] text-[5vw] mt-[16px] justify-center font-semibold">
          SOME OF OUR <p className="text-[#ffd200]">CLIENTS</p>
        </h2>

        <div className="slider">
          <div className="slide-track">
            {/* SLIDES///// */}
            <div className="slide softtools my-[16px]">
              <img src={mayorkun} alt="mayorkun" />
              <h5 className="text-[3vw] lg:text-[2vh] my-[16px] md:text-[2vh]">
                MAYORKUN
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={ayojay} alt="Ayojay" />
              <h5 className="text-[3vw] lg:text-[2vh] my-[16px] md:text-[2vh]">
                AYO JAY
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={ycee} alt="Ycee" />
              <h5 className="text-[3vw] lg:text-[2vh] my-[16px] md:text-[2vh]">
                YCEE
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={timaya} alt="TImaya" />
              <h5 className="text-[3vw] lg:text-[2vh] my-[16px] md:text-[2vh]">
                TIMAYA
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={bella} alt="Bella" />
              <h5 className="text-[3vw] lg:text-[2vh] my-[16px] md:text-[2vh]">
                BELLA SHMURDA
              </h5>
            </div>
            {/* SAME SLIDES (DOUBLED)//////// */}
            <div className="slide softtools my-[16px]">
              <img src={mayorkun} alt="mayorkun" />
              <h5 className="text-[3vw] lg:text-[2vh] md:text-[2vh] my-[16px]">
                MAYORKUN
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={ayojay} alt="Ayojay" />
              <h5 className="text-[3vw] lg:text-[2vh] md:text-[2vh] my-[16px]">
                AYO JAY
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={ycee} alt="Ycee" />
              <h5 className="text-[3vw] lg:text-[2vh] md:text-[2vh] my-[16px]">
                YCEE
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={timaya} alt="TImaya" />
              <h5 className="text-[3vw] lg:text-[2vh] md:text-[2vh] my-[16px]">
                TIMAYA
              </h5>
            </div>
            <div className="slide softtools my-[16px]">
              <img src={bella} alt="Bella" />
              <h5 className="text-[3vw] lg:text-[2vh] md:text-[2vh] my-[16px]">
                BELLA SHMURDA
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div id="newMusicFriday" className="mx-[16px] flex flex-col items-center justify-center">
        <h2 className="flex flex-row gap-3 lg:text-[2.5vw] text-[5vw] mt-[16px] justify-center font-semibold">
          NEW MUSIC<p className="text-[#ffd200]">FRIDAY</p>
        </h2>
        <div className="lg:flex lg:flex-row gap-3 mt-[16px] justify-center items-center">
          <img src={nmf} alt="New Music Friday" className="lg:w-[45vw]" />
          <video
            autoPlay
            muted
            playsInline
            loop
            className="lg:w-[45vw] mt-[16px] lg:mt-[0px]"
          >
            <source src={nmfv} type="video/mp4" />
          </video>
        </div>
      </div>

      <Footer /> 
    </div>
  );
}
