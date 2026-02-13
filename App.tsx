
import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Watch, 
  Headphones, 
  Search, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronRight, 
  Cpu, 
  Camera, 
  Zap, 
  Layers 
} from 'lucide-react';

// Sub-components defined outside main App for performance
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <h1 className="text-2xl font-extrabold tracking-tighter">SAMSUNG</h1>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <a href="#" className="hover:text-white transition-colors">Mobile</a>
            <a href="#" className="hover:text-white transition-colors">TV & AV</a>
            <a href="#" className="hover:text-white transition-colors">Electrocasnice</a>
            <a href="#" className="hover:text-white transition-colors">Computing</a>
            <a href="#" className="hover:text-white transition-colors">Suport</a>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <Search className="w-5 h-5 cursor-pointer text-gray-300 hover:text-white" />
          <ShoppingCart className="w-5 h-5 cursor-pointer text-gray-300 hover:text-white" />
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black h-screen p-6 flex flex-col gap-6 text-xl md:hidden">
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Mobile</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>TV & AV</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Electrocasnice</a>
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Computing</a>
          <hr className="border-gray-800" />
          <a href="#" onClick={() => setMobileMenuOpen(false)}>Contul meu</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tight animate-fade-in">
          Galaxy S24 Ultra
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Titanium la exterior. Putere pură la interior. Redefinim limitele a ceea ce poate face un smartphone.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
            Cumpără acum <ChevronRight className="w-4 h-4" />
          </button>
          <button className="px-10 py-4 border border-gray-600 rounded-full font-bold hover:bg-white/10 transition-all">
            Află mai multe
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="p-8 bg-gray-900/50 border border-gray-800 rounded-3xl hover:border-blue-500/50 transition-all group">
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors">
      <Icon className="w-7 h-7 text-blue-400" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Performanță fără compromis</h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={Layers}
            title="Design Titanium"
            desc="O armură ultra-ușoară și ultra-rezistentă care se simte incredibil în mână."
          />
          <FeatureCard 
            icon={Cpu}
            title="Snapdragon 8 Gen 3"
            desc="Cea mai rapidă procesare văzută vreodată pe un dispozitiv Galaxy."
          />
          <FeatureCard 
            icon={Camera}
            title="200MP Pro-Grade"
            desc="Surprinde detalii uluitoare chiar și în cele mai întunecate condiții."
          />
          <FeatureCard 
            icon={Zap}
            title="Baterie All-Day"
            desc="Optimizare inteligentă a consumului pentru o autonomie record."
          />
        </div>
      </div>
    </section>
  );
};

const Showcase = () => {
  return (
    <section className="py-24 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://picsum.photos/seed/samsung1/1200/1600" 
              alt="Samsung Display" 
              className="rounded-[2.5rem] shadow-2xl border border-white/10 rotate-[-2deg] hover:rotate-0 transition-transform duration-700 w-full"
            />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <span className="text-blue-500 font-bold tracking-widest uppercase">Display Revoluționar</span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
              Dynamic <br /> AMOLED 2X
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Culori vibrante și negru infinit. Ecranul de 6.8 inch oferă o luminozitate maximă de 2600 nits, asigurând o vizibilitate perfectă chiar și sub lumina directă a soarelui.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-lg font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Rată de refresh adaptivă 1-120Hz
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                Vision Booster îmbunătățit
              </li>
              <li className="flex items-center gap-3 text-lg font-medium">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                S Pen integrat pentru precizie extremă
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-1">
            <h1 className="text-2xl font-black mb-6 tracking-tighter">SAMSUNG</h1>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Inovația nu se oprește niciodată. Descoperă universul Galaxy și restul tehnologiilor noastre de top.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Produse</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Smartphone</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tablete</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Audio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Watch</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Suport</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garanție</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Comunitate</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Află mai multe</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Despre noi</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carieră</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Investitori</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Știri</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs">© 2024 Samsung Electronics Co., Ltd. Toate drepturile rezervate.</p>
          <div className="flex gap-6 text-xs text-gray-600">
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Legal</a>
            <a href="#" className="hover:text-gray-400">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        {/* Full width immersive image section */}
        <div className="relative h-[60vh] bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(https://picsum.photos/seed/samsungwide/1920/1080)'}}>
           <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <div className="text-center px-6">
                <h2 className="text-4xl md:text-6xl font-black mb-4">Design sustenabil</h2>
                <p className="text-lg md:text-xl text-gray-300">Materiale reciclate. Impact minim asupra mediului.</p>
              </div>
           </div>
        </div>

        <Showcase />
        
        {/* Product Ecosystem */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-black mb-12 text-center">Ecosistemul Galaxy</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] aspect-square bg-gray-900">
                  <img src="https://picsum.photos/seed/buds/600/600" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt="Galaxy Buds" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold">Galaxy Buds3 Pro</h3>
                    <p className="text-gray-400">Sunet la calitate de studio.</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] aspect-square bg-gray-900">
                  <img src="https://picsum.photos/seed/watch/600/600" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt="Galaxy Watch" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold">Galaxy Watch Ultra</h3>
                    <p className="text-gray-400">Performanță la extrem.</p>
                  </div>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-[2rem] aspect-square bg-gray-900">
                  <img src="https://picsum.photos/seed/tab/600/600" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt="Galaxy Tab" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-bold">Galaxy Tab S9</h3>
                    <p className="text-gray-400">Productivitate fără limite.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter / CTA */}
        <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">Rămâi la curent cu inovația</h2>
            <p className="text-gray-400 text-lg mb-10">Înscrie-te la newsletter-ul nostru pentru a primi oferte exclusive și noutăți despre produsele Samsung.</p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Adresa ta de email" 
                className="flex-1 bg-gray-900 border border-gray-800 rounded-full px-8 py-4 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-gray-200 transition-all">
                Abonează-te
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
