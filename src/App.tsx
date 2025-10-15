import React from 'react'
import styles from './styles/App.module.css'
import { TimeTogether } from './components/TimeTogether'
import { Timeline } from './components/Timeline'
import relationship from '../content/relationship.json'

export default function App(): JSX.Element {
  const { startDateIso, timezone, title, subtitle } = relationship
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
          <TimeTogether startIso={startDateIso} timezone={timezone} />
        </div>
      </header>
      <main className={styles.main}>
        <Timeline months={relationship.months} />
      </main>
      <footer className={styles.footer}>
        <small>Made with love</small>
      </footer>
    </div>
  )
}
