"use client"

import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CategorySidebarProps {
  selectedCategory: string
  onSelectCategory: (category: string) => void
}

export function CategorySidebar({ selectedCategory, onSelectCategory }: CategorySidebarProps) {
  const categories = [
    { id: "starters", name: "Starters" },
    { id: "main", name: "Main Course" },
    { id: "desserts", name: "Desserts" },
    { id: "beverages", name: "Beverages" },
  ]

  return (
    <aside className="flex w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-4">
        <h1 className="text-xl font-bold text-red-600">バラティエ</h1>
      </div>
      <nav className="flex-1 p-4">
        <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  selectedCategory === category.id ? "bg-red-50 font-medium text-red-600" : "text-gray-700"
                }`}
                onClick={() => onSelectCategory(category.id)}
              >
                {category.name}
                {selectedCategory === category.id && <ChevronRight className="ml-auto h-4 w-4" />}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

