import { useEffect, useRef, useState } from "react";
import "./AboutNew.css";
import ImageSlider from "./ImageSlider";
import Footer from "../Footer/footernew";
import stadiumBg from "./spardha-background.jpeg";
import { FaBolt, FaTrophy, FaUsers } from "react-icons/fa";

const GALLERY_SECTIONS = [
  { title: "Opening", folderName: "about-us-images" },
  { title: "Team-Moments", folderName: "team" },
  { title: "Badminton", folderName: "badminton" },
  { title: "Basketball", folderName: "basketball" },
  { title: "Boxing", folderName: "boxing" },
  { title: "Chess", folderName: "chess" },
  { title: "Football", folderName: "football" },
  { title: "Hockey", folderName: "hockey" },
  { title: "Cricket", folderName: "cricket" },
  { title: "Volleyball", folderName: "volleyball" },
  { title: "Athletics", folderName: "athletics" },
  { title: "Handball", folderName: "handball" },
  { title: "Aquatics", folderName: "aquatics" },
  { title: "Taekwondo", folderName: "taekwondo" },
  { title: "Khokho", folderName: "khokho" },
  { title: "Powerlifting", folderName: "powerlifting" },
  { title: "Closing", folderName: "closing" },
];

const HIGHLIGHTS = [
  {
    title: "HYPE AROUND SPARDHA",
    icon: FaBolt,
    text: "For starters, 2026 will witness the 41st edition of Spardha, a festival which has grown from strength to strength ever since its inception. After all these successful editions, Spardha, today stands as the largest inter-collegiate sporting event of India.",
  },
  {
    title: "THE TALK OF THE TOWN",
    icon: FaUsers,
    text: "Each year thousands of participants at Spardha put their hard work to test in a vast array of sports. If this doesn't catch your attention, the bustle of 45,000 people on the campus streets surely will. Its them who make Spardha the festival it is.",
  },
  {
    title: "WHAT YOU TAKE BACK",
    icon: FaTrophy,
    text: "Every time you win a race, or lose your voice cheering for your team, it adds up to your moments. We at Spardha make sure that you get an experience worth cherishing and some beautiful memories to treasure forever!",
  },
];

const pad = (value) => String(value).padStart(2, "0");

const About = () => {
  const rootRef = useRef(null);
  const chipRefs = useRef({});
  const [activeFolder, setActiveFolder] = useState(
    GALLERY_SECTIONS[0].folderName
  );

  useEffect(() => {
    const root = rootRef.current;

    if (!root) {
      return undefined;
    }

    const blocks = Array.from(
      root.querySelectorAll("[data-gallery-block]")
    );

    if (!blocks.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        const visible = visibleEntries[0];

        if (
          visible &&
          visible.target &&
          visible.target.dataset &&
          visible.target.dataset.folder
        ) {
          setActiveFolder(visible.target.dataset.folder);
        }
      },
      {
        root: null,
        threshold: [0.15, 0.3, 0.5, 0.7],
        rootMargin: "-18% 0px -55% 0px",
      }
    );

    blocks.forEach((block) => observer.observe(block));

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const chip = chipRefs.current[activeFolder];

    if (!chip) {
      return;
    }

    const container = chip.parentElement;

    if (!container) {
      return;
    }

    const chipLeft = chip.offsetLeft;
    const chipWidth = chip.offsetWidth;
    const containerWidth = container.clientWidth;

    const targetLeft =
      chipLeft - containerWidth / 2 + chipWidth / 2;

    container.scrollTo({
      left: Math.max(0, targetLeft),
      behavior: "smooth",
    });
  }, [activeFolder]);

  const handleChipClick = (event, folderName) => {
    event.preventDefault();

    const target = document.getElementById(
      `about-gallery-${folderName}`
    );

    if (!target) {
      return;
    }

    setActiveFolder(folderName);

    const top =
      target.getBoundingClientRect().top +
      window.pageYOffset -
      90;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="about-new"
      ref={rootRef}
      style={{
        "--about-stadium": `url(${stadiumBg})`,
      }}
    >
      <div
        className="about-new__stage"
        aria-hidden="true"
      />

      <div
        className="about-new__rays"
        aria-hidden="true"
      />

      <div
        className="about-new__pitch"
        aria-hidden="true"
      />

      <div
        className="about-new__flood about-new__flood--one"
        aria-hidden="true"
      />

      <div
        className="about-new__flood about-new__flood--two"
        aria-hidden="true"
      />

      <div
        className="about-new__veil"
        aria-hidden="true"
      />

      <div
        className="about-new__grain"
        aria-hidden="true"
      />

      <div
        className="about-new__glow about-new__glow--left"
        aria-hidden="true"
      />

      <div
        className="about-new__glow about-new__glow--right"
        aria-hidden="true"
      />

      <div className="about-new__scroll">
        <div
          className="about-new__ticker"
          aria-hidden="true"
        >
          <div className="about-new__ticker-track">
            {[...GALLERY_SECTIONS, ...GALLERY_SECTIONS].map(
              (section, index) => (
                <span
                  key={`${section.folderName}-${index}`}
                >
                  {section.title}
                </span>
              )
            )}
          </div>
        </div>

        <main className="about-new__main">
          <section className="about-new__hero">
            <div className="about-new__hero-title">
              <span
                className="about-new__heading-ghost"
                aria-hidden="true"
              >
                ABOUT US
              </span>

              <h1 className="about-new__heading">
                ABOUT US
              </h1>

              <span
                className="about-new__hero-rule"
                aria-hidden="true"
              />
            </div>

            <div className="about-new__hero-panel">
              <span
                className="about-new__bracket about-new__bracket--tl"
                aria-hidden="true"
              />

              <span
                className="about-new__bracket about-new__bracket--tr"
                aria-hidden="true"
              />

              <span
                className="about-new__bracket about-new__bracket--bl"
                aria-hidden="true"
              />

              <span
                className="about-new__bracket about-new__bracket--br"
                aria-hidden="true"
              />

              <p className="about-new__para">
                Spardha is the annual sports festival of IIT
                (BHU), Varanasi. In its glorious history of over
                40 years, Spardha has grown to become the largest
                and one of the most awaited sports festival of
                northern India where athletic competition is drawn
                from throughout the country. Each year, over a
                thousand participants compete in an array of sports
                like hockey, basketball, cricket, boxing, tennis
                and many more, creating a stunning spectacle of
                exceptional fervidness in athletic talent. The
                event, embraced by one of the best gatherings of
                celebrated sports personalities and spirited
                audience, has always enthused a zest for
                continuously scaling new zeniths in the pursuit
                of excellence and vibrancy among one and all. At
                present, Spardha has a team of over 500 and is
                also associated with numerous renowned firms and
                sports organizations. These exhilarating days have
                many resounding experiences for participants and
                supporters alike, creating a lifetime of memories.
                Gear up yourself to witness the thrilling and
                frolicsome SPARDHA.
              </p>
            </div>
          </section>

          <section
            className="about-new__cards"
            aria-label="About Spardha highlights"
          >
            {HIGHLIGHTS.map((card, index) => {
              const Icon = card.icon;

              return (
                <article
                  className="about-new__card"
                  key={card.title}
                >
                  <span
                    className="about-new__card-stripes"
                    aria-hidden="true"
                  />

                  <div className="about-new__card-top">
                    <span
                      className="about-new__card-icon"
                      aria-hidden="true"
                    >
                      <Icon />
                    </span>

                    <span className="about-new__card-index">
                      {pad(index + 1)}
                    </span>
                  </div>

                  <p className="about-new__card-title">
                    {card.title}
                  </p>

                  <p className="about-new__para">
                    {card.text}
                  </p>
                </article>
              );
            })}
          </section>

          <section
            className="about-new__gallery"
            aria-label="Spardha gallery"
          >
            <div className="about-new__navdock">
              <nav
                className="about-new__chips"
                aria-label="Gallery categories"
              >
                {GALLERY_SECTIONS.map((section) => (
                  <a
                    className={`about-new__chip${
                      activeFolder === section.folderName
                        ? " is-active"
                        : ""
                    }`}
                    key={`chip-${section.folderName}`}
                    href={`#about-gallery-${section.folderName}`}
                    ref={(node) => {
                      if (node) {
                        chipRefs.current[
                          section.folderName
                        ] = node;
                      }
                    }}
                    onClick={(event) =>
                      handleChipClick(
                        event,
                        section.folderName
                      )
                    }
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>

            {GALLERY_SECTIONS.map((section, index) => (
              <section
                className="about-new__gallery-block"
                id={`about-gallery-${section.folderName}`}
                data-gallery-block="true"
                data-folder={section.folderName}
                key={section.folderName}
              >
                <div className="about-new__gallery-heading">
                  <span
                    className="about-new__gallery-index"
                    aria-hidden="true"
                  >
                    {pad(index + 1)} /{" "}
                    {pad(GALLERY_SECTIONS.length)}
                  </span>

                  <h2 className="about-new__tag">
                    {section.title}
                  </h2>

                  <span
                    className="about-new__accent"
                    aria-hidden="true"
                  />
                </div>

                <ImageSlider
                  folderName={section.folderName}
                  categoryLabel={section.title}
                />
              </section>
            ))}
          </section>
        </main>
      </div>

      <div className="about-new__footer">
        <Footer />
      </div>
    </div>
  );
};

export default About;
