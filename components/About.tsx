import Image from "next/image";

const services = [
  { n: "01", title: "Rapid prototyping", note: "Idea to working demo in days" },
  {
    n: "02",
    title: "Knowledge management & RAG",
    note: "Retrieval that actually retrieves",
  },
  {
    n: "03",
    title: "Bespoke web applications",
    note: "Built around how you work",
  },
];

export default function About() {
  return (
    <section id="about" className="panel bio" data-reveal>
      <div className="bio__portrait">
        <Image
          src="/headshot.jpg"
          alt="Portrait of Ingrid Ashida."
          width={330}
          height={440}
          sizes="(max-width: 900px) 100vw, 330px"
          priority
        />
        <div className="bio__caption">
          <div className="bio__caption-name">INGRID ASHIDA</div>
          <div className="bio__caption-role">AI CONSULTANT &amp; BUILDER</div>
        </div>
      </div>

      <div className="bio__copy">
        <div className="section-label">
          <span className="eyebrow">01</span>
          <span className="eyebrow eyebrow--ink">BIO</span>
        </div>

        <h2 className="display bio__headline" data-snap>
          LET&rsquo;S BUILD
          <br />
          SOMETHING.
        </h2>

        <p className="bio__lede">
          I&rsquo;m an AI builder who helps startup founders, small businesses,
          and creative professionals put AI to work &mdash; practically, and
          faster than you think.
        </p>

        <div className="index">
          {services.map((s) => (
            <div className="index__row" key={s.n}>
              <div className="index__label">
                <span className="index__num">{s.n}</span>
                <span className="index__title">{s.title}</span>
              </div>
              <span className="index__note">{s.note}</span>
            </div>
          ))}
        </div>

        <div className="tags">
          <span className="tag">USC MBA &rsquo;26</span>
          <span className="tag">FOUNDER OF COLLISION</span>
        </div>
      </div>
    </section>
  );
}
