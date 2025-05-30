'use client'

import { useEffect, useState } from 'react'

export default function LoadingOverlay() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame: number
    if (progress < 90) {
      frame = window.setTimeout(() => setProgress(progress + 10), 100)
    }
    return () => clearTimeout(frame)
  }, [progress])

  return (
    <div className="fixed inset-0 z-50">
      <div className="w-full h-2 bg-indigo-500 overflow-hidden">
        <div
          className="h-fulll bg-indigo-500 transition-all duration-200"
          style={{ width: `${progress}%` }}
          data-testid="loading-overlay-outer"
        />
      </div>
    </div>
  )
}
