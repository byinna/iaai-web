export default function Contact() {
  return (
    <section id="contact" className="contact" data-reveal>
      <div>
        <div className="contact__eyebrow">
          <span className="n">03</span>
          <span className="l">CONTACT</span>
        </div>
        <h2 className="display contact__title" data-snap>
          GET IN TOUCH.
        </h2>
      </div>

      <div className="contact__links">
        <a className="contact__email" href="mailto:ingrid@ia-ai.pro">
          ingrid@ia-ai.pro
        </a>
        <a
          className="contact__social"
          href="https://www.linkedin.com/in/ingrid-ashida/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LINKEDIN &rarr;
        </a>
        <a
          className="contact__social"
          href="https://github.com/byinna"
          target="_blank"
          rel="noopener noreferrer"
        >
          GITHUB &rarr;
        </a>
      </div>
    </section>
  );
}
