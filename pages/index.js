import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  { id: 1, name: "Teddy Bear", price: 25, image: "/toys/teddy.jpg" },
  { id: 2, name: "Lego Set", price: 40, image: "/toys/lego.jpg" },
  { id: 3, name: "Toy Car", price: 15, image: "/toys/car.jpg" },
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Best Online Toy Store - Buy Quality Toys</title>
        <meta name="description" content="Find the best toys for your kids at our online store. Shop for teddy bears, Lego sets, toy cars, and more!" />
      </Head>
      
      <header className="bg-blue-600 text-white text-center py-5 text-2xl font-bold">
        Toy Store 🧸🚗
      </header>

      <div className="text-center my-5">
        <input 
          type="text"
          placeholder="Search for toys..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-2/3 p-3 border rounded-lg shadow"
        />
      </div>

      <main className="max-w-5xl mx-auto p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition">
                <Image src={product.image} alt={product.name} width={200} height={200} className="mx-auto"/>
                <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
                <p className="text-blue-600 font-bold">${product.price}</p>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No toys found.</p>
          )}
        </div>
      </main>

      <footer className="text-center py-5 bg-gray-800 text-white">
        © {new Date().getFullYear()} Toy Store. All rights reserved.
      </footer>
    </div>
  );
}
