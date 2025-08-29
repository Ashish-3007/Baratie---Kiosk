"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingBag } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CategorySidebar } from "@/components/category-sidebar";
import { OrderSummary } from "@/components/order-summary";

// Sample menu data
const menuItems = [
  {
    id: 1,
    name: "Edamame",
    description: "Lightly salted steamed soybeans in their pods",
    price: 120,
    category: "starters",
    isVegetarian: true,
    image: "/Edamame.jpeg",
  },
  {
    id: 2,
    name: "Gyoza",
    description: "Pan-fried dumplings filled with vegetables and chicken",
    price: 150,
    category: "starters",
    isVegetarian: false,
    image: "/Gyoza.png",
  },
  {
    id: 3,
    name: "Agedashi Tofu",
    description: "Deep-fried tofu in a savory soy-based broth",
    price: 140,
    category: "starters",
    isVegetarian: true,
    image: "/Agedashi Tofu.png",
  },
  {
    id: 4,
    name: "Chicken Karaage",
    description: "Japanese-style fried chicken with lemon wedge",
    price: 180,
    category: "starters",
    isVegetarian: true,
    image: "/Chicken Karaage.png",
  },
  {
    id: 5,
    name: "Tamagoyaki",
    description: "Sweet rolled omelet, sliced and served warm",
    price: 110,
    category: "starters",
    isVegetarian: true,
    image: "/Tamagoyaki.png",
  },
  {
    id: 6,
    name: "Shrimp Tempura",
    description: "Crispy fried shrimp served with dipping sauce",
    price: 200,
    category: "starters",
    isVegetarian: true,
    image: "/Shrimp Tempura.png",
  },
  {
    id: 7,
    name: "Seaweed Salad",
    description: "Fresh seaweed in sesame vinaigrette",
    price: 100,
    category: "starters",
    isVegetarian: true,
    image: "/Seaweed Salad.png",
  },
  {
    id: 8,
    name: "Lotus Root Chips",
    description: "Crispy fried lotus root slices",
    price: 90,
    category: "starters",
    isVegetarian: true,
    image: "/Lotus Root Chips.png",
  },
  {
    id: 9,
    name: "Wasabi Peas",
    description: "Crunchy peas with a punch of wasabi",
    price: 80,
    category: "starters",
    isVegetarian: true,
    image: "/Wasabi Peas.png",
  },
  {
    id: 10,
    name: "Yakitori",
    description: "Skewered grilled chicken glazed in sweet soy",
    price: 170,
    category: "starters",
    isVegetarian: true,
    image: "/Yakitori.png",
  },
  {
    id: 11,
    name: "Chicken Katsu Curry",
    description: "Crispy chicken cutlet served with Japanese curry",
    price: 290,
    category: "main",
    isVegetarian: false,
    image: "/Chicken Katsu Curry.png",
  },
  {
    id: 12,
    name: "Tonkotsu Ramen",
    description: "Rich pork broth ramen with sliced pork, egg, and noodles",
    price: 320,
    category: "main",
    isVegetarian: false,
    image: "/Tonkotsu Ramen.png",
  },
  {
    id: 13,
    name: "Yakisoba",
    description: "Wok-fried soba noodles with vegetables and chicken",
    price: 250,
    category: "main",
    isVegetarian: false,
    image: "/Yakisoba.png",
  },
  {
    id: 14,
    name: "Unagi Don",
    description: "Grilled eel glazed with tare sauce over steamed rice",
    price: 380,
    category: "main",
    isVegetarian: false,
    image: "/Unagi Don.png",
  },
  {
    id: 15,
    name: "Sushi Combo",
    description: "Assorted nigiri and maki sushi platter",
    price: 400,
    category: "main",
    isVegetarian: false,
    image: "/Sushi Combo.png",
  },
  {
    id: 16,
    name: "Tempura Udon",
    description: "Thick udon noodles in broth with tempura",
    price: 270,
    category: "main",
    isVegetarian: false,
    image: "/Tempura Udon.png",
  },
  {
    id: 17,
    name: "Okonomiyaki",
    description: "Savory Japanese pancake with vegetables and meat",
    price: 230,
    category: "main",
    isVegetarian: false,
    image: "/Okonomiyaki.png",
  },
  {
    id: 18,
    name: "Beef Teriyaki",
    description: "Grilled beef slices with sweet teriyaki glaze",
    price: 310,
    category: "main",
    isVegetarian: false,
    image: "/Beef Teriyaki.png",
  },
  {
    id: 19,
    name: "Salmon Sashimi Bowl",
    description: "Fresh salmon sashimi over seasoned sushi rice",
    price: 340,
    category: "main",
    isVegetarian: false,
    image: "/Salmon Sashimi Bowl.png",
  },
  {
    id: 20,
    name: "Vegetarian Bento",
    description: "Rice, vegetables, tofu, and salad in a bento box",
    price: 260,
    category: "main",
    isVegetarian: true,
    image: "/Vegetarian Bento.png",
  },
  {
    id: 21,
    name: "Mochi Ice Cream",
    description: "Sweet rice dough with creamy ice cream inside",
    price: 130,
    category: "desserts",
    isVegetarian: true,
    image: "/Mochi Ice Cream.png",
  },
  {
    id: 22,
    name: "Matcha Cheesecake",
    description: "Creamy green tea flavored cheesecake",
    price: 150,
    category: "desserts",
    isVegetarian: true,
    image: "/Matcha Cheesecake.png",
  },
  {
    id: 23,
    name: "Dorayaki",
    description: "Pancake sandwich filled with red bean paste",
    price: 110,
    category: "desserts",
    isVegetarian: true,
    image: "/Dorayaki.png",
  },
  {
    id: 24,
    name: "Anmitsu",
    description: "Agar jelly with fruits, red beans, and syrup",
    price: 140,
    category: "desserts",
    isVegetarian: true,
    image: "/Anmitsu.png",
  },
  {
    id: 25,
    name: "Taiyaki",
    description: "Fish-shaped pastry with sweet red bean filling",
    price: 120,
    category: "desserts",
    isVegetarian: true,
    image: "/Taiyaki.png",
  },
  {
    id: 26,
    name: "Black Sesame Ice Cream",
    description: "Nutty and rich black sesame flavored ice cream",
    price: 135,
    category: "desserts",
    isVegetarian: true,
    image: "/Black Sesame Ice Cream.png",
  },
  {
    id: 27,
    name: "Mitarashi Dango",
    description: "Grilled rice dumplings in sweet soy sauce glaze",
    price: 100,
    category: "desserts",
    isVegetarian: true,
    image: "/Mitarashi Dango.png",
  },
  {
    id: 28,
    name: "Yuzu Sorbet",
    description: "Refreshing sorbet made with Japanese citrus",
    price: 115,
    category: "desserts",
    isVegetarian: true,
    image: "/Yuzu Sorbet.png",
  },
  {
    id: 29,
    name: "Kuzumochi",
    description: "Traditional mochi made from fermented wheat starch",
    price: 110,
    category: "desserts",
    isVegetarian: true,
    image: "/Kuzumochi.png",
  },
  {
    id: 30,
    name: "Strawberry Daifuku",
    description: "Sweet mochi with red bean paste and fresh strawberry",
    price: 125,
    category: "desserts",
    isVegetarian: true,
    image: "/Strawberry Daifuku.png",
  },
  {
    id: 31,
    name: "Matcha Latte",
    description: "Whisked green tea with steamed milk",
    price: 140,
    category: "beverages",
    isVegetarian: true,
    image: "/Matcha Latte.png",
  },
  {
    id: 32,
    name: "Calpico",
    description: "Japanese uncarbonated soft drink, tangy and sweet",
    price: 90,
    category: "beverages",
    isVegetarian: true,
    image: "/Calpico.png",
  },
  {
    id: 33,
    name: "Ramune",
    description: "Classic Japanese soda in a glass marble bottle",
    price: 100,
    category: "beverages",
    isVegetarian: true,
    image: "/Ramune.png",
  },
  {
    id: 34,
    name: "Genmaicha",
    description: "Green tea blended with roasted brown rice",
    price: 80,
    category: "beverages",
    isVegetarian: true,
    image: "/Genmaicha tea.png",
  },
  {
    id: 35,
    name: "Yuzu Lemonade",
    description: "Refreshing lemonade with Japanese yuzu citrus",
    price: 110,
    category: "beverages",
    isVegetarian: true,
    image: "/Yuzu Lemonade.png",
  },
  {
    id: 36,
    name: "Oolong Iced Tea",
    description: "Chilled oolong tea with a hint of honey",
    price: 90,
    category: "beverages",
    isVegetarian: true,
    image: "/Oolong Iced Tea.png",
  },
  {
    id: 37,
    name: "Hojicha Latte",
    description: "Roasted green tea with milk and foam",
    price: 120,
    category: "beverages",
    isVegetarian: true,
    image: "/Hojicha Latte.png",
  },
  {
    id: 38,
    name: "Iced Sakura Tea",
    description: "Floral cherry blossom infused iced teaa",
    price: 100,
    category: "beverages",
    isVegetarian: true,
    image: "/Iced Sakura Tea.png",
  },
  {
    id: 39,
    name: "Melon Soda Float",
    description: "Melon-flavored soda with vanilla ice cream",
    price: 130,
    category: "beverages",
    isVegetarian: true,
    image: "./Melon Soda Float.png",
  },
  {
    id: 40,
    name: "Japanese Coffee",
    description: "Smooth blend of hot brewed Japanese-style coffee",
    price: 150,
    category: "beverages",
    isVegetarian: true,
    image: "/Japanese Coffee.png",
  },
];

export default function CustomerView() {
  const [selectedCategory, setSelectedCategory] = useState("starters");
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [showOrderSummary, setShowOrderSummary] = useState(false);

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  const addToCart = (itemId: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === itemId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id: itemId, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === itemId);
      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prev.filter((item) => item.id !== itemId);
      }
    });
  };

  const getItemQuantity = (itemId: number) => {
    const item = cart.find((item) => item.id === itemId);
    return item ? item.quantity : 0;
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex h-screen w-full bg-gray-50">
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <main className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b bg-white px-6">
          <h1 className="text-xl font-semibold text-gray-900">
            {selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
          </h1>
          <Button
            variant="outline"
            className="relative"
            onClick={() => setShowOrderSummary(true)}
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="ml-2">Order</span>
            {totalItems > 0 && (
              <Badge className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 p-0">
                {totalItems}
              </Badge>
            )}
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative h-fill w-full">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />
                  <Badge
                    className={`absolute right-2 top-2 ${
                      item.isVegetarian ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {item.isVegetarian ? "Veg" : "Non-Veg"}
                  </Badge>
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between">
                    <h3 className="font-medium">{item.name}</h3>
                    <span className="font-semibold">
                      ₹{item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    {item.description}
                  </p>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t p-4">
                  {getItemQuantity(item.id) > 0 ? (
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-4 text-center">
                        {getItemQuantity(item.id)}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => addToCart(item.id)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => addToCart(item.id)}
                    >
                      Add to Order
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {showOrderSummary && (
        <OrderSummary
          cart={cart}
          menuItems={menuItems}
          onClose={() => setShowOrderSummary(false)}
          onAddItem={addToCart}
          onRemoveItem={removeFromCart}
        />
      )}
    </div>
  );
}
