"use client"

import { BarChart3, ChefHat, Package, ShoppingBag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"

interface AdminSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function AdminSidebar({ activeTab, onTabChange }: AdminSidebarProps) {
  const tabs = [
    { id: "dashboard", name: "Dashboard", icon: BarChart3 },
    { id: "menu", name: "Menu Management", icon: ChefHat },
    { id: "orders", name: "Orders", icon: ShoppingBag },
    { id: "inventory", name: "Inventory", icon: Package },
    { id: "staff", name: "Staff", icon: Users },
  ]

  return (
    <aside className="flex w-64 flex-col border-r bg-white">
      <div className="flex h-16 items-center border-b px-4">
        <h1 className="text-xl font-bold text-red-600">バラティエ Admin</h1>
      </div>
      <nav className="flex-1 p-4">
        <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500">Management</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Button
                variant="ghost"
                className={`w-full justify-start ${
                  activeTab === tab.id ? "bg-red-50 font-medium text-red-600" : "text-gray-700"
                }`}
                onClick={() => onTabChange(tab.id)}
              >
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.name}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t p-4">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-full bg-red-100">
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm font-medium text-red-600">A</span>
            </div>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">admin@baratie.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

