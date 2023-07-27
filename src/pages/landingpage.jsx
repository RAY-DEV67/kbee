// IMPORT FIRESTRORE //////////////////////////////////
import db from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect, useRef } from "react";
import { Theme } from "../App";
import mayorkun from "../assets/mayorkun.jpg";
import ayojay from "../assets/ayojay.jpg";
import bella from "../assets/bella.jpg";
import ycee from "../assets/Ycee.jpg";
import nmf from "../assets/nmf.jpg";
import nmfv from "../assets/nmfv.mp4";
import timaya from "../assets/timaya.webp";
import majeed from "../assets/majeed.webp";
import mohbad from "../assets/Mohbad.jpg";
import peruzzi from "../assets/Peruzzi.jpeg";
import psychoyp from "../assets/psychoyp.jpg";
import waka from "../assets/waka.jpeg";
import empire from "../assets/empire.jpg";
import onerpm from "../assets/onerpm.png";
import universal from "../assets/universal.jpg";
import warner from "../assets/warner.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { Footer } from "../components/footer";

const AnimatedDiv = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const animatedRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(animatedRef.current);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Change this to change when the animation fires
      }
    );

    if (animatedRef.current) {
      observer.observe(animatedRef.current);
    }

    return () => {
      if (animatedRef.current) {
        observer.unobserve(animatedRef.current);
      }
    };
  }, []);

  return (
    <div className={`${isVisible ? "showhead" : "head"}`} ref={animatedRef}>
      {children}
    </div>
  );
};

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
            src="https://res.cloudinary.com/dvl38skbc/video/upload/v1690442699/kbee/164367753_671352078200615_9120271567644228323_n_1_1_btzagp.mp4"
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
          <Link to="/contact">
            <button className="bg-[#ffd200] w-[45vw] py-[8px] rounded-[20px] text-[2.5vh] mt-[16px] font-semibold">
              Contact Us
            </button>
          </Link>
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
          <Link to="/contact">
            <button className="bg-[#ffd200] w-[200px] py-[8px] rounded-[20px] text-[2.5vh] mt-[16px] font-semibold">
              Contact Us
            </button>
          </Link>
        </div>
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-[100vw] h-[100vh] hidden lg:block bg-[white] top-0 "
        >
          <source
            src="https://res.cloudinary.com/dvl38skbc/video/upload/v1690442699/kbee/164367753_671352078200615_9120271567644228323_n_1_1_btzagp.mp4"
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
            src="https://res.cloudinary.com/dvl38skbc/video/upload/v1690442699/kbee/164367753_671352078200615_9120271567644228323_n_1_1_btzagp.mp4"
            type="video/mp4"
            className="h-[100vh]"
          />
        </video>
      </div>

      <div
        id="about"
        className="my-[2vh] mx-[16px] lg:flex lg:flex-row-reverse justify-center items-center"
      >
        <div className="flex flex-col gap-y-3 mb-[16px]">
          <div className="flex flex-row justify-center gap-3">
            <AnimatedDiv>
              <div className="bg-[#ffd200] w-[45vw] lg:w-[20vw] h-[45vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-l-[50%]">
                <p className="text-[3vw] lg:text-[1.5vw] font-semibold">
                  Music And Media Promotions
                </p>
              </div>
            </AnimatedDiv>
            <div className="bg-[#000000] w-[45vw] lg:w-[20vw] h-[45vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-r-[50%]">
              <p className="text-[3vw] lg:text-[1.5vw] text-white font-semibold">
                Artiste Management And Pr
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-3">
            <div className="bg-[#000000] lg:w-[20vw] w-[45vw] h-[45vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-l-[50%]">
              <p className="text-[3vw] lg:text-[1.5vw] text-white font-semibold">
                Artiste A&R
              </p>
            </div>
            <AnimatedDiv>
              <div className="bg-[#ffd200] lg:w-[20vw] w-[45vw] h-[45vw] lg:h-[40vh] flex flex-row items-center justify-center rounded-r-[50%]">
                <p className="text-[3vw] lg:text-[1.5vw]  font-semibold">
                  Outdoor Advertisement
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center">
            <h2 className="flex flex-row gap-3 text-[5vw] lg:text-[2.5vw] justify-center font-semibold">
              COMPANY <p className="text-[#ffd200]">PROFILE</p>
            </h2>
            <AnimatedDiv>
              <div className="flex flex-row justify-center">
                <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
                  {" "}
                  KBEE Promoworld is a Brand Promotion and Media communication
                  Company that offers a range of quality solutions towards
                  promoting Artists, Encompassing Events, and Promotional
                  campaigns and Marketing Programs.
                </p>
              </div>
            </AnimatedDiv>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="flex flex-row gap-3 text-[5vw] mt-[16px] lg:text-[2.5vw] justify-center font-semibold">
              WHAT WE <p className="text-[#ffd200]">DO</p>
            </h2>
            <AnimatedDiv>
              <div className="flex flex-row justify-center">
                <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
                  {" "}
                  KBEE Promo World is a full- Service Promotions Agency that
                  offers Strategic Marketing support, Creative development and
                  Renegade Marketing, Social Media Influence and
                  Electronic/Print Media promotions to local and international
                  publics. Movie promotions | Bus branding | Concert promotions
                  Event management | Talent management{" "}
                </p>
              </div>
            </AnimatedDiv>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row justify-center lg:items-start flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-[90%]">
          <h2 className="flex flex-row gap-3 text-[5vw] lg:text-[2.5vw] mt-[16px] justify-center font-semibold">
            PROMOTIONAL <p className="text-[#ffd200]">TOOLS</p>
          </h2>
          <AnimatedDiv>
            <div className="flex flex-col justify-center items-center">
              <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
                • Promoting songs Online (Songs & Videos on Any sites/Blogs).
              </p>
              <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
                • Radio and TV, Billboard Sponsor Ads for Events
              </p>
              <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
                • Itunes, Spotify, Music Plus, etc. (Sell your Music and get
                paid)
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
          </AnimatedDiv>
        </div>

        <div className="flex flex-col items-center justify-center w-[90%]">
          <h2 className="flex flex-row gap-3 lg:text-[2.5vw] text-[5vw] mt-[16px] justify-center font-semibold">
            OUR <p className="text-[#ffd200]">PROJECTS</p>
          </h2>

          <AnimatedDiv>
            <div className="flex flex-row justify-center">
              <p className="text-[3vw] lg:text-[1.5vw] w-[90%] text-center">
                KBEE Promoworld through its hard work and immeasurable efforts
                aided the promotion of Timaya's COLD OUTSIDE, ,TJAN's ADUKE,
                Ycee's JUICE, Chike's EGO OYIBO, Diamond Platinumz's MY BABY,
                Majeed's GBESE, Peruzzi's HYPERTENSION, Wendy Shays's HEAVEN,
                Efya's SUPER SUPER, Bella Shmurda's DND, Mohbad's ASK ABOUT ME &
                PARIWO to name a few.
              </p>
            </div>
          </AnimatedDiv>
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

      <div id="promotions">
        <h2 className="flex flex-row gap-3 lg:text-[2.5vw] text-[5vw] mt-[16px] justify-center font-semibold">
          MUSIC <p className="text-[#ffd200]">PROMOTIONS</p>
        </h2>

        <div className="slider">
          <div className="slide-track2">
            {/* SLIDES///// */}
            <div className="slide softtools my-[16px]">
              <img src={majeed} alt="majeed" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={mohbad} alt="mohbad" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={peruzzi} alt="peruzzi" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={psychoyp} alt="psychoyp" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={waka} alt="waka" />
            </div>
            {/* SAME SLIDES (DOUBLED)//////// */}
            <div className="slide softtools my-[16px]">
              <img src={majeed} alt="majeed" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={mohbad} alt="mohbad" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={peruzzi} alt="peruzzi" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={psychoyp} alt="psychoyp" />
            </div>
            <div className="slide softtools my-[16px]">
              <img src={waka} alt="waka" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-[16px] mb-[32px]">
        <h2 className="flex flex-row gap-3 lg:text-[2.5vw] text-[5vw] mt-[16px] justify-center font-semibold">
          BRANDS WE WORK <p className="text-[#ffd200]">WITH</p>
        </h2>
        <div className="flex flex-row justify-between items-center">
          <img src={empire} alt="Empire" className="w-[20vw]" />
          <img src={onerpm} alt="One Rpm" className="w-[20vw]" />
          <img src={universal} alt="Universal" className="w-[20vw]" />
          <img src={warner} alt="Warner Music" className="w-[30vw]" />
        </div>
      </div>

      <div
        id="newMusicFriday"
        className="mx-[16px] flex flex-col items-center justify-center"
      >
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
