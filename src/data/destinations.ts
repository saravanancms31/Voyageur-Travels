export interface Destination {
  id: string;
  name: string;
  country: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: 'Beach' | 'Mountain' | 'City' | 'Cultural';
  tags: string[];
}

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Santorini',
    country: 'Greece',
    description: 'Experience the breathtaking sunsets and iconic blue-domed churches of this Aegean paradise.',
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000',
    category: 'Beach',
    tags: ['Romantic', 'Luxury', 'History']
  },
  {
    id: '2',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Immerse yourself in the serene beauty of ancient temples, traditional tea houses, and cherry blossoms.',
    price: 1500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000',
    category: 'Cultural',
    tags: ['Zen', 'Tradition', 'Food']
  },
  {
    id: '3',
    name: 'Swiss Alps',
    country: 'Switzerland',
    description: 'Discover the majestic peaks and crystal-clear lakes of the world\'s most famous mountain range.',
    price: 1800,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&q=80&w=1000',
    category: 'Mountain',
    tags: ['Adventure', 'Nature', 'Skiing']
  },
  {
    id: '4',
    name: 'Amalfi Coast',
    country: 'Italy',
    description: 'A dramatic coastline dotted with colorful villages perched precariously on cliffs above the sea.',
    price: 1400,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000',
    category: 'Beach',
    tags: ['Scenic', 'Coastal', 'Cuisine']
  },
  {
    id: '5',
    name: 'Reykjavik',
    country: 'Iceland',
    description: 'Witness the magical Northern Lights and explore the otherworldly volcanic landscapes.',
    price: 1600,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?auto=format&fit=crop&q=80&w=1000',
    category: 'Mountain',
    tags: ['Aurora', 'Geothermal', 'Unique']
  },
  {
    id: '6',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light awaits with its world-class art, fashion, and culinary delights.',
    price: 1100,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
    category: 'City',
    tags: ['Art', 'Romance', 'Shopping']
  }
];
