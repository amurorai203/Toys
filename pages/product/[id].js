import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: "Teddy Bear", price: 25, image: "/toys/teddy.jpg", description: "A soft and cuddly teddy bear for kids." },
  { id: 2, name: "Lego Set", price: 40, image: "/toys/lego.jpg", description: "A creative Lego set to boost imagination." },
  { id: 3, name: "Toy Car", price: 15, image: "/toys/car.jpg", description: "A fun toy car for racing adventures." },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p className="text-center mt-10 text-red-500">Product not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-5">
      <Link href="/" className="text-blue-500">&larr; Back to Store</Link>
      <div className="bg-white p-5 rounded-lg shadow-md text-center">
        <Image src={product.image} alt={product.name} width={250} height={250} className="mx-auto"/>
        <h1 className="text-2xl font-bold mt-3">{product.name}</h1>
        <p className="text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl font-bold text-blue-600 mt-3">${product.price}</p>
      </div>
    </div>
  );
}
