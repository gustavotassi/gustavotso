'use client'

import { useEffect, useState } from 'react'
import { site } from '@/config'

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: site.location.timeZone,
})

/** My local clock, so you know whether I'm likely awake. */
export function LocalTime() {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const tick = () => setTime(formatter.format(new Date()))

    tick()
    const interval = window.setInterval(tick, 15_000)

    return () => window.clearInterval(interval)
  }, [])

  if (!time) return <span className="inline-block w-11" />

  return <time dateTime={time}>{time}</time>
}
