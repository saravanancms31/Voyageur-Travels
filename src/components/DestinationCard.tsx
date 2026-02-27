import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, ArrowRight } from 'lucide-react';
import { Destination } from '@/src/data/destinations';

interface Props {
  destination: Destination;
  index: number;
}

export const DestinationCard = ({ destination, index }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
    >
      <div className="relative h-80 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
          {destination.category}
        </div>
        <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-sm text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
          <Star className="w-3 h-3 text-brand-gold fill-brand-gold" />
          {destination.rating}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-1 text-brand-gold mb-2">
          <MapPin className="w-3 h-3" />
          <span className="text-[10px] font-bold tracking-widest uppercase">{destination.country}</span>
        </div>
        <h3 className="text-2xl font-serif mb-2 group-hover:text-brand-gold transition-colors">
          {destination.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-6">
          {destination.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block uppercase tracking-tighter">Starting from</span>
            <span className="text-xl font-bold text-brand-dark">${destination.price}</span>
          </div>
          <button className="w-10 h-10 rounded-full bg-brand-paper flex items-center justify-center group-hover:bg-brand-gold transition-colors">
            <ArrowRight className="w-5 h-5 group-hover:text-brand-dark" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
