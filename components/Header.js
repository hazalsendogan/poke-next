import Link from 'next/link'
import React from 'react'
import styles from "../styles/Header.module.css"
import {Roboto} from "@next/font/google";
const roboto = Roboto({ weight: ["400","500","700"], subsets: ['latin'] });
export default function Header() {
  return (
    <header className={roboto.className}>
       <nav className={styles.navbar}>
        <ul>
          <li><Link href="/" className={styles.link}>Home</Link></li>
          <li><Link href="/berry" className={styles.link}>Berries</Link></li>
        </ul>
       </nav>
        
    </header>
  )
}
