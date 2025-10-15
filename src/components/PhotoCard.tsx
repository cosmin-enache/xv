import React from 'react'
import styles from '../styles/App.module.css'

type MonthEntry = {
  id: string
  title: string
  monthIso: string
  photo: string
  alt: string
  text: string
  imageOffset?: string
}

export function PhotoCard({ entry }: { entry: MonthEntry }): JSX.Element {
  const [left, top] = (entry.imageOffset ?? '0 0').split(/\s+/)
  const src = `${import.meta.env.BASE_URL}${entry.photo.replace(/^\//, '')}`
  return (
    <article className={styles.card}>
      <div className={styles.cardImageWrap}>
        <img
          src={src}
          alt={entry.alt}
          className={styles.cardImage}
          style={{ left, top }}
        />
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{entry.title}</h3>
        <p style={{whiteSpace: "pre-line"}} className={styles.cardText}>{entry.text}</p>
      </div>
    </article>
  )
}
