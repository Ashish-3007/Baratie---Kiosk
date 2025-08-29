"use client"

import { useState } from "react"
import { BarChart3, ChefHat, DollarSign, Package, Settings, ShoppingBag, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { AdminSidebar } from "@/components/admin-sidebar"

export default function AdminView() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 overflow-auto">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
          <Button variant="outline" size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </header>

        <div className="p-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    <DollarSign className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$12,345</div>
                    <p className="text-xs text-green-500">+12% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                    <ShoppingBag className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">324</div>
                    <p className="text-xs text-green-500">+8% from last month</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Active Staff</CardTitle>
                    <Users className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-gray-500">No change</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Inventory Items</CardTitle>
                    <Package className="h-4 w-4 text-gray-500" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">86</div>
                    <p className="text-xs text-red-500">3 items low in stock</p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Sales Overview</CardTitle>
                    <CardDescription>Daily revenue for the past week</CardDescription>
                  </CardHeader>
                  <CardContent className="h-80">
                    <div className="flex h-full items-center justify-center">
                      <BarChart3 className="h-40 w-40 text-gray-300" />
                    </div>
                  </CardContent>
                </Card>
                <Card className="col-span-1">
                  <CardHeader>
                    <CardTitle>Popular Items</CardTitle>
                    <CardDescription>Most ordered items this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {[
                        { name: "Tonkotsu Ramen", orders: 142 },
                        { name: "Chicken Teriyaki", orders: 98 },
                        { name: "Gyoza", orders: 87 },
                        { name: "Mochi Ice Cream", orders: 76 },
                        { name: "Green Tea", orders: 65 },
                      ].map((item, index) => (
                        <li key={index} className="flex items-center justify-between">
                          <span className="font-medium">{item.name}</span>
                          <span className="text-sm text-gray-500">{item.orders} orders</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="menu">
              <Card>
                <CardHeader>
                  <CardTitle>Menu Management</CardTitle>
                  <CardDescription>Add, edit, or remove menu items</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-64 items-center justify-center">
                    <ChefHat className="h-16 w-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Menu management interface would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View and manage all orders</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-64 items-center justify-center">
                    <ShoppingBag className="h-16 w-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Order management interface would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="inventory">
              <Card>
                <CardHeader>
                  <CardTitle>Inventory Management</CardTitle>
                  <CardDescription>Track and manage inventory levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-64 items-center justify-center">
                    <Package className="h-16 w-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Inventory management interface would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="staff">
              <Card>
                <CardHeader>
                  <CardTitle>Staff Management</CardTitle>
                  <CardDescription>Manage staff accounts and permissions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex h-64 items-center justify-center">
                    <Users className="h-16 w-16 text-gray-300" />
                    <p className="ml-4 text-gray-500">Staff management interface would go here</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

