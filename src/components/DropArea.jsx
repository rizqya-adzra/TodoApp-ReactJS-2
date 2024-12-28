import React from 'react'
import './DropArea.css'
import { useState } from 'react'

const DropArea = ({onDrop}) => {
    const [showDrop, setShowDrop ] = useState(false)
  return (
    <section onDrop={() => {
        onDrop()
        setShowDrop(false)
    }} onDragOver={(e) => e.preventDefault()} onDragEnter={() => setShowDrop(true)} onDragLeave={() => setShowDrop(false)} className={showDrop ? "drop_area" : "hide_drop"}>Drop Here</section>    
)
}

export default DropArea