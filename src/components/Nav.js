import { useEffect, useState } from "react";
import { channel } from "../data/content";

export default function Nav() {
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const onScroll = () => setSettled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${settled ? " nav--settled" : ""}`}>
      <div className="nav__inner">
        <a className="nav__mark" href="#top">
          Blossom <em>Within</em>
        </a>
        <ul className="nav__links">
          <li>
            <a href="#kathayen">कथाएँ</a>
          </li>
          <li>
            <a href="#shrinkhala">शृंखलाएँ</a>
          </li>
          <li>
            <a href="#granth">संदर्भ</a>
          </li>
          <li>
            <a href="#parichay">परिचय</a>
          </li>
          <li>
            <a
              className="nav__watch"
              href={channel.url}
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
