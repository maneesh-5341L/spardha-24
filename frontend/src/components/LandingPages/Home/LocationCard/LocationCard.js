import styles from "./Location.module.css";
import { FaMapMarkerAlt } from 'react-icons/fa';
import "./extra.css"

const  LocationCard=()=> {
  return (
    <div className={styles.card}>
      {/* Left Section */}
      <div className={styles.left}>
        <h2 className={styles.title}>LOCATION</h2>

        <div className={styles.addressBlock}>
          <div className="location-box">
          <FaMapMarkerAlt className="location-logo" color="black" />
          </div>
          <p className={styles.address}>
            Indian Institute of Technology (BHU) Varanasi <br />
            Banaras Hindu University Campus, <br />
            Varanasi – 221005, Uttar Pradesh, India.
          </p>
        </div>

            <a href="https://maps.app.goo.gl/Xkf8wT3ty3K53FMGA" target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
        <button className={styles.mapButton}>
          <span>OPEN MAP</span>
          <span className={styles.arrow}>→</span>
        </button>
            </a>
      </div>

      {/* Right Section */}
      <div className={styles.right}>
        <img
          src="/images/general/electrical.png" // Place your image in public/images
          alt="IIT BHU Building"
          width={500}
          height={350}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default LocationCard;
