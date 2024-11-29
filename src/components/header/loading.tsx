import { Skeleton } from "@/tailwind-components/ui/skeleton"

const Loading = () => {
  return (
    <div className='flex items-center'>
      <Skeleton className='h-4 w-[100px] bg-zinc-400 mr-4' />
      <Skeleton className='h-10 w-10 rounded-full bg-zinc-400' />
    </div>
  )
}

export default Loading
