import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingBag, Factory, Pill, Cpu, Menu } from 'lucide-react';
import { QuoteModal } from '@/components/quote-modal';

const Navbar = () => {
  return (
    <header className="w-full px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
      <div className="text-xl font-black tracking-widest uppercase">/AXION</div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
        <Link href="#" className="hover:text-zinc-900 transition-colors">About us</Link>
        <Link href="#" className="hover:text-zinc-900 transition-colors">Services</Link>
        <Link href="#" className="hover:text-zinc-900 transition-colors">Our Approach</Link>
        <Link href="#" className="hover:text-zinc-900 transition-colors">Technology</Link>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <Link href="#" className="px-6 py-2.5 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">Contact Us</Link>
        <Link href="#" className="px-6 py-2.5 border border-zinc-200 rounded-full text-sm font-medium hover:border-zinc-300 transition-colors">Sign In</Link>
      </div>
      <button className="md:hidden p-2">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="w-full px-6 pt-12 pb-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-8 pt-8">
          <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight">
            Let&apos;s Move Your<br />Business Forward
          </h1>
        </div>
        <div className="flex flex-col gap-8 lg:pt-8 lg:pl-12">
          <p className="text-lg md:text-xl text-zinc-600 max-w-md leading-relaxed">
            We provide reliable shipping wherever you need it. With us, you get precision, speed, and confidence at every step.
          </p>
          <div>
            <Link href="#" className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full text-base font-medium hover:bg-zinc-800 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-16 relative w-full h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden">
        <Image 
          src="https://picsum.photos/seed/shippingcontainers/1600/900" 
          alt="Shipping Containers" 
          fill 
          className="object-cover"
          referrerPolicy="no-referrer"
          priority
        />
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="w-full px-6 py-24 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Logistics Solutions</h2>
        </div>
        <div className="flex flex-col items-start md:items-end gap-4">
          <p className="text-zinc-600 max-w-xs text-left md:text-right">
            Tailored to the diverse needs of businesses.
          </p>
          <Link href="#" className="px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors">
            See All
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
          <Image src="https://picsum.photos/seed/cargoship/800/600" alt="International Shipping" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-xl font-bold mb-2">International Shipping</h3>
            <p className="text-white/80 text-sm max-w-md">We manage global shipping from origin to destination, providing both air and sea freight options to suit your timeline and budget.</p>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden group">
          <Image src="https://picsum.photos/seed/warehouseboxes/800/600" alt="Warehousing & Distribution" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-xl font-bold mb-2">Warehousing & Distribution</h3>
            <p className="text-white/80 text-sm max-w-md">Our strategically located warehouses ensure fast, secure storage and distribution of your products. With flexible storage options.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative h-[250px] rounded-2xl overflow-hidden group">
          <Image src="https://picsum.photos/seed/trucks/600/400" alt="Last-Mile Delivery" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Last-Mile Delivery</h3>
            <p className="text-white/80 text-xs line-clamp-2">Our reliable last-mile delivery service ensures that your products reach the final destination efficiently, providing tracking and re...</p>
          </div>
        </div>
        <div className="relative h-[250px] rounded-2xl overflow-hidden group">
          <Image src="https://picsum.photos/seed/supplychain/600/400" alt="Supply Chain Optimization" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Supply Chain Optimization</h3>
            <p className="text-white/80 text-xs line-clamp-2">Our expert team analyzes and improves your supply chain, reducing costs, mini...</p>
          </div>
        </div>
        <div className="relative h-[250px] rounded-2xl overflow-hidden group">
          <Image src="https://picsum.photos/seed/customs/600/400" alt="Customs Clearance" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-lg font-bold mb-2">Customs Clearance</h3>
            <p className="text-white/80 text-xs line-clamp-2">We navigate the complexities of customs regulations, ensuring your shipments cl...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Industries = () => {
  return (
    <section className="w-full px-6 py-24 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest uppercase mb-6">/INDUSTRIES WE SERVE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Tailored Logistics<br />for Every Business</h2>
            <div className="flex flex-col items-start lg:items-end gap-8">
              <p className="text-zinc-600 max-w-md text-left lg:text-right">
                At /AXION, we understand that every industry has unique logistics challenges. That&apos;s why we offer customized solutions for a wide range of sectors.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 transition-colors">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100 transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-3xl flex flex-col h-[320px] shadow-sm border border-zinc-100">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-auto">
              <ShoppingBag className="w-6 h-6 text-zinc-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Retail & E-commerce</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Streamline your fulfillment process, reduce delivery times, and improve customer satisfaction.</p>
            </div>
          </div>
          <div className="bg-zinc-900 text-white p-8 rounded-3xl flex flex-col h-[320px] shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-auto">
              <Factory className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
              <p className="text-sm text-white/70 leading-relaxed">Optimize your supply chain, from raw materials to finished goods, with efficient transportation and services.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl flex flex-col h-[320px] shadow-sm border border-zinc-100">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-auto">
              <Pill className="w-6 h-6 text-zinc-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Healthcare & Pharmacy</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Ensure the safe, timely delivery of temperature-sensitive products and critical shipments.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl flex flex-col h-[320px] shadow-sm border border-zinc-100">
            <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-auto">
              <Cpu className="w-6 h-6 text-zinc-900" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Technology & Electronics</h3>
              <p className="text-sm text-zinc-600 leading-relaxed">Handle high-value, sensitive products with care, ensuring fast, secure delivery across global markets.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Technology = () => {
  return (
    <section className="w-full px-6 py-24 max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-widest uppercase mb-6">/TECHNOLOGY</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Innovation that Moves<br />Your Business</h2>
        <div className="flex items-end">
          <p className="text-zinc-600 text-lg max-w-md">
            We leverage the latest technology to improve the way we manage your shipments.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative h-[500px] md:h-[600px] rounded-[2rem] overflow-hidden">
          <Image 
            src="https://picsum.photos/seed/blackcontainer/800/1000" 
            alt="Technology Container" 
            fill 
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          <div className="flex flex-col border-t border-zinc-200 pt-6">
            <h3 className="text-xl font-bold mb-3">Real-Time Tracking</h3>
            <p className="text-sm text-zinc-600 mb-6 flex-grow">Stay up-to-date with your shipments from pick-up to delivery.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:text-zinc-600 transition-colors">
              Learn More <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center"><ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
          <div className="flex flex-col border-t border-zinc-200 pt-6">
            <h3 className="text-xl font-bold mb-3">Data Analytics</h3>
            <p className="text-sm text-zinc-600 mb-6 flex-grow">Gain insights into your supply chain, identify bottlenecks, and make data-driven decisions.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:text-zinc-600 transition-colors">
              Learn More <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center"><ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
          <div className="flex flex-col border-t border-zinc-200 pt-6">
            <h3 className="text-xl font-bold mb-3">Automated Updates</h3>
            <p className="text-sm text-zinc-600 mb-6 flex-grow">Receive timely notifications about your shipments, including expected delivery times and delays.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:text-zinc-600 transition-colors">
              Learn More <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center"><ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
          <div className="flex flex-col border-t border-zinc-200 pt-6">
            <h3 className="text-xl font-bold mb-3">Secure Portal</h3>
            <p className="text-sm text-zinc-600 mb-6 flex-grow">Access your account anytime with our secure online portal for booking, managing, and tracking shipments.</p>
            <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:text-zinc-600 transition-colors">
              Learn More <div className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center"><ArrowRight className="w-3 h-3" /></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full px-6 py-24 bg-white max-w-7xl mx-auto">
      <div className="text-xs font-bold tracking-widest uppercase mb-6">/CLIENT SUCCESS</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Proven Results for<br />Industry Leaders</h2>
        <div className="flex items-end">
          <p className="text-zinc-600 text-lg max-w-md">
            See how we&apos;ve helped global brands optimize their supply chains and accelerate growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Testimonial 1 */}
        <div className="bg-[#F9F9F9] p-8 rounded-3xl flex flex-col border border-zinc-100">
          <div className="mb-8">
            <div className="text-5xl font-black tracking-tighter text-zinc-900 mb-2">40%</div>
            <div className="text-sm font-bold text-zinc-600 uppercase tracking-wider">Reduction in transit time</div>
          </div>
          <p className="text-zinc-700 leading-relaxed mb-8 flex-grow">
            &quot;/AXION completely overhauled our international distribution network. Their real-time tracking and strategic warehousing allowed us to cut our transit times nearly in half, significantly boosting our customer satisfaction.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden relative">
              <Image src="https://picsum.photos/seed/person1/100/100" alt="Sarah Jenkins" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-zinc-900">Sarah Jenkins</div>
              <div className="text-sm text-zinc-500">VP of Supply Chain, TechGlobal</div>
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-zinc-900 p-8 rounded-3xl flex flex-col text-white shadow-lg">
          <div className="mb-8">
            <div className="text-5xl font-black tracking-tighter mb-2">2.5x</div>
            <div className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Increase in order volume</div>
          </div>
          <p className="text-zinc-300 leading-relaxed mb-8 flex-grow">
            &quot;As an e-commerce brand experiencing hyper-growth, we needed a logistics partner that could scale with us instantly. /AXION&apos;s automated fulfillment seamlessly handled our massive spikes in demand.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-800 overflow-hidden relative">
              <Image src="https://picsum.photos/seed/person2/100/100" alt="Marcus Chen" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-white">Marcus Chen</div>
              <div className="text-sm text-zinc-400">COO, StyleNova Retail</div>
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#F9F9F9] p-8 rounded-3xl flex flex-col border border-zinc-100">
          <div className="mb-8">
            <div className="text-5xl font-black tracking-tighter text-zinc-900 mb-2">$2.4M</div>
            <div className="text-sm font-bold text-zinc-600 uppercase tracking-wider">Annual cost savings</div>
          </div>
          <p className="text-zinc-700 leading-relaxed mb-8 flex-grow">
            &quot;The data analytics provided by /AXION identified inefficiencies in our last-mile delivery that we hadn&apos;t seen. Their optimization strategies translated directly to our bottom line within the first quarter.&quot;
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-zinc-200 overflow-hidden relative">
              <Image src="https://picsum.photos/seed/person3/100/100" alt="Elena Rodriguez" fill className="object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="font-bold text-zinc-900">Elena Rodriguez</div>
              <div className="text-sm text-zinc-500">Director of Operations, MediCorp</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full bg-zinc-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-black tracking-widest uppercase">/AXION</div>
        <div className="text-sm text-zinc-400">© 2026 AXION Logistics. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Industries />
        <Technology />
        <Testimonials />
      </main>
      <Footer />
      <QuoteModal />
    </div>
  );
}
