import React from 'react'
import { PhotoCard } from './PhotoCard'
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

export function Timeline({ months }: { months: MonthEntry[] }): JSX.Element {
  return (
    <section className={styles.timeline}>
      {months.map((m) => (
        <PhotoCard key={m.id} entry={m} />
      ))}
    </section>
  )
}
