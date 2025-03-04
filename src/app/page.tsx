import { ModeToggle } from "@/components/mode-toogle"

export default function Home() {
  return (
    <div className="h-screen w-full">
      <header className="h-18 p-4 flex justify-end items-center border-b-2 border-border">
        <ModeToggle />
      </header>
    </div>
  )
}
