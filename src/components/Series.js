import { channel, series } from "../data/content";
import useReveal from "../hooks/useReveal";

function listUrl(listId) {
  return listId
    ? `https://www.youtube.com/playlist?list=${listId}`
    : `${channel.url}/playlists`;
}

function Row({ item, index }) {
  const ref = useReveal({ delay: Math.min(index, 5) * 60 });

  return (
    <li ref={ref} className="reveal">
      <a
        className="series__row"
        href={listUrl(item.listId)}
        target="_blank"
        rel="noreferrer"
      >
        <span>
          <span className="series__name">{item.title}</span>
          <span className="series__en">{item.en}</span>
        </span>
        <span className="series__note">{item.note}</span>
        <span className="series__count">{item.count} कथाएँ</span>
      </a>
    </li>
  );
}

export default function Series() {
  const headRef = useReveal();

  return (
    <section className="section wrap" id="shrinkhala">
      <div className="sec-head reveal" ref={headRef}>
        <h2>शृंखलाएँ</h2>
        <a href={`${channel.url}/playlists`} target="_blank" rel="noreferrer">
          सभी शृंखलाएँ
        </a>
      </div>

      <ul className="series__list">
        {series.map((item, i) => (
          <Row key={item.title} item={item} index={i} />
        ))}
      </ul>
    </section>
  );
}
