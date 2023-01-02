import React from 'react'
import Img from './Image.module.css';
export default function Image() {
  return (
    <div className={Img.container}>
      <img src="img.png" />
    </div>
  )
}
