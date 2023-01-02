import React from 'react'
import ques from './Questions.module.css'
export default function Questions() {
  return (
    <div className={ques.container}> 
      <img src="do.png" className={ques.image}/>
      <button className={ques.button}>ORDER A CALL</button>
    </div>
  )
}
