import { HomeIcon, File, UsersRound } from "lucide-react"
import { NavButton } from "@/components/NavButton"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"


export function Header() {
  return (
    <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
      <div className="flex h-8 items-center justify-between w-full">
       <div className="flex items-center gap-2">
         <NavButton icon={HomeIcon} label="Home" href="/home" />
         <Link href="/home" className="flex justify-center items-center gap-2 ml-0" title="Home">
          <h1 className="hidden sm:block text-xl font-bold m-0 mt-1">
            Computer Repair Shop
          </h1>
         </Link>
       </div>
        <div className="flex items-center">
        <NavButton icon={File} label="tickets" href="/tickets" />
        <NavButton icon={UsersRound} label="customers" href="/customers" />
        <ModeToggle />
       </div>
      </div>
    </header>
  )
}
