import { useEffect, useRef } from "react";
import styles from "./newAbout.module.css";
import "./newAbout2.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS_DATA = [
  { value: 21, label: "EVENTS CATEGORIES" },
  { value: 250, label: "COMPETING COLLEGES" },
  { value: 45000, label: "TOTAL FOOTFALL" },
  { value: 475000, label: "DIGITAL IMPRESSIONS" },
];

export default function About() {
  const statsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Staggered reveal for the stat shards
    gsap.fromTo(
      `.${styles.statShard}`,
      { opacity: 0, x: 100, skewX: 20 },
      {
        opacity: 1,
        x: 0,
        skewX: -15,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
      }
    );

    // Fixed Number Counter: Animating a separate object prevents the "NaN" glitch
    statsRef.current.forEach((el, idx) => {
      if (!el) return;
      const targetVal = STATS_DATA[idx].value;
      const counter = { val: 0 }; // Proxy object to track the exact number

      gsap.to(counter, {
        val: targetVal,
        duration: 2.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
        },
        onUpdate: function () {
          // Formats the math value cleanly and pushes it to the DOM
          el.innerText = Math.ceil(counter.val).toLocaleString() + "+";
        },
      });
    });
  }, []);

  return (
    <section className={`${styles.aboutSection} dark-theme`} ref={containerRef}>
      <div className={styles.trackLine}></div>
      
      <div className={styles.layoutGrid}>
        {/* Left: The Narrative Core */}
        <div className={styles.narrativeZone}>
          <div className={styles.glitchWrapper}>
            <h1 className={styles.glitchHeader} data-text="ABOUT SPARDHA">
              ABOUT SPARDHA
            </h1>
          </div>
          <h2 className={styles.accentSubtitle}>BUILT FOR THE ONES WHO COMPETE.</h2>
          <div className={styles.textContent}>
            <p>
              Spardha, the annual sports festival of IIT BHU, stands as an arena where raw passion, endurance, and camaraderie converge. Drawing elite collegiate athletes from all corners of the country, it represents one of India's premier student-organized sporting spectacles.
            </p>
            <p>
              Step onto the field to experience electrifying competition, razor-thin finishes, and the relentless drive for excellence. Spardha is not merely a tournament—it is a crucible of sporting character.
            </p>
          </div>
        </div>

        {/* Right: Velocity Stat Shards */}
        <div className={styles.statsZone}>
          {STATS_DATA.map((item, index) => (
            <div key={index} className={styles.statShard}>
              <div className={styles.shardAccent}></div>
              <div className={styles.shardContent}>
                <h3
                  ref={(el) => (statsRef.current[index] = el)}
                  className={styles.statNumber}
                >
                  0
                </h3>
                <span className={styles.statLabel}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}