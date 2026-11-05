import { useState } from 'react'

function Products() {

  const [cart, setCart] = useState(0)

  const products = [
    {
      id: 1,
      name: "Headphones",
      price: 1499,
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      rating: 4.2,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
      id: 3,
      name: "Camera",
      price: 15999,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500"
    },
    {
      id: 4,
      name: "Shoes",
      price: 1999,
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
      id: 5,
      name: "Backpack",
      price: 999,
      rating: 4.1,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500"
    },
    {
      id: 6,
      name: "Sunglasses",
      price: 799,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-6">


      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Our Products
        </h1>

        <h2 className="text-lg font-semibold text-blue-600">
          Cart: {cart}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition"
          >


            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />


            <h2 className="text-xl font-bold text-gray-800 mt-4">
              {product.name}
            </h2>
            <p className="text-lg font-semibold text-green-600 mt-2">
              ₹{product.price}
            </p>


            <p className="text-yellow-500 mt-2">
               {product.rating} / 5
            </p>

    
            <button
              onClick={() => setCart(cart + 1)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700"
            >
              Add to Cart
            </button>

          </div>

        ))}

      </div>
    </div>
  )
}

export default Products