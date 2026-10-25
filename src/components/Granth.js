import { granth } from "../data/reference";
import useReveal from "../hooks/useReveal";

function Column({ col, index }) {
  const ref = useReveal({ delay: index * 90 });

  return (
    <div className="granth__col reveal" ref={ref}>
      <h3 className="granth__title">
        {col.title}
        <span className="granth__gloss">{col.gloss}</span>
      </h3>
      <p className="granth__note">{col.note}</p>

      {col.groups.map((g) => (
        <div className="granth__group" key={g.label}>
          <p className="granth__label">{g.label}</p>
          <ul className="granth__items">
            {g.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default function Granth() {
  const headRef = useReveal();

  return (
    <section className="section wrap" id="granth">
      <div className="sec-head sec-head--stack reveal" ref={headRef}>
        <h2>{granth.heading}</h2>
        <p className="sec-head__stand">{granth.standfirst}</p>
      </div>

      <div className="granth__cols">
        {granth.columns.map((col, i) => (
          <Column key={col.title} col={col} index={i} />
        ))}
      </div>
    </section>
  );
}
