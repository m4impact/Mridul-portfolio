import { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Community from "./pages/Community";

gsap.registerPlugin(ScrollTrigger);

function VideoSection({ src, title, text }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el.querySelector(".content"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          end: "top 20%",
          scrub: true,
        },
      }
    );

    ScrollTrigger.create({
      trigger: el,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });
  }, []);

  return (
    <section ref={ref} style={{ height: "200vh", position: "relative" }}>
      <div style={{ position: "sticky", top: 0, height: "100vh" }}>
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.7)",
          }}
        />

        <div
          className="content"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "5%",
            color: "#fff",
            maxWidth: "600px",
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}

function ParallaxSection({ bg, fg, title }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    gsap.to(el.querySelector(".bg"), {
      y: 100,
      scrollTrigger: {
        trigger: el,
        scrub: true,
      },
    });

    gsap.to(el.querySelector(".fg"), {
      y: -100,
      scrollTrigger: {
        trigger: el,
        scrub: true,
      },
    });
  }, []);

  return (
    <section
      ref={ref}
      style={{ height: "100vh", position: "relative", overflow: "hidden" }}
    >
      <img
        className="bg"
        src={bg}
        style={{
          position: "absolute",
          width: "110%",
          height: "110%",
          objectFit: "cover",
        }}
      />
      <img
        className="fg"
        src={fg}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
      <h1
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          color: "#fff",
        }}
      >
        {title}
      </h1>
    </section>
  );
}

function Horizontal({ images }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const panels = el.querySelector(".panels");

    gsap.to(panels, {
      xPercent: -100 * (images.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: el,
        pin: true,
        scrub: 1,
        end: () => "+=" + el.offsetWidth,
      },
    });
  }, [images.length]);

  return (
    <section ref={ref} style={{ height: "100vh", overflow: "hidden" }}>
      <div
        className="panels"
        style={{
          display: "flex",
          width: `${images.length * 100}vw`,
        }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            style={{
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.05;
    audioRef.current = audio;

    const playAudio = () => {
      audio.play().catch(() => {});
      window.removeEventListener("scroll", playAudio);
    };

    window.addEventListener("scroll", playAudio);
    return () => window.removeEventListener("scroll", playAudio);
  }, []);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}
