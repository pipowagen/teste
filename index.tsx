
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Smartphone, 
  Cpu, 
  Camera, 
  Zap, 
  ChevronRight, 
  ShieldCheck, 
  Layers, 
  Maximize2,
  Menu,
  X,
  Search,
  ShoppingCart
} from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <span className="text-2xl font-black tracking-tighter">SAMSUNG</span>
          <div className="hidden lg:flex gap-8 text-[13px] font-medium tracking-wide text-gray-400">
            {['Mobile', 'TV & AV', 'Electrocasnice', 'Computing', 'Promotii'].map(item => (
              <a key={item} href="#" className="hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100" />
          <ShoppingCart className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100" />
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-black z-[-1] flex flex-col p-10 gap-8 text-2xl font-bold transition-transform duration-500 lg:hidden ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="mt-20 flex flex-col gap-6">
          {['Mobile', 'TV & AV', 'Electrocasnice', 'Computing', 'Suport'].map(item => (
            <a key={item} href="#" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const FeatureCard = ({ icon: Icon, title, sub, color }: any) => (
  <div className="group p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all duration-500">
    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 bg-white/5 group-hover:scale-110 transition-transform ${color}`}>
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500 text-sm leading-relaxed">{sub}</p>
  </div>
);

const App = () => {
  return (
    <div className="bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-up">
            Noul Galaxy S24 Ultra
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-gradient animate-fade-up delay-100">
            Titanium.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light animate-fade-up delay-200">
            O carcasă nouă din titan. Un ecran mai plat. Performanță grafică de neegalat. Acesta este Ultra.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-up delay-200">
            <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2 group">
              Cumpără acum <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white/5 transition-all">
              Află mai multe
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-32 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-500 font-bold uppercase tracking-widest text-sm">Construcție Premium</span>
              <h2 className="text-5xl md:text-7xl font-black mt-4 mb-8 tracking-tight">O armură din titan.</h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Fă cunoștință cu noul upgrade. O carcasă durabilă din titan este acum integrată direct în ramă. Rezistența la zgârieturi, apă și praf (IP68) este acum la un cu totul alt nivel.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <ShieldCheck className="text-blue-500 mb-4" />
                  <span className="block font-bold">Titanium Grade</span>
                  <span className="text-gray-500 text-sm">Durabilitate extremă</span>
                </div>
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                  <Layers className="text-blue-500 mb-4" />
                  <span className="block font-bold">Gorilla Armor</span>
                  <span className="text-gray-500 text-sm">Ecran ultra-rezistent</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-500/20 blur-[100px] rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=1000" 
                alt="Samsung Hardware" 
                className="relative rounded-[3rem] shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 bg-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">Putere brută.</h2>
            <p className="text-gray-500">Hardware-ul care redefineste segmentul mobile.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={Cpu} 
              title="Snapdragon 8 Gen 3" 
              sub="Optimizat special pentru Galaxy. Performanță de gaming la nivel de consolă."
              color="text-orange-400"
            />
            <FeatureCard 
              icon={Camera} 
              title="200MP Main" 
              sub="Cea mai mare rezoluție pe un smartphone. Detalii incredibile în fiecare pixel."
              color="text-blue-400"
            />
            <FeatureCard 
              icon={Maximize2} 
              title="2600 nits" 
              sub="Cel mai luminos ecran de până acum. Claritate perfectă sub soare."
              color="text-yellow-400"
            />
            <FeatureCard 
              icon={Zap} 
              title="5000 mAh" 
              sub="Bateria care ține pasul cu tine. Eficiență energetică revoluționară."
              color="text-green-400"
            />
          </div>
        </div>
      </section>

      {/* Display Section */}
      <section className="py-32 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter">
            Dynamic AMOLED 2X
          </h2>
          <div className="relative inline-block w-full max-w-6xl">
            <img 
              src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&q=80&w=2000" 
              className="rounded-[3rem] border border-white/10 w-full object-cover h-[600px]"
              alt="Display"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-left">
              <span className="text-2xl font-bold block">Claritate imersivă</span>
              <span className="text-gray-400">Rată de refresh adaptivă 1-120Hz</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/5 pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-20">
            <div className="col-span-2">
              <h4 className="text-2xl font-black tracking-tighter mb-6">SAMSUNG</h4>
              <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                Inspiră lumea, creează viitorul. Inovația este în ADN-ul nostru.
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm">Produse</h5>
              <ul className="space-y-4 text-gray-500 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Smartphone</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tablete</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Audio</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Watches</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-sm">Suport</h5>
              <ul className="space-y-4 text-gray-500 text-xs">
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Garanție</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Comunitate</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-gray-600 uppercase tracking-widest">© 2024 Samsung Electronics. Toate drepturile rezervate.</p>
            <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest">
              <a href="#" className="hover:text-white transition-colors">Confidențialitate</a>
              <a href="#" className="hover:text-white transition-colors">Termeni</a>
              <a href="#" className="hover:text-white transition-colors">Cookie-uri</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Rendering using modern React 18/19 approach
const root = createRoot(document.getElementById('root')!);
root.render(<App />);
