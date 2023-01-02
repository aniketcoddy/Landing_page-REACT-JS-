import React from 'react'
import Head from "./Header.module.css";
export default function Header() {
  return (
    <div>
       <div className={Head.container}>
        <ul className={Head.ul}>
            <li className={Head.li}><img src="logo.png"/></li>
            <li className={Head.li}>Services</li>
            <li className={Head.li}>Portfolio</li>
            <li className={Head.li}>Pricing</li>
        </ul>
        <ul className={Head.ul2}>
            <li className={Head.li}>(303)555-0105</li>
            <li className={Head.li}>EN</li>
        </ul>
       </div>
    </div>
  )
}
