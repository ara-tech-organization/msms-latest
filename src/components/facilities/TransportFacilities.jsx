import React from "react";
import styles from "./TransportFacilities.module.css";
import transport1 from "../../assets/images/Transport.webp"; // Only one image

const TransportFacilities = () => {
  return (
    <section className={styles.transportSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Transport Facilities</h2>
          <p className={styles.description}>
            At Morning Star Matriculation School, we provide a safe, reliable, and well-organized transportation service to ensure a smooth and stress-free commute for our students.
          </p>
          <p className={styles.description}>
            Our well-maintained fleet of school buses covers multiple routes across Thanjavur, making daily travel convenient and accessible for students from various locations.
          </p>

          <h3 className={styles.tableHeading}>Each bus is equipped with:</h3>
          <ul className={styles.listings}>
            <li>✅ GPS tracking for real-time monitoring</li>
            <li>✅ CCTV cameras for enhanced security</li>
            <li>✅ First-aid kits for emergency readiness</li>
          </ul>
          <p>Our professional drivers and trained attendants are committed to student safety, maintaining discipline, and offering attentive care throughout every journey.</p>
          {/* <div className={styles.tableWrapper}>
            <table className={styles.routesTable}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Boarding Point</th>
                  <th>Stops</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Old Bus Stand - New Bus Stand</td>
                  <td>Railway Junction, R.R Nagar, Cauvery Nagar</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>New Bus Stand - Vallam</td>
                  <td>Devaram Nagar, CG Vila Nagar</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Old Bus Stand - Medical</td>
                  <td>Rohini Hospital, EB Colony</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Old Bus Stand - Thiruvaiyaru</td>
                  <td>Karanthai, Palliagraharam, Kandiyur</td>
                </tr>
              </tbody>
            </table>
          </div> */}
        </div>

        <div className={styles.rightImage}>
          <img src={transport1} alt="School Bus" className={styles.singleImage} />
        </div>
      </div>
    </section>
  );
};

export default TransportFacilities;
