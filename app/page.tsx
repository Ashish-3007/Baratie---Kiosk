"use client"
import { useRouter } from "next/navigation"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white">
      <div className="relative flex w-full max-w-5xl flex-col items-center rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg">
            <div className="h-16 w-16 rounded-full bg-red-600"></div>
          </div>
        </div>
        <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900">バラティエ (Baratie)</h1>
        <p className="mt-4 text-center text-lg text-gray-600">
          Experience authentic Japanese cuisine with our modern ordering system.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            className="bg-red-600 px-8 py-6 text-lg font-medium text-white hover:bg-red-700"
            onClick={() => router.push("/customer")}
          >
            Customer View
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            className="border-red-600 px-8 py-6 text-lg font-medium text-red-600 hover:bg-red-50"
            onClick={() => router.push("/kitchen")}
          >
            Kitchen View
          </Button>
          <Button
            variant="outline"
            className="border-red-600 px-8 py-6 text-lg font-medium text-red-600 hover:bg-red-50"
            onClick={() => router.push("/admin")}
          >
            Admin View
          </Button>
        </div>
      </div>
    </div>
  )
}

