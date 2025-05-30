'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import LoadingOverlay from '@/components/loading-overlay'

export function RouteChangeProvider({
  children
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setLoading(true)
    const handleStop = () => setLoading(false)

    // simulate loading delay (opcional)
    handleStart()
    const timeout = setTimeout(() => {
      handleStop()
    }, 400)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <>
      {loading && <LoadingOverlay />}
      {children}
    </>
  )
}
