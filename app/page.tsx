'use client';

import Image from 'next/image';
import Link from 'next/link';
import logoImg from '@/public/assets/logo.png';
import tradingviewImg from '@/public/assets/tradingview.png';
import book1Img from '@/public/assets/book1.png';
import book2Img from '@/public/assets/book2.png';
import whatsappImg from '@/public/assets/whatsapp.png';

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
        <section className="py-20 px-5 md:px-16 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-secondary"></span>
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">Institutional Intelligence</span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary-container">
              Master The Stock Market Before It Masters You
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Unlocking probable strategies for financial freedom. Gain access to the confidential blueprints used by elite traders and bespoke financial boutiques.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-gold text-on-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity w-full md:w-auto text-center">
                UNLOCK YOUR BUNDLE NOW - ₹375 ONLY
              </button>
              <p className="font-numeric-data text-numeric-data text-on-surface-variant mt-2 text-center md:text-left">
                Original Value: ₹23,000
              </p>
            </div>
          </div>
          <div className="relative w-full h-[500px]   p-8 flex items-center justify-center overflow-hidden">
            <Image 
              src={tradingviewImg} 
              alt="TradingView Chart" 
              fill 
              className="object-contain mix-blend-multiply"
            />
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

        {/* Premium FAQ Section */}
        <section className="py-20 bg-surface-container-lowest px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary-container mb-12 text-center">Inquiries</h2>
            <div className="space-y-0">
              {/* FAQ Item 1 */}
              <div className="border-b border-secondary border-opacity-30 py-6 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary">01</span>
                    <h3 className="font-headline-sm text-[20px] text-primary-container group-hover:text-secondary transition-colors">Is this suitable for beginners?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180">keyboard_arrow_down</span>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="border-b border-secondary border-opacity-30 py-6 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary">02</span>
                    <h3 className="font-headline-sm text-[20px] text-primary-container group-hover:text-secondary transition-colors">How do I access the materials after purchase?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180">keyboard_arrow_down</span>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="border-b border-secondary border-opacity-30 py-6 group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="font-numeric-data text-numeric-data text-secondary">03</span>
                    <h3 className="font-headline-sm text-[20px] text-primary-container group-hover:text-secondary transition-colors">Are the strategies applicable to Crypto or Forex?</h3>
                  </div>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:rotate-180">keyboard_arrow_down</span>
                </div>
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
              <span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Regulatory Disclosure
              <span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Support
              <span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-all duration-300 relative group" href="#">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-px bg-secondary transition-all duration-300 group-hover:w-full"></span>
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
        href="https://wa.me/917574002596?text=Can%20I%20get%20more%20info%20..%3F" 
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