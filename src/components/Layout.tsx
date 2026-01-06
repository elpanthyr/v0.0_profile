import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { ThemeToggle } from './ThemeToggle'

const queryClient = new QueryClient()

export function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ThemeToggle />
          <Outlet />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
