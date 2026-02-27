import React from 'react';
import { motion } from 'motion/react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Background"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-brand-dark/20 to-brand-paper" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brand-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Luxury Travel Redefined
          </span>
          <h1 className="text-6xl md:text-8xl text-white font-serif mb-8 leading-tight">
            Discover the Art of <br />
            <span className="italic">Wanderlust</span>
          </h1>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-2xl p-4 md:p-2 flex flex-col md:flex-row items-stretch md:items-center gap-4 max-w-4xl mx-auto"
        >
          <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <MapPin className="text-brand-gold w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Location</p>
              <input
                type="text"
                placeholder="Where are you going?"
                className="bg-transparent border-none outline-none text-brand-dark font-medium placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-3 border-b md:border-b-0 md:border-r border-gray-100">
            <Calendar className="text-brand-gold w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Check In</p>
              <input
                type="text"
                placeholder="Add dates"
                className="bg-transparent border-none outline-none text-brand-dark font-medium placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          <div className="flex-1 flex items-center gap-3 px-4 py-3">
            <Users className="text-brand-gold w-5 h-5" />
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">Guests</p>
              <input
                type="text"
                placeholder="Add guests"
                className="bg-transparent border-none outline-none text-brand-dark font-medium placeholder:text-gray-300 w-full"
              />
            </div>
          </div>

          <button className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300">
            <Search className="w-5 h-5" />
            SEARCH
          </button>
        </motion.div>
      </div>
    </section>
  );
};
