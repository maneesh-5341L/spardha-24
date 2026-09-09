import { useEffect, useRef } from "react";
import styles from "./About.module.css";
import "./About2.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const statsRef = useRef([]);

useEffect(() => {
  statsRef.current.forEach((el, idx) => {
    const endValues = [21, 250, 45000, 475000];
    gsap.fromTo(
      el,
      { innerText: 0 },
      {
        innerText: endValues[idx],
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "restart pause resume reset", // <-- resets on scroll up/down
        },
        snap: { innerText: 1 },
        onUpdate: function () {
          el.innerText = Math.floor(el.innerText).toLocaleString();
        },
      }
    );
  });
}, []);

  return (
    <section className={styles.about}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.heading_a}>ABOUT US</div>
        <div className={styles.textContent}>
          <p className={styles.boldText}>
            Spardha, the annual sports fest of IIT BHU, is a celebration of
            passion, endurance, and teamwork. Bringing together athletes from
            across the country, it stands as one of the largest student-organized
            sports festivals in India. With a perfect blend of competition and
            camaraderie, Spardha provides a platform where talent meets
            opportunity, inspiring participants to push their limits and embrace
            the true spirit of sportsmanship.
          </p>
          <h3 className={styles.subTitle}>What To Expect?</h3>
          <p className={styles.normalText}>
            "At Spardha, expect electrifying competitions, thrilling matches, and
            a vibrant atmosphere filled with energy and enthusiasm. From intense
            sporting clashes to fun-filled events, the fest offers something for
            everyone. Witness unmatched talent, cheer for your favorites, and
            experience the spirit of sportsmanship like never before."
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottomSection}>
        <div className={styles.imageBox}>
          <div className="pentagon-flipped light-theme"></div>
          <div className="pentagon-not-flipped light-theme"></div>
          <img src="/images/general/image.jpg" alt="Spardha" className={styles.image} />
          <div className={styles.imageOverlay}>
            <p className={styles.image_data}>
              Spardha <br />
              The Premier <br />
              Collegiate Sports <br />
              Fest Of IIT BHU
            </p>
          </div>
          <div className={styles.statsBox}>
            <div>
              <h2 ref={el => statsRef.current[0] = el}>21</h2>
              <p>Events</p>
            </div>
            <div>
              <h2 ref={el => statsRef.current[1] = el}>250</h2>
              <p>REG. College</p>
            </div>
            <div>
              <h2 ref={el => statsRef.current[2] = el}>45,000</h2>
              <p>Footfall</p>
            </div>
            <div>
              <h2 ref={el => statsRef.current[3] = el}>475,000</h2>
              <p>Reach</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}