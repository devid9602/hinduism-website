import { about } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section className="section wrap" id="parichay">
      <div className="measure reveal" ref={ref}>
        <h2 className="about__h">{about.heading}</h2>
        <div className="about__body">
          {about.body.map((line) => (
            <p key={line.slice(0, 24)}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
