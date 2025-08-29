"use client"

import { X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface OrderSummaryProps {
  cart: { id: number; quantity: number }[]
  menuItems: any[]
  onClose: () => void
  onAddItem: (id: number) => void
  onRemoveItem: (id: number) => void
}

export function OrderSummary({ cart, menuItems, onClose, onAddItem, onRemoveItem }: OrderSummaryProps) {
  const cartItems = cart.map((item) => {
    const menuItem = menuItems.find((mi) => mi.id === item.id)
    return {
      ...menuItem,
      quantity: item.quantity,
      totalPrice: menuItem.price * item.quantity,
    }
  })

  const subtotal = cartItems.reduce((sum, item) => sum + item.totalPrice, 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between">
          <h2 className="text-lg font-semibold">Your Order</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <p className="py-4 text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => onRemoveItem(item.id)}>
                      <span>-</span>
                    </Button>
                    <span className="w-4 text-center">{item.quantity}</span>
                    <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => onAddItem(item.id)}>
                      <span>+</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {cartItems.length > 0 && (
            <div className="mt-6 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button variant="outline" className="flex-1" onClick={onClose}>
            Add More
          </Button>
          <Button className="flex-1 bg-red-600 hover:bg-red-700" disabled={cartItems.length === 0}>
            Pay Now
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

