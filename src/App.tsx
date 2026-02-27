import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationCard } from './components/DestinationCard';
import { TravelAssistant } from './components/TravelAssistant';
import { Footer } from './components/Footer';
import { DESTINATIONS } from './data/destinations';
import { Compass, Map, Wind, Mountain, Globe } from 'lucide-react';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Beach' | 'Mountain' | 'City' | 'Cultural'>('All');

  const filteredDestinations = activeCategory === 'All' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeCategory);

  const categories = [
    { name: 'All', icon: Globe },
    { name: 'Beach', icon: Wind },
    { name: 'Mountain', icon: Mountain },
    { name: 'City', icon: Map },
    { name: 'Cultural', icon: Compass },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Categories Section */}
        <section id="destinations" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-brand-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block"
            >
              Curated Collections
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">Find Your Next Adventure</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name as any)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all duration-300 ${
                    activeCategory === cat.name 
                    ? 'bg-brand-dark text-white shadow-xl scale-105' 
                    : 'bg-white text-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest, index) => (
              <DestinationCard key={dest.id} destination={dest} index={index} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experiences" className="py-24 bg-brand-dark text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
                The Voyageur Way
              </span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">
                Unforgettable <br />
                <span className="italic">Experiences</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
                We don't just book trips; we craft legacies. From private island escapes to hidden mountain retreats, every detail is meticulously planned to ensure your journey is as unique as you are.
              </p>
              <div className="space-y-6">
                {[
                  'Bespoke Itineraries Tailored to You',
                  '24/7 Personal Concierge Service',
                  'Exclusive Access to Hidden Gems',
                  'Sustainable & Responsible Travel'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-gold" />
                    </div>
                    <span className="text-sm font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-12 bg-brand-gold text-brand-dark px-10 py-4 rounded-full font-bold hover:bg-white transition-colors">
                EXPLORE MORE
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1000"
                  alt="Experience"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-[40px] overflow-hidden border-8 border-brand-dark hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500"
                  alt="Experience Detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Destinations', value: '150+' },
              { label: 'Happy Travelers', value: '25k+' },
              { label: 'Luxury Hotels', value: '500+' },
              { label: 'Years Experience', value: '12' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-serif text-brand-dark mb-2">{stat.value}</p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <TravelAssistant />
    </div>
  );
}
