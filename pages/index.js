import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useContext } from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shop name</h1>

        <p className={styles.description}>Shop name!</p>

        <ul className={styles.grid}>
          <li className={styles.card}>
            <a href='#'>
              <img src='/images/spacejelly-tshirt.jpg' alt='Space Jelly Tshirt' />
              <h3>Space Jelly Tshirt</h3>
              <p>Bring Cosmo the space Jellyfish to your wardrobe with this high quality tshirt.</p>
            </a>
          </li>
          df
          <li className={styles.card}>
            <a href='#'>
              <img src='/images/spacejelly-stickers.jpg' alt='Space Jelly Stickers' />
              <h3>Space Jelly Stickers</h3>
              <p>Add some flare to your laptop with a sticker of Cosmo the Space Jellyfish.</p>
            </a>
          </li>
          <li className={styles.card}>
            <a href='#'>
              <img src='/images/spacejelly-combo.jpg' alt='Space Jelly Combo Pack' />
              <h3>Space Jelly Combo</h3>
              <p>Show your love for Cosmo with a tshirt and sticker combo pack!</p>
            </a>
          </li>
        </ul>
      </main>

     
    </div>
  );
}
