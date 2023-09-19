"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => {
useEffect(async()=>{
  const url = 'https://moviesdatabase.p.rapidapi.com/titles/utils/lists';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cba0739a46msh7a07a16164e30a0p18afa7jsn2eaeb6143444',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
},[])
  
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
        <Link href="/OurTeam" className={styles.navlink}>
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
