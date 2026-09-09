import styles from "./LocationNew.module.css";

import { FaMapMarkerAlt } from "react-icons/fa";

import "./extra.css";

const LocationCard = () => {

  return (
    <div className={styles.card}>

      <div className={styles.backgroundImage}>
        <img
          src="/images/general/location-image.jpeg"
          alt="IIT BHU"
        />
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.yellowGlow}></div>

      <div className={styles.header}>

        <div className={styles.titleAccent}></div>

        <h2 className={styles.title}>LOCATION</h2>

        <FaMapMarkerAlt className={styles.titleIcon} />

      </div>

      <div className={styles.content}>

        <div className={styles.leftContent}>

          <div className={styles.locationTag}>
            <span></span>
            SPARDHA 2026
          </div>

          <p className={styles.leftText}>
            EXPERIENCE THE ENERGY
            <br />
            OF IIT BHU
          </p>

          <div className={styles.leftLine}></div>

          <p className={styles.leftLocation}>
            VARANASI · UTTAR PRADESH
          </p>

        </div>

        <div className={styles.rightContent}>

          <div className={styles.venueText}>

            <span className={styles.venueSmall}>
              THE VENUE
            </span>

            <h1>
              <span className={styles.venueLine}>
                IIT BHU
              </span>

              <strong className={styles.venueLine}>
                VARANASI
              </strong>
            </h1>

            <div className={styles.venueUnderline}></div>

            <p>IIT (BHU)</p>

          </div>

          <div className={styles.mapArea}>

            <div className={styles.mapTop}>

              <div className={styles.mapTitle}>
                <FaMapMarkerAlt />
                <span>FIND US</span>
              </div>

              <span className={styles.mapPlace}>
                IIT BHU
              </span>

            </div>

            <a
              href="https://maps.app.goo.gl/Xkf8wT3ty3K53FMGA"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <span className={styles.arrow}>↗</span>
            </a>

          </div>

        </div>

      </div>

      <div className={styles.bottomText}>
        <span>INDIAN INSTITUTE OF TECHNOLOGY</span>
        <i></i>
        <span>VARANASI</span>
      </div>

    </div>
  );

};

export default LocationCard;
