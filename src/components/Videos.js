import { channel, videos } from "../data/content";
import useReveal from "../hooks/useReveal";

function watchUrl(id) {
  return id ? `https://www.youtube.com/watch?v=${id}` : `${channel.url}/videos`;
}

function Video({ item, index }) {
  const ref = useReveal({ delay: Math.min(index, 4) * 70 });

  return (
    <a
      ref={ref}
      className={`vid reveal${item.scale === "large" ? " vid--large" : ""}`}
      href={watchUrl(item.id)}
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <p className="vid__series">{item.series}</p>
        <h3 className="vid__title">{item.title}</h3>
      </div>
      <div className="vid__meta">
        <span>{item.source}</span>
        <span>{item.length}</span>
      </div>
    </a>
  );
}

export default function Videos() {
  const headRef = useReveal();

  return (
    <section className="section wrap" id="kathayen">
      <div className="sec-head reveal" ref={headRef}>
        <h2>कथाएँ</h2>
        <a href={`${channel.url}/videos`} target="_blank" rel="noreferrer">
          सभी कथाएँ देखिए
        </a>
      </div>

      <div className="videos__grid">
        {videos.map((item, i) => (
          <Video key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
