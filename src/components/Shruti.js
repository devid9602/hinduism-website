import { shruti } from "../data/content";
import useReveal from "../hooks/useReveal";

export default function Shruti() {
  const ref = useReveal();

  return (
    <section className="shruti section">
      <div className="wrap reveal" ref={ref}>
        <h2 className="shruti__h">{shruti.heading}</h2>
        <div className="shruti__body">
          <p>{shruti.body}</p>
          <p>{shruti.body2}</p>
        </div>
      </div>
    </section>
  );
}
