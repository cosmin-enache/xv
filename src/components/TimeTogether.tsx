import React, { useEffect, useMemo, useState } from 'react'
import { DateTime } from 'luxon'

export type TimeTogetherProps = {
  startIso: string
  timezone: string
}

function computeComponents(startIso: string, timezone: string) {
  const now = DateTime.now().setZone(timezone)
  let cursor = DateTime.fromISO(startIso, { zone: timezone })

  if (!cursor.isValid || !now.isValid) {
    return { decades: 0, years: 0, months: 0, days: 0 }
  }
  if (now < cursor) {
    return { decades: 0, years: 0, months: 0, days: 0 }
  }

  const years = Math.floor(now.diff(cursor, 'years').years)
  cursor = cursor.plus({ years })

  const months = Math.floor(now.diff(cursor, 'months').months)
  cursor = cursor.plus({ months })

  const days = Math.floor(now.diff(cursor, 'days').days)

  const decades = Math.floor(years / 10)
  const remainingYears = years % 10

  return { decades, years: remainingYears, months, days }
}

export function TimeTogether({ startIso, timezone }: TimeTogetherProps): JSX.Element {
  const [tick, setTick] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 60 * 1000)
    return () => clearInterval(id)
  }, [])

  const parts = useMemo(() => computeComponents(startIso, timezone), [startIso, timezone, tick])

  return (
    <div aria-live='polite' aria-atomic='true'>
      <p style={{ fontFamily: 'Fraunces, serif', fontSize: '1.125rem', margin: 0 }}>Time together</p>
      <div style={{ fontSize: '2rem', fontWeight: 600 }}>
        <span>{parts.decades} decade{parts.decades === 1 ? '' : 's'}</span>
        <span> · {parts.years} year{parts.years === 1 ? '' : 's'}</span>
        <span> · {parts.months} month{parts.months === 1 ? '' : 's'}</span>
        <span> · {parts.days} day{parts.days === 1 ? '' : 's'}</span>
      </div>
    </div>
  )
}
