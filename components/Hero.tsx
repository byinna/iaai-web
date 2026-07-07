import CloudHero from "./CloudHero";

export default function Hero() {
  return (
    <header className="panel hero">
      <div className="hero__text">
        <div className="hero__topbar">
          <span className="hero__name">INGRID ASHIDA</span>
          <span className="hero__role">AI CONSULTANT</span>
        </div>

        <div className="hero__lockup">
          <h1 className="hero__title">
            IA
            <br />
            AI
          </h1>
          <p className="hero__intro">
            Welcome to Ingrid Ashida&rsquo;s portfolio &mdash; selected
            AI&#8209;powered projects.
          </p>
        </div>

        <nav className="nav" aria-label="Primary">
          <a href="#work" className="is-active">
            WORK
          </a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      <CloudHero />
    </header>
  );
}
