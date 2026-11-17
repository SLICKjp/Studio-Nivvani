import { useEffect } from "react";
import "./home.css";
import HnHeader from "./HnHeader";
import HnConnect from "./HnConnect";
import HnFooter from "./HnFooter";

// Shared shell for every page: header, scroll-reveal animations, closing
// call-to-action and footer.
const Page = ({ children, connect = true }) => {
  useEffect(() => {
    const els = document.querySelectorAll(".hn-reveal:not(.hn-is-visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("hn-is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // also reveal anything already scrolled past
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.classList.add("hn-is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="hn">
      <HnHeader />
      <main>{children}</main>
      {connect && <HnConnect />}
      <HnFooter />
    </div>
  );
};

export default Page;
