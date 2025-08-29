"use client"

import { useState } from "react"
import { Check, Clock, RefreshCw } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample orders data
const sampleOrders = [
  {
    id: "ORD-001",
    table: "Table 3",
    items: [
      { name: "Tonkotsu Ramen", quantity: 2 },
      { name: "Gyoza", quantity: 1 },
      { name: "Green Tea", quantity: 2 },
    ],
    status: "pending",
    time: "10:30 AM",
  },
  {
    id: "ORD-002",
    table: "Table 7",
    items: [
      { name: "Chicken Teriyaki", quantity: 1 },
      { name: "Miso Soup", quantity: 1 },
      { name: "Vegetable Tempura", quantity: 1 },
    ],
    status: "in-progress",
    time: "10:45 AM",
  },
  {
    id: "ORD-003",
    table: "Table 2",
    items: [
      { name: "Edamame", quantity: 1 },
      { name: "Mochi Ice Cream", quantity: 2 },
    ],
    status: "completed",
    time: "10:15 AM",
  },
]

export default function KitchenView() {
  const [orders, setOrders] = useState(sampleOrders)
  const [activeTab, setActiveTab] = useState("all")

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders((prev) => prev.map((order) => (order.id === orderId ? { ...order, status: newStatus } : order)))
  }

  const filteredOrders = activeTab === "all" ? orders : orders.filter((order) => order.status === activeTab)

  return (
    <div className="flex h-screen flex-col bg-gray-50">
      <header className="flex h-16 items-center justify-between border-b bg-white px-6">
        <h1 className="text-xl font-semibold text-gray-900">Kitchen Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>
          <span className="text-sm text-gray-500">Last updated: Just now</span>
        </div>
      </header>

      <div className="flex-1 overflow-hidden p-6">
        <Tabs defaultValue="all" className="h-full" onValueChange={setActiveTab}>
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All Orders</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="in-progress">In Progress</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>
            <div className="flex gap-2">
              <Badge variant="outline" className="gap-1 border-yellow-500 text-yellow-700">
                <Clock className="h-3 w-3" /> Pending: {orders.filter((o) => o.status === "pending").length}
              </Badge>
              <Badge variant="outline" className="gap-1 border-blue-500 text-blue-700">
                <RefreshCw className="h-3 w-3" /> In Progress: {orders.filter((o) => o.status === "in-progress").length}
              </Badge>
              <Badge variant="outline" className="gap-1 border-green-500 text-green-700">
                <Check className="h-3 w-3" /> Completed: {orders.filter((o) => o.status === "completed").length}
              </Badge>
            </div>
          </div>

          <TabsContent value={activeTab} className="mt-6 h-[calc(100%-48px)] overflow-y-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredOrders.map((order) => (
                <Card
                  key={order.id}
                  className={`
                  ${order.status === "pending" ? "border-l-4 border-l-yellow-500" : ""}
                  ${order.status === "in-progress" ? "border-l-4 border-l-blue-500" : ""}
                  ${order.status === "completed" ? "border-l-4 border-l-green-500" : ""}
                `}
                >
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <div>
                      <h3 className="font-semibold">{order.id}</h3>
                      <p className="text-sm text-gray-500">
                        {order.table} • {order.time}
                      </p>
                    </div>
                    <Badge
                      className={`
                      ${order.status === "pending" ? "bg-yellow-100 text-yellow-800" : ""}
                      ${order.status === "in-progress" ? "bg-blue-100 text-blue-800" : ""}
                      ${order.status === "completed" ? "bg-green-100 text-green-800" : ""}
                    `}
                    >
                      {order.status === "pending" && "Pending"}
                      {order.status === "in-progress" && "In Progress"}
                      {order.status === "completed" && "Completed"}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1">
                      {order.items.map((item, index) => (
                        <li key={index} className="flex justify-between text-sm">
                          <span>{item.name}</span>
                          <span className="text-gray-500">x{item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between gap-2 pt-2">
                    {order.status === "pending" && (
                      <Button
                        className="flex-1 bg-blue-600 hover:bg-blue-700"
                        onClick={() => updateOrderStatus(order.id, "in-progress")}
                      >
                        Start Preparing
                      </Button>
                    )}
                    {order.status === "in-progress" && (
                      <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={() => updateOrderStatus(order.id, "completed")}
                      >
                        Mark as Completed
                      </Button>
                    )}
                    {order.status === "completed" && (
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => updateOrderStatus(order.id, "pending")}
                      >
                        Reset Status
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

