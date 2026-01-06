import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { ThemeToggle } from './ThemeToggle'
import { useState, useEffect } from 'react'

const queryClient = new QueryClient()

export function Layout() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {mounted && <ThemeToggle />}
          <Outlet />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
