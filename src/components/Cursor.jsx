import { useRef, useEffect } from "react";

export default function Cursor() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const onMove = (e) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
      const hoverable = e.target.closest("a,button,.project-row,.contact-link,.service-card,.tier-card");
      document.body.classList.toggle("cursor-hover", !!hoverable);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", () => { el.style.opacity = "0"; });
    document.addEventListener("mouseenter", () => { el.style.opacity = "1"; });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);
  return <div ref={ref} id="cursor" aria-hidden="true" />;
}
