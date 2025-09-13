export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'dog-treats' | 'cat-treats' | 'toys' | 'accessories';
  image: string;
  description: string;
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Chicken Jerky Strips',
    price: 18.99,
    originalPrice: 22.99,
    category: 'dog-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/319d1b25-e897-4d58-8d1f-94838c74b7bb.png',
    description: 'All-natural chicken jerky strips made from premium chicken breast. No artificial preservatives or additives.',
    inStock: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Salmon Training Treats',
    price: 14.50,
    category: 'dog-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/925a275f-db94-47be-9885-c76d63d96f5b.png',
    description: 'Bite-sized salmon treats perfect for training sessions. Rich in omega-3 fatty acids.',
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Freeze-Dried Tuna Flakes',
    price: 16.80,
    category: 'cat-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a7105288-48c1-4e32-a8b3-16e9daa5c3ee.png',
    description: 'Pure freeze-dried tuna flakes with no additives. High protein content for healthy cats.',
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: '4',
    name: 'Interactive Puzzle Ball',
    price: 24.99,
    category: 'toys',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/504cd411-206d-4649-9ee1-1d7222f31474.png',
    description: 'Mental stimulation puzzle ball that dispenses treats as your pet plays. Great for reducing boredom.',
    inStock: true,
    rating: 4.4,
    reviews: 73
  },
  {
    id: '5',
    name: 'Organic Sweet Potato Chews',
    price: 12.75,
    category: 'dog-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/350972d0-eecf-43a4-9eae-d03111cac19d.png',
    description: 'Dehydrated organic sweet potato slices. Rich in vitamins and fiber for digestive health.',
    inStock: true,
    rating: 4.7,
    reviews: 98
  },
  {
    id: '6',
    name: 'Feather Wand Toy',
    price: 8.99,
    category: 'toys',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e5538490-a7f3-4365-b6ba-44b29790dc56.png',
    description: 'Interactive feather wand with natural feathers. Perfect for engaging your cat in active play.',
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '7',
    name: 'Adjustable Pet Harness',
    price: 28.50,
    originalPrice: 35.99,
    category: 'accessories',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6add0a41-38d0-415e-ac59-22b4d28cd086.png',
    description: 'Comfortable padded harness with adjustable straps. Reflective stitching for night visibility.',
    inStock: true,
    rating: 4.6,
    reviews: 112
  },
  {
    id: '8',
    name: 'Catnip Mice Trio',
    price: 6.99,
    category: 'cat-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5a1d8a18-7391-4d8d-b5dc-3f223b08f4ea.png',
    description: 'Set of three catnip-filled mice toys. Made with premium organic catnip for maximum appeal.',
    inStock: true,
    rating: 4.3,
    reviews: 45
  },
  {
    id: '9',
    name: 'Dental Chew Bones',
    price: 21.99,
    category: 'dog-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c11befb3-2e31-45f1-a050-42ee380a611c.png',
    description: 'Specially formulated dental chews that help reduce plaque and freshen breath naturally.',
    inStock: true,
    rating: 4.5,
    reviews: 87
  },
  {
    id: '10',
    name: 'Stainless Steel Food Bowl',
    price: 19.99,
    category: 'accessories',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/71b65dae-10e3-4dfb-9db6-294bd3af0ace.png',
    description: 'Durable stainless steel food bowl with non-slip rubber base. Dishwasher safe and rust-resistant.',
    inStock: true,
    rating: 4.8,
    reviews: 134
  },
  {
    id: '11',
    name: 'Rope Tug Toy',
    price: 11.50,
    category: 'toys',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d82695af-7e23-4fb1-8ec2-bd07233e7666.png',
    description: 'Heavy-duty cotton rope toy perfect for tug-of-war games. Helps clean teeth during play.',
    inStock: false,
    rating: 4.4,
    reviews: 56
  },
  {
    id: '12',
    name: 'Premium Cat Grass Kit',
    price: 13.99,
    category: 'cat-treats',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/991847ae-1419-442b-8f0e-b8b1e82fd956.png',
    description: 'Complete cat grass growing kit with organic seeds, soil, and ceramic planter. Fresh grass in 7 days.',
    inStock: true,
    rating: 4.7,
    reviews: 92
  }
];

export const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'dog-treats', name: 'Dog Treats' },
  { id: 'cat-treats', name: 'Cat Treats' },
  { id: 'toys', name: 'Toys' },
  { id: 'accessories', name: 'Accessories' }
];

export const sortOptions = [
  { id: 'default', name: 'Default' },
  { id: 'price-low', name: 'Price: Low to High' },
  { id: 'price-high', name: 'Price: High to Low' },
  { id: 'name', name: 'Name A-Z' },
  { id: 'rating', name: 'Highest Rated' }
];