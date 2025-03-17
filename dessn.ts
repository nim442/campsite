export default {
  projectId: 'kd79m30w6m7bkadpnckseqjcr17c9tyn',
  basePath: 'apps/web',
  wrapper: `import '@campsite/ui/src/styles/global.css'
import '@campsite/ui/src/styles/code.css'
import 'styles/editor.css'
import 'styles/global.css'
import 'styles/prose.css'

import { type ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface WrapperProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <style jsx global>{\`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        
        :root {
          --font-inter: 'Inter', sans-serif;
        }
      \`}</style>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute='class'>
          <div className="font-inter">
            {children}
          </div>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}`,
  scan: {
    exclude: ['**/**/Icons/index.tsx']
  }
}
