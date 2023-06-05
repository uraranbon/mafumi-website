import { useState, useRef } from 'react'
import reactStringReplace from "react-string-replace";
import styles from '../styles/Accordion.module.scss'

export default function Accordion({heading,content}) {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false)

  const toggleContent = () => {
    setAccordionIsOpen((prev) => !prev)
  }

  const refText = useRef(null)

  return (
    <div className={`${accordionIsOpen ? styles.isOpen : styles.isClose} ${styles.Accordion}`}>
      <div className={styles.heading}>
        <button onClick={toggleContent}>{heading}</button>
      </div>
      <div
        className={styles.content}
        ref={refText}
        style={{
          '--text-height': refText.current
          ? `${refText.current.scrollHeight}px`
          : '0px',
        }}
      >
        <p>
          {reactStringReplace(content, /(https?:\/\/\S+)/g, (match, i) => (
            <a key={i} href={match} target='_blank'>
              {match}
            </a>
          ))}
        </p>
      </div>
    </div>
  )
}