import { darshan } from "../data/reference";
import useReveal from "../hooks/useReveal";

function Group({ group, index }) {
  const ref = useReveal({ delay: index * 90 });

  return (
    <div className="darshan__group reveal" ref={ref}>
      <div className="darshan__groupHead">
        <h3>{group.label}</h3>
        <p>{group.note}</p>
      </div>

      <ul className="darshan__list">
        {group.schools.map((s) => (
          <li key={s.name}>
            <span className="darshan__name">
              {s.name}
              <span className="darshan__by">{s.by}</span>
            </span>
            <span className="darshan__line">{s.line}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Darshan() {
  const headRef = useReveal();
  const noteRef = useReveal();

  return (
    <section className="section wrap" id="darshan">
      <div className="sec-head sec-head--stack reveal" ref={headRef}>
        <h2>{darshan.heading}</h2>
        <p className="sec-head__stand">{darshan.standfirst}</p>
      </div>

      {darshan.groups.map((g, i) => (
        <Group key={g.label} group={g} index={i} />
      ))}

      <div className="darshan__aside reveal" ref={noteRef}>
        <p className="granth__label">{darshan.vedantaNote.label}</p>
        <ul className="darshan__asideList">
          {darshan.vedantaNote.items.map((it) => (
            <li key={it}>{it}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
