import { channel } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Footer() {
  const ref = useReveal();

  return (
    <footer className="foot wrap">
      <div className="reveal" ref={ref}>
        <h2 className="foot__cta">हर हफ़्ते एक नई कथा</h2>

        <div className="foot__links">
          <a
            className="foot__link"
            href={channel.url}
            target="_blank"
            rel="noreferrer"
          >
            YouTube पर सुनिए
          </a>
          <a
            className="foot__link"
            href={channel.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
          <a className="foot__link" href={`mailto:${channel.email}`}>
            लिखिए
          </a>
        </div>
      </div>

      <div className="foot__base">
        <span>
          © {new Date().getFullYear()} {channel.name}
        </span>
        <span>{channel.handle}</span>
      </div>
    </footer>
  );
}
