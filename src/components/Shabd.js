import { shabd } from "../data/reference";
import useReveal from "../hooks/useReveal";

export default function Shabd() {
  const headRef = useReveal();
  const listRef = useReveal();

  return (
    <section className="section wrap" id="shabd">
      <div className="sec-head sec-head--stack reveal" ref={headRef}>
        <h2>{shabd.heading}</h2>
        <p className="sec-head__stand">{shabd.standfirst}</p>
      </div>

      <div className="shabd__list reveal" ref={listRef}>
        {shabd.terms.map((t) => (
          <details className="shabd__row" key={t.word}>
            <summary>
              <span className="shabd__word">{t.word}</span>
              <span className="shabd__cue" aria-hidden="true" />
            </summary>
            <p className="shabd__meaning">{t.meaning}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
