import CloudHero from "./CloudHero";

export default function Hero() {
  return (
    <header className="panel hero">
      <div className="hero__text">
        <div className="hero__lockup">
          <h1 className="hero__title">
            IA
            <br />
            AI
          </h1>
          <div className="hero__sub">
            <p className="hero__subtitle">
              Ingrid&nbsp;Ashida<span className="hero__sep"> | </span>
              <span className="hero__sub2">AI&nbsp;Builder</span>
            </p>
            <p className="hero__intro">Welcome to my website</p>
          </div>
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
