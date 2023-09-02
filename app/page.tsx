import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
const state = false
export default function Home() {
  return (
    <div className="flex flex-col">
      <h1>
        Helllo Discord,

      </h1>
      <Button className={
        cn('bg-slate-400',
          state && 'bg-red-400')
      }>Click Me</Button>
    </div>
  )
}
