import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div>
        <h3 style={{ color: "gray" }}> AksTechnology</h3>
      </div>

      <div>
        <Link href="/" className={styles.navlink}>
          Home
        </Link>
      </div>
      <div>
        <Link href="/About" className={styles.navlink}>
          Our Team
        </Link>
      </div>
      <div>
        <Link href="/Projects" className={styles.navlink}>
          Products
        </Link>
      </div>
      <div>
        <Link href="/Contact" className={styles.navlink}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Header;
