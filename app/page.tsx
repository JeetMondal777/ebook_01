'use client';

import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/public/assets/logo.png';
import tradingviewImg from '@/public/assets/tradingview.png';
import whatsappImg from '@/public/assets/whatsapp.png';

const book1Img = "https://i.pinimg.com/1200x/3a/91/c4/3a91c4f0974a59e90278b11841e9c92f.jpg";
const book2Img = "https://i.pinimg.com/1200x/ed/43/5c/ed435c1ee75c704e210b4ed1e57002bd.jpg";

export default function Home() {
  return (
    <>
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #785a1a 0%, #e9c176 50%, #785a1a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .bg-gradient-gold {
          background: linear-gradient(135deg, #785a1a 0%, #e9c176 50%, #785a1a 100%);
        }
        .ambient-shadow {
          box-shadow: 0 10px 40px -10px rgba(0, 27, 61, 0.15);
        }
        .premium-shadow {
          box-shadow: 0 25px 60px -15px rgba(0, 27, 61, 0.25), 0 0 80px -20px rgba(119, 90, 25, 0.15);
        }
        
        /* Hero Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUpSlow {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes goldGlow {
          0%, 100% { box-shadow: 0 10px 40px -10px rgba(119, 90, 25, 0.3); }
          50% { box-shadow: 0 10px 50px -10px rgba(119, 90, 25, 0.5); }
        }
        
        .hero-animate-1 { animation: fadeInUp 0.8s ease-out forwards; opacity: 0; }
        .hero-animate-2 { animation: fadeInUp 0.8s ease-out 0.15s forwards; opacity: 0; }
        .hero-animate-3 { animation: fadeInUp 0.8s ease-out 0.3s forwards; opacity: 0; }
        .hero-animate-4 { animation: fadeInUp 0.8s ease-out 0.45s forwards; opacity: 0; }
        .hero-animate-5 { animation: fadeInUpSlow 1s ease-out 0.6s forwards; opacity: 0; }
        
        .chart-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .btn-shimmer {
          background: linear-gradient(135deg, #785a1a 0%, #e9c176 25%, #d4b85a 50%, #e9c176 75%, #785a1a 100%);
          background-size: 200% 100%;
          animation: shimmer 3s linear infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .btn-shimmer:hover {
          animation: shimmer 1s linear infinite, goldGlow 2s ease-in-out infinite;
          transform: translateY(-4px) scale(1.03);
          box-shadow: 0 20px 50px -10px rgba(119, 90, 25, 0.5), 0 0 30px -5px rgba(119, 90, 25, 0.3);
        }
        .btn-shimmer:active {
          transform: translateY(-1px) scale(1.01);
          transition: transform 0.1s ease;
        }
        
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .ticker-track {
          display: flex;
          width: max-content;
          animation: ticker 40s linear infinite;
        }
        .ticker-track:hover {
          animation-play-state: paused;
        }
        
        /* Background mesh gradient */
        .hero-bg {
          background: 
            radial-gradient(ellipse 80% 50% at 100% -10%, rgba(119, 90, 25, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 0% 80%, rgba(0, 27, 61, 0.05) 0%, transparent 50%),
            linear-gradient(180deg, #f9f9fc 0%, #f3f3f6 100%);
        }
      `}</style>

      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface border-b border-outline-variant">
        <div className="flex justify-between items-center h-20 px-5 md:px-16 max-w-[1280px] mx-auto">
          <Image src={logoImg} alt="Shine Native" width={180} height={48} className="h-12 w-auto" />
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            <a className="text-primary border-b-2 border-secondary pb-1 font-label-caps text-label-caps hover:text-secondary transition-all duration-300" href="#">Courses</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-caps text-label-caps hover:text-secondary transition-all duration-300" href="#">E-Books</a>
            <button className="bg-primary-container text-white px-6 py-3 font-label-caps text-label-caps scale-95 transition-transform duration-200 hover:opacity-90">Join Elite</button>
          </div>
          {/* Mobile Menu Placeholder */}
          <div className="md:hidden">
            <span className="material-symbols-outlined text-primary text-[24px]">menu</span>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center py-24 md:py-32 overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src={tradingviewImg} 
              alt="TradingView Chart Background" 
              fill 
              className="object-cover opacity-40 mix-blend-multiply"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/90"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary-container/5"></div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-20 left-10 w-32 h-32 border border-secondary/10 rounded-full"></div>
          <div className="absolute bottom-32 right-20 w-20 h-20 border border-secondary/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-secondary/30 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-secondary/20 rounded-full"></div>
          
          {/* Content */}
          <div className="relative z-10 px-5 md:px-16 max-w-[900px] mx-auto text-center">
            <div className="hero-animate-1 flex items-center justify-center gap-4 mb-6">
              <span className="h-px w-12 bg-secondary"></span>
              <span className="font-label-caps text-label-caps text-secondary tracking-[0.2em] uppercase">Institutional Intelligence</span>
              <span className="h-px w-12 bg-secondary"></span>
            </div>
            
            <h1 className="hero-animate-2 font-headline-lg text-[42px] md:text-[56px] lg:text-[68px] leading-[1.05] text-primary-container tracking-tight mb-8">
              Master The <span className="text-gradient-gold">Stock Market</span> Before It Masters You
            </h1>
            
            <p className="hero-animate-3 font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-10">
              Unlocking probable strategies for financial freedom. Gain access to the confidential blueprints used by elite traders and bespoke financial boutiques.
            </p>
            
            <div className="hero-animate-4 flex flex-col items-center gap-6">
              <button className="btn-shimmer text-on-primary px-12 py-6 font-label-caps text-label-caps uppercase tracking-[0.15em] rounded-lg">
                UNLOCK YOUR BUNDLE NOW — ₹375 ONLY
              </button>
              
              <div className="flex items-center justify-center gap-3">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <span className="font-numeric-data text-numeric-data text-on-surface-variant">
                  4,200+ traders enrolled
                </span>
              </div>
              
              <p className="font-numeric-data text-numeric-data text-secondary font-semibold">
                Original Value: <span className="line-through text-on-surface-variant">₹23,000</span> — You save ₹22,625
              </p>
            </div>
          </div>
        </section>

        {/* Value Bar */}
        <section className="border-y border-outline-variant bg-surface-container-low py-8">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto flex flex-wrap justify-between items-center gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">book_4</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">15+ Premium E-Books</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">school</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">3 Bonus Courses</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">all_inclusive</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">Lifetime Access</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-outline-variant"></div>
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-[24px]">group</span>
              <span className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">10k+ Students</span>
            </div>
          </div>
        </section>

        {/* Featured Books Section */}
        <section className="py-20 bg-background px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="flex justify-between items-end mb-24 border-b border-outline-variant pb-6">
            <h2 className="font-headline-md text-headline-md text-primary-container tracking-wide">Featured Intelligence</h2>
            <a className="font-label-caps text-[13px] text-primary uppercase tracking-[0.15em] hover:text-secondary hover:underline decoration-secondary underline-offset-8 transition-all duration-300 flex items-center gap-2 group" href="#">
              Explore The Library
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">east</span>
            </a>
          </div>

          {/* Editorial Spread Layout */}
          <div className="flex flex-col gap-32">
            {/* Book 1 (Prominent) */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              <div className="w-full md:w-1/2 relative">
                <div className="absolute top-4 left-4 z-20 bg-gradient-gold text-on-primary px-4 py-2 font-label-caps text-[11px] tracking-[0.2em] uppercase shadow-lg">
                  Flagship Intelligence
                </div>
                <div className="bg-surface-container-low/50 aspect-[4/5] flex items-center justify-center p-12 relative overflow-visible">
                  <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-low to-transparent opacity-50"></div>
                  <Image 
                    src={book1Img} 
                    alt="Profitable Candlestick Trading Book Cover" 
                    fill 
                    className="object-contain drop-shadow-[0_30px_30px_rgba(0,27,61,0.25)] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <span className="font-label-caps text-[13px] text-secondary tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                  <span className="w-12 h-px bg-secondary"></span>
                  Vol. I — Foundational Mechanics
                </span>
                <h3 className="font-headline-lg text-[40px] md:text-[56px] leading-[1.1] text-primary-container mb-6 font-medium">Profitable Candlestick Trading</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                  Master the ancient Japanese charting technique adapted for modern institutional markets. Discover the high-probability patterns that predict major trend reversals before they happen.
                </p>
                <button className="group flex items-center gap-3 text-primary-container font-label-caps text-label-caps tracking-[0.15em] uppercase hover:text-secondary transition-colors">
                  <span className="border-b border-primary-container group-hover:border-secondary pb-1 transition-colors">Explore Blueprint</span>
                </button>
              </div>
            </div>

            {/* Book 2 (Offset) */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24 md:-mt-16 lg:-mt-24">
              <div className="w-full md:w-5/12 relative md:translate-y-24">
                <div className="absolute top-4 right-4 z-20 bg-gradient-gold text-on-primary px-4 py-2 font-label-caps text-[11px] tracking-[0.2em] uppercase shadow-lg">
                  Institutional Grade
                </div>
                <div className="bg-surface-container-low/50 aspect-[4/5] flex items-center justify-center p-10 relative overflow-visible">
                  <Image 
                    src={book2Img} 
                    alt="Technical Analysis Book Cover" 
                    fill 
                    className="object-contain drop-shadow-[0_25px_25px_rgba(0,27,61,0.2)] hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="w-full md:w-7/12 flex flex-col items-start md:pl-12 lg:pl-24">
                <span className="font-label-caps text-[13px] text-secondary tracking-[0.2em] uppercase mb-6 flex items-center gap-4">
                  <span className="w-12 h-px bg-secondary"></span>
                  Vol. II — Advanced Dynamics
                </span>
                <h3 className="font-headline-lg text-[36px] md:text-[48px] leading-[1.15] text-primary-container mb-6 font-medium">Technical Analysis & Interpretations</h3>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-lg leading-relaxed">
                  The definitive guide to chart interpretations. Learn the proprietary methodologies used by top-tier hedge funds to identify algorithmic accumulation and distribution phases.
                </p>
                <button className="group flex items-center gap-3 text-primary-container font-label-caps text-label-caps tracking-[0.15em] uppercase hover:text-secondary transition-colors">
                  <span className="border-b border-primary-container group-hover:border-secondary pb-1 transition-colors">Explore Blueprint</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Premium About Us Section */}
        <section className="py-20 bg-surface-container-lowest border-y border-outline-variant">
          <div className="max-w-4xl mx-auto px-5 md:px-16 text-center flex flex-col items-center">
            <div className="flex items-center space-x-2 mb-8">
              <span className="h-px w-8 bg-secondary"></span>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Institutional Pedigree</span>
              <span className="h-px w-8 bg-secondary"></span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-8">Our Mandate</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              We exist to democratize access to the esoteric knowledge once guarded behind the walls of boutique financial firms. Our mission is to equip the dedicated retail investor with the exact strategic frameworks, risk management protocols, and psychological fortitude employed by apex market participants. We don't teach gambling; we instill institutional discipline.
            </p>
          </div>
        </section>

        {/* Unique Review Showcase: The Ledger of Success */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="px-5 md:px-16 max-w-[1280px] mx-auto mb-12 text-center">
            <h2 className="font-headline-md text-headline-md text-primary-container">The Ledger of Success</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">Verified Intelligence from Elite Members</p>
          </div>
          <div className="relative w-full">
            <div className="ticker-track gap-6 px-6">
              {/* Duplicated for continuous scroll effect */}
              <div className="flex gap-6">
                {/* Review 1 */}
                <div className="w-80 flex-shrink-0 bg-surface-container-lowest border border-outline-variant p-6 ambient-shadow flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-secondary text-opacity-50 text-[32px] mb-2">format_quote</span>
                    <p className="font-body-md text-body-md text-primary-container italic">&quot;The clarity on institutional order flow changed everything. It&apos;s not just theory, it&apos;s actionable strategy.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-secondary">JM</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-on-surface-variant font-medium">J. Mitchell</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-caps text-[10px] tracking-wider">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="w-96 flex-shrink-0 bg-primary-container text-on-primary p-8 ambient-shadow flex flex-col justify-between transform -translate-y-4">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-secondary text-[32px] mb-2">format_quote</span>
                    <p className="font-headline-sm font-normal leading-tight">&quot;I recovered my entire initial investment within the first week of applying the Candlestick methodologies.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-secondary border-opacity-30 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-primary-container">SP</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-secondary-fixed">S. Patel</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                    </div>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="w-80 flex-shrink-0 bg-surface-container-lowest border border-outline-variant p-6 ambient-shadow flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-secondary text-opacity-50 text-[32px] mb-2">format_quote</span>
                    <p className="font-body-md text-body-md text-primary-container italic">&quot;Finally, a resource that cuts through the retail noise. Pure, unadulterated market mechanics.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-secondary">AR</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-on-surface-variant font-medium">A. Reynolds</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-caps text-[10px] tracking-wider">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Review 4 */}
                <div className="w-80 flex-shrink-0 bg-surface-container-lowest border border-outline-variant p-6 ambient-shadow flex flex-col justify-between transform translate-y-4">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-secondary text-opacity-50 text-[32px] mb-2">format_quote</span>
                    <p className="font-body-md text-body-md text-primary-container italic">&quot;The risk management frameworks alone are worth 10x the price of this bundle.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-secondary">EC</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-on-surface-variant font-medium">E. Chen</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-caps text-[10px] tracking-wider">Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Duplicate for seamless loop */}
              <div className="flex gap-6">
                {/* Review 1 */}
                <div className="w-80 flex-shrink-0 bg-surface-container-lowest border border-outline-variant p-6 ambient-shadow flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-secondary text-opacity-50 text-[32px] mb-2">format_quote</span>
                    <p className="font-body-md text-body-md text-primary-container italic">&quot;The clarity on institutional order flow changed everything. It&apos;s not just theory, it&apos;s actionable strategy.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-secondary">JM</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-on-surface-variant font-medium">J. Mitchell</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-caps text-[10px] tracking-wider">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Review 2 */}
                <div className="w-96 flex-shrink-0 bg-primary-container text-on-primary p-8 ambient-shadow flex flex-col justify-between transform -translate-y-4">
                  <div className="mb-6">
                    <span className="material-symbols-outlined text-secondary text-[32px] mb-2">format_quote</span>
                    <p className="font-headline-sm font-normal leading-tight">&quot;I recovered my entire initial investment within the first week of applying the Candlestick methodologies.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-secondary border-opacity-30 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-primary-container">SP</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-secondary-fixed">S. Patel</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary-fixed">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                    </div>
                  </div>
                </div>

                {/* Review 3 */}
                <div className="w-80 flex-shrink-0 bg-surface-container-lowest border border-outline-variant p-6 ambient-shadow flex flex-col justify-between">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-secondary text-opacity-50 text-[32px] mb-2">format_quote</span>
                    <p className="font-body-md text-body-md text-primary-container italic">&quot;Finally, a resource that cuts through the retail noise. Pure, unadulterated market mechanics.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-secondary">AR</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-on-surface-variant font-medium">A. Reynolds</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-caps text-[10px] tracking-wider">Verified</span>
                    </div>
                  </div>
                </div>

                {/* Review 4 */}
                <div className="w-80 flex-shrink-0 bg-surface-container-lowest border border-outline-variant p-6 ambient-shadow flex flex-col justify-between transform translate-y-4">
                  <div className="mb-4">
                    <span className="material-symbols-outlined text-secondary text-opacity-50 text-[32px] mb-2">format_quote</span>
                    <p className="font-body-md text-body-md text-primary-container italic">&quot;The risk management frameworks alone are worth 10x the price of this bundle.&quot;</p>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-surface-variant rounded-full overflow-hidden">
                        <span className="flex items-center justify-center w-full h-full text-secondary">EC</span>
                      </div>
                      <span className="font-numeric-data text-numeric-data text-on-surface-variant font-medium">E. Chen</span>
                    </div>
                    <div className="flex items-center gap-1 text-secondary">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-label-caps text-[10px] tracking-wider">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-surface-container-lowest px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Have questions? We&apos;ve got answers.
              </p>
            </div>
            <div className="space-y-0">
              {/* FAQ Item 1 */}
              <div className="border-b border-secondary/20 py-4 md:py-5 group cursor-pointer">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary text-sm md:text-base">01</span>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] lg:text-[20px] text-primary-container group-hover:text-secondary transition-colors">Is this suitable for beginners?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180 flex-shrink-0">keyboard_arrow_down</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 pl-8 md:pl-12 text-sm md:text-base">
                  Absolutely. The bundle is structured to work for all levels — from understanding what a candlestick is to mastering advanced options strategies. We start with fundamentals and progress to expert-level concepts.
                </p>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-secondary/20 py-4 md:py-5 group cursor-pointer">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary text-sm md:text-base">02</span>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] lg:text-[20px] text-primary-container group-hover:text-secondary transition-colors">How do I access the materials after purchase?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180 flex-shrink-0">keyboard_arrow_down</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 pl-8 md:pl-12 text-sm md:text-base">
                  Immediately after payment, you&apos;ll receive a download link on-screen and via email. All 15 e-books in PDF format — instant access, no waiting. Download and keep them forever.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-secondary/20 py-4 md:py-5 group cursor-pointer">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary text-sm md:text-base">03</span>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] lg:text-[20px] text-primary-container group-hover:text-secondary transition-colors">Are the strategies applicable to Crypto or Forex?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180 flex-shrink-0">keyboard_arrow_down</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 pl-8 md:pl-12 text-sm md:text-base">
                  Yes. While focused on stock markets, the core principles — technical analysis, risk management, trading psychology — apply across all financial markets including crypto, forex, and commodities.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="border-b border-secondary/20 py-4 md:py-5 group cursor-pointer">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary text-sm md:text-base">04</span>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] lg:text-[20px] text-primary-container group-hover:text-secondary transition-colors">Do I get lifetime access?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180 flex-shrink-0">keyboard_arrow_down</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mt-3 pl-8 md:pl-12 text-sm md:text-base">
                  Once purchased, the PDFs are yours to keep forever. Download them anytime, access on any device — phone, tablet, laptop, or Kindle. No recurring fees, ever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 bg-surface-container-low border-t border-outline-variant flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5 md:px-16 max-w-[1280px] mx-auto w-full mb-12">
          <div className="col-span-1 lg:col-span-2">
            <Image src={logoImg} alt="Shine Native" width={180} height={48} className="h-12 w-auto mb-4" />
            <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
              Empowering the retail trader with institutional intelligence.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-full h-px bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-full h-px bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Regulatory Disclosure
              <span className="absolute bottom-0 left-0 w-full h-px bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Support
              <span className="absolute bottom-0 left-0 w-full h-px bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Contact
              <span className="absolute bottom-0 left-0 w-full h-px bg-secondary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-50"></span>
            </a>
          </div>
        </div>

        {/* Social Icons & Copyright Row */}
        <div className="px-5 md:px-16 max-w-[1280px] mx-auto w-full flex flex-col items-center border-t border-outline-variant pt-8">
          <div className="flex gap-6 mb-6">
            <a aria-label="X (Twitter)" className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            <a aria-label="Instagram" className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.instagram.com/shinenative5" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          <div className="font-body-md text-body-md text-on-surface-variant">
            © 2026 Shine Native. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/916361329208?text=Can%20I%20get%20more%20info%20..%3F" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-24 h-24 md:w-32 md:h-32 transition-transform hover:scale-110"
        style={{ cursor: 'pointer' }}
      >
        <Image 
          src={whatsappImg} 
          alt="Chat on WhatsApp" 
          fill 
          className="object-contain"
        />
      </a>
    </>
  );
}