"use client"

import { Maximize2, Minimize2, Square, X, Settings, Copy, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function Terminal() {
  return (
    <div className="bg-[#1E1E1E] rounded-lg overflow-hidden shadow-2xl">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#2D2D2D] border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
          </div>
          <div className="flex items-center ml-4">
            <span className="text-gray-400 text-sm">mod.rs</span>
            <Button variant="ghost" size="sm" className="h-6 w-6 ml-1 text-gray-400">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" className="h-6 w-6 text-gray-400">
            <Minimize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 text-gray-400">
            <Square className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 text-gray-400">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="h-6 w-6 text-gray-400">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Code Area */}
        <div className="flex-1 p-4">
          <div className="font-mono text-sm">
            <div className="flex">
              <div className="text-gray-600 w-8 text-right pr-4 select-none">72</div>
              <div className="text-gray-300">
                <span className="text-[#569CD6]">pub</span>
                <span className="text-[#D4D4D4]">(</span>
                <span className="text-[#4EC9B0]">crate</span>
                <span className="text-[#D4D4D4]">) </span>
                <span className="text-[#569CD6]">struct</span>
                <span className="text-[#4EC9B0]"> TransportStack</span>
                <span className="text-[#D4D4D4]"> {"{"}</span>
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-600 w-8 text-right pr-4 select-none">73</div>
              <div className="text-gray-300 pl-8">
                <span className="text-[#9CDCFE]">l4</span>: <span className="text-[#4EC9B0]">ListenerEndpoint</span>,
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-600 w-8 text-right pr-4 select-none">74</div>
              <div className="text-gray-300 pl-8">
                <span className="text-[#9CDCFE]">tls</span>: <span className="text-[#4EC9B0]">Option</span>
                {"<"}
                <span className="text-[#4EC9B0]">Arc</span>
                {"<"}
                <span className="text-[#4EC9B0]">Acceptor</span>
                {">>"},
              </div>
            </div>
            <div className="flex">
              <div className="text-gray-600 w-8 text-right pr-4 select-none">75</div>
              <div className="text-gray-400 pl-8">// listeners sent from the old process for graceful upgrade</div>
            </div>
            <div className="flex">
              <div className="text-gray-600 w-8 text-right pr-4 select-none">76</div>
              <div className="text-gray-300">
                <span className="text-[#D4D4D4]">#[</span>
                <span className="text-[#4EC9B0]">cfg</span>
                <span className="text-[#D4D4D4]">(</span>
                <span className="text-[#9CDCFE]">unix</span>
                <span className="text-[#D4D4D4]">)]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Chat/Composer Area */}
        <div className="w-[400px] border-l border-gray-800">
          <div className="p-4">
            <Tabs defaultValue="chat">
              <TabsList className="bg-transparent border-b border-gray-800 w-full justify-start h-8 p-0">
                <TabsTrigger
                  value="chat"
                  className="text-xs data-[state=active]:bg-transparent data-[state=active]:text-white px-3"
                >
                  CHAT
                </TabsTrigger>
                <TabsTrigger
                  value="composer"
                  className="text-xs data-[state=active]:bg-transparent data-[state=active]:text-white px-3"
                >
                  COMPOSER
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="mt-4">
              <div className="text-sm text-gray-400">
                Could you make it easier to switch certificates in the transport listeners?
              </div>
              <div className="mt-4 text-sm text-gray-300">
                I&apos;ll help modify the code to make certificate switching more flexible. The main changes will be to
                enhance the <span className="text-[#4EC9B0]">TlsAccept</span> trait and modify how certificates are
                handled in the <span className="text-[#4EC9B0]">TlsSettings</span>. Here are the key changes:
              </div>
              <div className="flex items-center gap-2 mt-4">
                <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-400">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  Ask
                </Button>
                <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-400">
                  <Copy className="h-3 w-3 mr-1" />
                  Copy
                </Button>
                <Button variant="ghost" size="sm" className="h-6 text-xs text-gray-400">
                  <ArrowUpRight className="h-3 w-3 mr-1" />
                  Apply
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

