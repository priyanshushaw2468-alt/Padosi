import { Leaf, MapPin, Handshake } from 'lucide-react';
import { NavLink, ValueProp, Product, Shop, Testimonial } from './types';

export const APP_NAME = "Padosi";

export const NAV_LINKS: NavLink[] = [
  { label: "Shop", href: "#shop" },
  { label: "Local Sellers", href: "#local-sellers" },
  { label: "Our Mission", href: "#mission" },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    title: "100% Fresh",
    description: "Sourced this morning.",
    icon: Leaf,
  },
  {
    title: "Hyper-Local",
    description: "Delivered from <2km away.",
    icon: MapPin,
  },
  {
    title: "Empower Sellers",
    description: "0% Commission on tips.",
    icon: Handshake,
  },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Fresh Vegetable Basket',
    price: '₹350',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&q=80&w=600',
    sellerName: "Raju's Store",
    sellerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '2',
    name: 'Homemade Mango Pickle',
    price: '₹150',
    image: 'https://images.unsplash.com/photo-1622038753239-445a9df617df?auto=format&fit=crop&q=80&w=600',
    sellerName: "Aunty's Kitchen",
    sellerAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '3',
    name: 'Handcrafted Clay Pot',
    price: '₹450',
    image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&q=80&w=600',
    sellerName: "Mohan's Pottery",
    sellerAvatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '4',
    name: 'Fresh Farm Eggs (12)',
    price: '₹120',
    image: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&q=80&w=600',
    sellerName: "Green Valley Farm",
    sellerAvatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '5',
    name: 'Organic Honey Jar',
    price: '₹280',
    image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=600',
    sellerName: "Bee Happy Farms",
    sellerAvatar: 'https://images.unsplash.com/photo-1554151228-14d9def656ec?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '6',
    name: 'Fresh Paneer (500g)',
    price: '₹220',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=600',
    sellerName: "Sharma Dairy",
    sellerAvatar: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '7',
    name: 'Handwoven Jute Bag',
    price: '₹180',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    sellerName: "Kala Crafts",
    sellerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100'
  },
  {
    id: '8',
    name: 'Spicy Red Chili Powder',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1626338787989-8049df74b88d?auto=format&fit=crop&q=80&w=600',
    sellerName: "Singh & Sons",
    sellerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100'
  }
];

export const NEARBY_SHOPS: Shop[] = [
  {
    id: '1',
    name: "Sharma Dairy",
    distance: "0.5km away",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1506617420156-8e4536971650?auto=format&fit=crop&q=80&w=800",
    category: "Dairy & Grocery"
  },
  {
    id: '2',
    name: "Lakshmi Greens",
    distance: "1.2km away",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1606041011872-5965979b1b98?auto=format&fit=crop&q=80&w=800",
    category: "Vegetables"
  },
  {
    id: '3',
    name: "Singh & Sons Spices",
    distance: "0.8km away",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
    category: "Dry Goods"
  },
  {
    id: '4',
    name: "Gupta Sweets",
    distance: "0.3km away",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&q=80&w=800",
    category: "Sweets & Snacks"
  },
  {
    id: '5',
    name: "Organic Earth",
    distance: "1.5km away",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    category: "Organic Grocery"
  },
  {
    id: '6',
    name: "City Hardware",
    distance: "0.9km away",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800",
    category: "Tools & Home"
  },
  {
    id: '7',
    name: "The Flower Boutique",
    distance: "1.1km away",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1589244159943-460088ed5b92?auto=format&fit=crop&q=80&w=800",
    category: "Florist"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Since joining Padosi, my small dairy shop has seen customers I haven't seen in years. It's like the whole neighborhood woke up.",
    author: "Rajesh Kumar",
    role: "Seller"
  },
  {
    quote: "I love that I can get fresh vegetables from the uncle down the street delivered in 15 minutes. It feels good to support locals.",
    author: "Priya Singh",
    role: "Customer"
  }
];