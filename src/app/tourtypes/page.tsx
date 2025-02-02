import React from "react"
import Image from "next/image"
import styles from "../tour.module.css"; // Import the CSS module

const TourTypes = () => {
  return (
    <div className={styles.tourTypesContainer}>
      <h2 className={styles.tourTypesTitle}>Explore Our Tour Types</h2>
      <p className={styles.tourTypesDescription}>
        We offer a wide variety of tour types to cater to every traveler&apos;s preferences. Whether you&apos;re seeking adventure, relaxation, or culture, we have something for you!
      </p>
      <div className={styles.tourTypesGrid}>
        {/* Tour Type 1 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour1.jpeg" alt="Adventure Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Adventure Tour</h3>
          <p className={styles.tourDescription}>Explore breathtaking landscapes and embark on thrilling outdoor adventures.</p>
        </div>

        {/* Tour Type 2 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour2.jpeg" alt="Cultural Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Cultural Tour</h3>
          <p className={styles.tourDescription}>Immerse yourself in the rich history and traditions of unique destinations.</p>
        </div>

        {/* Tour Type 3 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour3.webp" alt="Beach Holiday" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Beach Holiday</h3>
          <p className={styles.tourDescription}>Relax on pristine beaches and enjoy sunny coastal destinations.</p>
        </div>

        {/* Tour Type 4 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour4.jpeg" alt="Cruise Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Cruise Tour</h3>
          <p className={styles.tourDescription}>Set sail on luxurious cruises and explore multiple destinations in comfort.</p>
        </div>

        {/* Tour Type 5 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour5.jpeg" alt="Wildlife Safari" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Wildlife Safari</h3>
          <p className={styles.tourDescription}>Go on an exciting safari and discover exotic wildlife in their natural habitats.</p>
        </div>

        {/* Tour Type 6 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour6.jpg" alt="Wellness Retreat" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Wellness Retreat</h3>
          <p className={styles.tourDescription}>Rejuvenate your mind, body, and soul with a peaceful retreat in serene locations.</p>
        </div>

        {/* Tour Type 7 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour7.webp" alt="Luxury Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Luxury Tour</h3>
          <p className={styles.tourDescription}>Indulge in a luxurious vacation with five-star accommodations and exclusive experiences.</p>
        </div>

        {/* Tour Type 8 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour8.jpeg" alt="Family Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Family Tour</h3>
          <p className={styles.tourDescription}>Enjoy family-friendly activities and create memories with your loved ones.</p>
        </div>

        {/* Tour Type 9 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour9.jpeg" alt="Hiking Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Hiking Tour</h3>
          <p className={styles.tourDescription}>Embark on scenic hikes through nature trails and rugged terrains.</p>
        </div>

        {/* Tour Type 10 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour10.jpeg" alt="City Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>City Tour</h3>
          <p className={styles.tourDescription}>Explore the best attractions, museums, and culture in bustling cities.</p>
        </div>

        {/* Tour Type 11 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour11.jpeg" alt="Ski Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Ski Tour</h3>
          <p className={styles.tourDescription}>Experience the thrill of skiing in world-class ski resorts and snowy landscapes.</p>
        </div>

        {/* Tour Type 12 */}
        <div className={styles.tourTypeCard}>
          <Image src="/tourtypes/tour12.jpeg" alt="Food & Wine Tour" className={styles.tourImage} width={500} height={300} />
          <h3 className={styles.tourName}>Food & Wine Tour</h3>
          <p className={styles.tourDescription}>Savor gourmet delicacies and world-renowned wines on an unforgettable culinary journey.</p>
        </div>
      </div>
    </div>
  );
};

export default TourTypes;
