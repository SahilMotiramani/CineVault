import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div>
         <a href="https://www.linkedin.com/in/dev-gaonkar" target='_blank'>Contact</a>
      </div>
      <div>
         <p>CineVault is your go-to destination for browsing an extensive collection of over 10,000 movies. Discover films across various genres, from timeless classics to the latest releases, all in one place. No registration or payment required—just dive in and find your next favorite film. Explore the world of cinema with CineVault and enjoy a seamless browsing experience.</p>
      </div> 
      <div>
        <p>© CineVault</p>
      </div>
    </div>
  )
}

export default Footer
