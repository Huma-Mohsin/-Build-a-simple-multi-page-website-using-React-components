import Image from "next/image";
import Link from "next/link";
import styles from "../nav.module.css"; // Import CSS module

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo Section */}
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/navbar/logo.jpeg" // Update with your logo path
            alt="Logo"
            width={120}
            height={120}
            className={styles.logoImg} // Use the CSS module class here
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/tourtypes">
            <span className={styles.navLink}>Tour-Types</span>
          </Link>
        </li>
        <li>
          <Link href="/destinations">
            <span className={styles.navLink}>Destinations</span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className={styles.navLink}>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
