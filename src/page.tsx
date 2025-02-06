import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ComputerIcon as Windows } from "lucide-react"
import { Terminal } from "@/components/terminal"

export default function Page() {
  return (
    <div className="min-h-screen bg-black p-6">
      {/* Navigation */}
      <nav className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-06%20182857-n4o4fIjgS22Wx4FGt4E22rUPwgRvSY.png"
            alt="Cursor Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-white">CURSOR</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {["PRICING", "FEATURES", "ENTERPRISE", "BLOG", "FORUM", "CAREERS"].map((item) => (
            <Link key={item} href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white">
            SIGN IN
          </Button>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
            DOWNLOAD
          </Button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="relative rounded-[30px] overflow-hidden">
        {/* Gradient Background */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-700 via-orange-500 to-green-500"
          style={{
            opacity: 0.7,
            filter: "blur(100px)",
          }}
        />

        {/* Content */}
        <div className="relative px-6 pt-20 flex flex-col items-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 text-center">The AI Code Editor</h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 text-center max-w-3xl">
            Built to make you extraordinarily productive,
            <br />
            Cursor is the best way to code with AI.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 mb-20">
            <Windows className="mr-2 h-5 w-5" />
            DOWNLOAD FOR WINDOWS
          </Button>

          {/* Terminal */}
          <div className="w-full max-w-6xl pb-20">
            <Terminal />
          </div>
        </div>
      </div>
    </div>
  )
}

