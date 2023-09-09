import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className='flex flex-col'>
      <h1 className='text-3xl font-bold text-indigo-500'>Home Page</h1>
      <p>
        This is a protected route.
      </p>
      <Link href='/profile'>
        Go to Profile Page
      </Link>
    </main>
  )
}
