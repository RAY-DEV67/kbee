import LP1 from "../assets/Video_1.mp4";
import LP2 from "../assets/Video_2.mp4";
import LP3 from "../assets/Video_3.mp4";
import LP4 from "../assets/Video_4.mp4";
import LP5 from "../assets/Video_5.mp4";
import LP6 from "../assets/Video_6.mp4";
import LP7 from "../assets/Video_7.mp4";
import LP8 from "../assets/Video_8.mp4";
import LP9 from "../assets/Video_9.mp4";
import LP10 from "../assets/Video_10.mp4";
import LP11 from "../assets/Video_11.mp4";
import LP12 from "../assets/Video12.mp4";
import LP13 from "../assets/Video_1 (1).mp4";
import LP14 from "../assets/Video_2 (1).mp4";
import LP15 from "../assets/Video_3 (1).mp4";
import LP16 from "../assets/newProject.mp4";
import LP17 from "../assets/Video2.mp4";
import LP18 from "../assets/Video3.mp4";
import { Footer } from "../components/footer";

function LatestProjects() {
  return (
    <div>
      <div
        id="newMusicFriday"
        className="mx-[16px] pt-[70px] flex flex-col items-center justify-center"
      >
        <h2 className="flex flex-row text-black gap-3 lg:text-[2.5vw] text-[5vw] my-[16px] justify-center font-semibold">
          All LATEST<p className="text-[#ffd200]">PROJECTS</p>
        </h2>
        <div className="flex flex-col justify-center items-center gap-y-3 lg:flex-row lg:flex-wrap ">
        <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP17} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP18} type="video/mp4" />
          </video>
        <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP16} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP7} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP8} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP14} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP13} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP15} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP9} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP10} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP11} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] top-0 "
          >
            <source src={LP12} type="video/mp4" className="w-[500px]" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP1} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP2} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP3} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP4} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] bg-[white] top-0 "
          >
            <source src={LP5} type="video/mp4" />
          </video>
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-[85vw] lg:w-[45vw] lg:h-[500px] top-0 "
          >
            <source src={LP6} type="video/mp4" className="w-[500px]" />
          </video>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LatestProjects;
