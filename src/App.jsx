import { useState, useEffect, useRef } from "react";

const MENU = [
  {
    category: "Nasi Spesial",
    emoji: "🍚",
    items: [
      {
        name: "Nasi Tumpeng",
        desc: "Tumpeng megah dengan lauk-pauk Nusantara pilihan, dikurasi khusus untuk meluhurkan momen syukuran agung Anda.",
        icon: "🎋",
        tag: "Signature Selection",
        num: "01",
        image: "/src/assets/tumpeng post.png",
        prices: [{ label: "Per Porsi / Paket", price: "Rp 300.000" }] // Ganti nominal sesuai harga Anda
      },
      {
        name: "Nasi Uduk Spesial",
        desc: "Nasi uduk gurih dengan perasan santan murni pertama, disajikan dengan ragam lauk otentik bercita rasa aristokrat.",
        icon: "🍛",
        tag: "House Favorite",
        num: "02",
        image: "/src/assets/nasi uduk post.png",
        prices: [{ label: "Per Porsi", price: "Rp 15.000" }]
      },
      {
        name: "Nasi Goreng",
        desc: "Simfoni nasi goreng buatan rumah yang diolah bersama racikan rempah rahasia, melahirkan aroma klasik yang mendalam.",
        icon: "🥘",
        tag: "Chef's Special",
        num: "03",
        image: "/src/assets/nasi goreng post.png",
        prices: [{ label: "Per Porsi", price: "Rp 13.000" }]
      },
    ],
  },
  {
    category: "Cemilan Renyah",
    emoji: "🍿",
    items: [
      {
        name: "Keripik Pisang",
        desc: "Irisan pisang pilihan yang digoreng keemasan, menawarkan tekstur renyah halus yang ideal untuk pendamping teh sore.",
        icon: "🍌",
        tag: "Artisanal Crispy",
        num: "01",
        image: "/src/assets/kpisang post.png",
        prices: [
          { label: "1/4 Kg", price: "Rp 20.000" }, // Ganti nominal sesuai harga Anda
          { label: "1/2 Kg", price: "Rp 40.000" },
          { label: "1 Kg", price: "Rp 80.000" }
        ]
      },
      {
        name: "Keripik Cabe",
        desc: "Keripik tradisional dengan baluran sambal cabai asli yang dikeringkan sempurna, menghasilkan pedas yang elegan.",
        icon: "🌶️",
        tag: "Spiced Premium",
        num: "02",
        image: "/src/assets/kcabe post.png",
        prices: [
          { label: "1/4 Kg", price: "Rp 15.000" },
          { label: "1/2 Kg", price: "Rp 30.000" },
          { label: "1 Kg", price: "Rp 60.000" }
        ]
      },
      {
        name: "Tradisional Peyek Kacang",
        desc: "Rempeyek tipis buatan tangan dengan adonan tepung beras warisan, bertabur kacang tanah premium yang gurih.",
        icon: "🥜",
        tag: "Heritage Recipe",
        num: "03",
        image: "/src/assets/peyek post.png",
        prices: [
          { label: "1/4 Kg", price: "Rp 25.000" },
          { label: "1/2 Kg", price: "Rp 50.000" },
          { label: "1 Kg", price: "Rp 100.000" }
        ]
      },
      // {
      //   name: "Tradisional Peyek Teri",
      //   desc: "Kelembutan peyek renyah berpadu dengan ikan teri medan pilihan, menawarkan harmoni rasa asin gurih yang murni.",
      //   icon: "🐟",
      //   tag: "Savory Delicacy",
      //   num: "04",
      //   image: "/src/assets/kpisang post.png",
      //   prices: [
      //     { label: "1/4 Kg", price: "Rp 30.000" },
      //     { label: "1/2 Kg", price: "Rp 55.000" },
      //     { label: "1 Kg", price: "Rp 110.000" }
      //   ]
      // },
    ],
  },
];

// DATA FILOSOFI / PILAR UTAMA GRAND LAUNCHING
const LAUNCH_NOTES = [
  { title: "Komitmen Kesegaran", text: "Setiap menu hanya dimasak berdasarkan pesanan yang masuk demi menjaga tekstur renyah dan kehangatan rasa yang optimal.", label: "Freshly Made" },
  { title: "Bumbu Racikan Murni", text: "Kami mempertahankan metode ulek tradisional dan resep pusaka, menolak jalan pintas penyedap rasa buatan.", label: "Authentic Recipe" },
  { title: "Slot Terbatas Harian", text: "Selama masa awal peluncuran, kami membatasi jumlah produksi harian untuk memastikan konsistensi standar kualitas estetika hidangan.", label: "Strict Quality Control" },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimSection({ children, delay = 0, style = {}, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`anim-block ${inView ? "anim-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}s`, ...style }}>
      {children}
    </div>
  );
}

export default function App() {
  const [activeMenu, setActiveMenu] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const toIG = () => window.open("https://www.instagram.com/raswangi.kitchen", "_blank");
  const toWA = () => window.open("https://wa.me/6289519139248", "_blank");

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fbf9f4", color: "#1e1913", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }

        :root {
          --bg-cream: #fbf9f4;
          --bg-pure: #ffffff;
          --color-dark: #1e1913;
          --color-muted: #6e6557;
          --gold: #c5a880;
          --gold-dark: #a3875f;
          --gold-light: #e0cca3;
          --border: #e6e1d6;
          --serif: 'Cormorant Garamond', serif;
        }

        .anim-block {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.215, 0.610, 0.355, 1), transform 1s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        .anim-block.anim-in { opacity: 1; transform: translateY(0); }

        /* LUXURY NAVIGATION */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 40px 8%; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
          border-bottom: 1px solid transparent;
        }
        .nav.scrolled {
          background: rgba(251, 249, 244, 0.85); border-bottom: 1px solid var(--border);
          backdrop-filter: blur(20px); padding: 24px 8%; 
        }
        .nav-inner {
          max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; width: 100%;
        }
        .nav-logo { display: flex; flex-direction: column; line-height: 1; }
        .nav-logo-main { font-family: var(--serif); font-weight: 600; font-size: 32px; letter-spacing: 1px; color: var(--color-dark); }
        .nav-logo-sub { font-size: 12px; letter-spacing: 5px; color: var(--gold-dark); text-transform: uppercase; margin-top: 6px; font-weight: 500; }
        .nav-links { display: flex; gap: 48px; align-items: center; }
        .nav-link { font-size: 15px; font-weight: 500; color: var(--color-dark); text-decoration: none; letter-spacing: 2px; text-transform: uppercase; transition: color 0.3s; }
        .nav-link:hover { color: var(--gold-dark); }
        .nav-cta {
          font-size: 13px; font-weight: 500; background: var(--color-dark); color: var(--bg-cream);
          border: 1px solid var(--color-dark); padding: 16px 32px; cursor: pointer; letter-spacing: 2px; text-transform: uppercase; transition: all 0.4s ease;
          display: inline-flex; align-items: center; gap: 10px;
        }
        .nav-cta:hover { background: transparent; color: var(--color-dark); }

        /* MAGNIFICENT HERO SECTION */
        .hero {
          min-height: 100vh; position: relative; display: flex; align-items: center; padding: 160px 8% 100px; background: var(--bg-cream); border-bottom: 1px solid var(--border);
        }
        .hero-inner {
          max-width: 1400px; margin: 0 auto; width: 100%; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 80px; align-items: center; position: relative; z-index: 2;
        }
        .hero-tag { font-size: 12px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 24px; display: inline-block; }
        .hero-h1 { font-family: var(--serif); font-size: clamp(54px, 6.5vw, 84px); font-weight: 500; line-height: 1.1; color: var(--color-dark); margin-bottom: 36px; }
        .hero-h1 em { font-style: italic; font-weight: 400; color: var(--gold-dark); }
        .hero-desc { font-size: 16px; line-height: 1.8; color: var(--color-muted); max-width: 580px; margin-bottom: 48px; font-weight: 300; }
        .hero-actions { display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        
        .btn-luxury {
          font-size: 13px; font-weight: 500; background: var(--color-dark); color: var(--bg-cream);
          border: 1px solid var(--color-dark); padding: 18px 40px; cursor: pointer; letter-spacing: 2px; text-transform: uppercase; transition: all 0.4s ease; display: inline-flex; align-items: center; gap: 12px;
        }
        .btn-luxury:hover { background: transparent; color: var(--color-dark); transform: translateY(-2px); }
        
        .btn-luxury-outline {
          font-size: 13px; font-weight: 500; background: transparent; color: var(--color-dark);
          border: 1px solid var(--border); padding: 18px 40px; cursor: pointer; letter-spacing: 2px; text-transform: uppercase; transition: all 0.4s ease; display: inline-flex; align-items: center; gap: 12px;
        }
        .btn-luxury-outline:hover { border-color: var(--color-dark); background: rgba(30,25,19,0.02); }

        .hero-frame-visual { width: 100%; max-width: 440px; height: 540px; border: 1px solid var(--gold); padding: 16px; display: flex; margin-left: auto; }
        .hero-frame-inner { width: 100%; height: 100%; background: #eae3d5; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .hero-product-img { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1); }
        .hero-frame-visual:hover .hero-product-img { transform: scale(1.05); }

        /* MARQUEE EDITORIAL */
        .marquee-wrap { background: var(--color-dark); overflow: hidden; white-space: nowrap; padding: 20px 0; }
        .marquee-track { display: inline-flex; animation: marquee 25s linear infinite; }
        .marquee-item { font-family: var(--serif); font-size: 16px; font-weight: 400; color: var(--gold-light); letter-spacing: 2px; padding: 0 50px; text-transform: uppercase; }
        .marquee-dot { color: var(--gold-dark); margin: 0 10px; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

        /* SECTIONS COMMON */
        .section-eyebrow { font-size: 12px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 16px; display: block; }
        .section-h2 { font-family: var(--serif); font-size: clamp(38px, 5vw, 56px); font-weight: 500; line-height: 1.15; color: var(--color-dark); margin-bottom: 56px; }
        .section-h2 em { font-style: italic; font-weight: 400; color: var(--gold-dark); }
        .divider-line { width: 60px; height: 1px; background: var(--gold); margin: 24px 0 36px; }

        /* MENU SECTION STYLE */
        .menu-section { background: var(--bg-pure); padding: 120px 8%; border-bottom: 1px solid var(--border); }
        .menu-tabs { display: flex; gap: 40px; margin-bottom: 60px; border-bottom: 1px solid var(--border); }
        .menu-tab {
          font-family: var(--serif); font-size: 22px; font-weight: 500; background: none; border: none; color: var(--color-muted);
          padding: 12px 4px; cursor: pointer; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.3s;
        }
        .menu-tab.active { color: var(--color-dark); border-color: var(--gold-dark); }
        .menu-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 48px; }
        
        /* EDITORIAL PRODUCT CARD (WITH 3:4 RATIO IMAGE) */
        .editorial-card {
          background: var(--bg-pure); border: 1px solid var(--border); padding: 24px;
          display: flex; flex-direction: column; justify-content: space-between;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1); position: relative;
        }
        .editorial-card:hover { border-color: var(--gold); transform: translateY(-4px); box-shadow: 0 20px 40px rgba(197,168,128,0.06); }
        
        .card-media {
          width: 100%; aspect-ratio: 3 / 4; background: #eae3d5; overflow: hidden; margin-bottom: 28px; border: 1px solid rgba(197,168,128,0.2);
        }
        .card-img {
          width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .editorial-card:hover .card-img { transform: scale(1.04); }

        .card-meta-row { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 14px; }
        .card-num { font-family: var(--serif); font-size: 18px; font-style: italic; color: var(--gold-dark); }
        .card-tag { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-dark); }
        .card-name { font-family: var(--serif); font-size: 26px; font-weight: 500; color: var(--color-dark); margin-bottom: 12px; }
        .card-desc { font-size: 14px; line-height: 1.6; color: var(--color-muted); margin-bottom: 32px; font-weight: 300; min-height: 68px; }

        /* ABOUT SECTION */
        .about-section { min-height: 100vh; background: var(--bg-cream); display: grid; grid-template-columns: 1fr 1.1fr; border-bottom: 1px solid var(--border); }
        .about-visual { background: #eae3d5; display: flex; align-items: center; justify-content: center; padding: 60px; position: relative; }
        .about-big-emoji { font-size: 140px; filter: drop-shadow(0 10px 30px rgba(0,0,0,0.05)); }
        .about-content { padding: 120px 10%; display: flex; flex-direction: column; justify-content: center; }
        .about-body { font-size: 16px; line-height: 1.8; color: var(--color-muted); margin-bottom: 28px; font-weight: 300; }
        .about-features { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px; }
        .feature-item { border-bottom: 1px solid var(--border); padding-bottom: 20px; }
        .feature-icon { font-size: 24px; margin-bottom: 12px; }
        .feature-label { font-family: var(--serif); font-size: 20px; color: var(--color-dark); font-weight: 500; margin-bottom: 6px; }
        .feature-sub { font-size: 13px; color: var(--color-muted); font-weight: 300; }

        /* THE MILESTONE (REPLACED TESTIMONIALS) */
        .launch-section { background: var(--bg-pure); padding: 120px 8%; border-bottom: 1px solid var(--border); }
        .launch-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 72px; }
        .launch-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
        .launch-card { background: var(--bg-cream); border: 1px solid var(--border); padding: 48px 40px; display: flex; flex-direction: column; justify-content: space-between; transition: border-color 0.3s; }
        .launch-card:hover { border-color: var(--gold); }
        .launch-tag { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 20px; display: block; }
        .launch-title { font-family: var(--serif); font-size: 26px; font-weight: 500; color: var(--color-dark); margin-bottom: 16px; }
        .launch-text { font-size: 14px; line-height: 1.7; color: var(--color-muted); font-weight: 300; }

        /* LOCATION & CONTACT GRID */
        .loc-section { background: var(--bg-cream); padding: 120px 8%; border-bottom: 1px solid var(--border); }
        .loc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; margin-top: 64px; }
        .loc-card { background: var(--bg-pure); border: 1px solid var(--border); padding: 40px 32px; transition: all 0.3s; }
        .loc-card.clickable { cursor: pointer; }
        .loc-card:hover { border-color: var(--color-dark); }
        .loc-icon { font-size: 28px; margin-bottom: 20px; display: block; }
        .loc-label { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--gold-dark); margin-bottom: 12px; display: block; }
        .loc-value { font-family: var(--serif); font-size: 24px; font-weight: 500; color: var(--color-dark); line-height: 1.2; margin-bottom: 8px; }
        .loc-sub { font-size: 13px; color: var(--color-muted); line-height: 1.6; font-weight: 300; }

        /* CTA CODES */
        .cta-section { background: var(--bg-pure); padding: 140px 8%; text-align: center; }
        .cta-inner { max-width: 760px; margin: 0 auto; }
        .cta-h2 { font-family: var(--serif); font-size: clamp(44px, 6vw, 68px); font-weight: 500; line-height: 1.1; color: var(--color-dark); margin-bottom: 32px; }

        /* FOOTER */
        footer { background: var(--color-dark); color: var(--bg-cream); padding: 64px 8%; display: flex; align-items: center; justify-content: space-between; }
        .footer-logo { font-family: var(--serif); font-size: 26px; font-weight: 500; color: var(--gold); }
        .footer-sub { font-size: 11px; color: var(--color-muted); letter-spacing: 2px; text-transform: uppercase; margin-top: 6px; }
        .footer-copy { font-size: 12px; color: var(--color-muted); font-weight: 300; }
        .footer-links { display: flex; gap: 24px; }
        .footer-link-item { font-size: 13px; color: var(--gold); text-decoration: none; font-weight: 500; letter-spacing: 1px; transition: color 0.2s; }
        .footer-link-item:hover { color: var(--bg-cream); }

        @media (max-width: 1200px) {
          .launch-grid, .loc-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
        }
        @media (max-width: 1024px) {
          .hero-inner { grid-template-columns: 1fr; text-align: center; gap: 60px; }
          .hero-frame-visual { margin: 0 auto; }
          .about-section { grid-template-columns: 1fr; }
          .about-visual { min-height: 40vh; }
          .nav-links { display: none; }
          .hero { padding-top: 140px; }
        }
        @media (max-width: 768px) {
          .launch-grid, .loc-grid, .about-features, .menu-grid { grid-template-columns: 1fr; }
          .launch-header { flex-direction: column; align-items: flex-start; gap: 24px; }
          footer { flex-direction: column; gap: 32px; text-align: center; }
        }
      `}</style>

      {/* LUXURY NAVIGATION */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-inner">
          <div className="nav-logo">
            <span className="nav-logo-main">Raswangi</span>
            <span className="nav-logo-sub">Kitchen</span>
          </div>
          <div className="nav-links">
            <a href="#menu" className="nav-link">Koleksi Menu</a>
            <a href="#tentang" className="nav-link">Filosofi</a>
            <a href="#milestone" className="nav-link">Eksklusivitas</a>
            <a href="#lokasi" className="nav-link">Kontak</a>
            <button className="nav-cta" onClick={toWA}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Pesan via WhatsApp
            </button>
          </div>
        </div>
      </nav>

      {/* GRAND HERO SECTION */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <span className="hero-tag">Artisanal Catering & Confectionery</span>
            <h1 className="hero-h1">
              HOMEMADE CATERING,<br />
              <em>Made with love,</em> <br />
              <em>Served with care</em>
            </h1>
            <p className="hero-desc">
              Raswangi Kitchen Pekanbaru meredefinisi kuliner rumahan tradisional ke dalam presentasi estetika tinggi. Menghadirkan kemegahan Tumpeng hingga kelembutan peyek premium untuk melengkapi perhelatan penting Anda.
            </p>
            <div className="hero-actions">
              <button className="btn-luxury" onClick={toWA}>
                Order Melalui WhatsApp
              </button>
              <button className="btn-luxury-outline" onClick={toIG}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                Jurnal Instagram
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame-visual">
              <div className="hero-frame-inner">
                <img
                  src="/src/assets/launching post.png"
                  alt="Foto Produk Unggulan Raswangi Kitchen"
                  className="hero-product-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE EDITORIAL ROW */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="marquee-item">
              Nasi Tumpeng <span className="marquee-dot">✦</span> Nasi Uduk Spesial <span className="marquee-dot">✦</span> Keripik Pisang <span className="marquee-dot">✦</span> Keripik Cabe <span className="marquee-dot">✦</span> Keripik Pisang <span className="marquee-dot">✦</span> Catering Pekanbaru <span className="marquee-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* PORTFOLIO MENU SECTION */}
      <section id="menu" className="menu-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <AnimSection>
            <span className="section-eyebrow">The Masterpieces</span>
            <h2 className="section-h2">Koleksi Hidangan <em>Unggulan</em></h2>
          </AnimSection>

          <div className="menu-tabs">
            {MENU.map((cat, i) => (
              <button key={i} className={`menu-tab ${activeMenu === i ? "active" : ""}`} onClick={() => setActiveMenu(i)}>
                {cat.category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {MENU[activeMenu].items.map((item, i) => (
              <AnimSection key={item.name} delay={i * 0.08}>
                <div className="editorial-card">
                  <div>
                    <div className="card-media">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="card-img"
                      />
                    </div>
                    <div className="card-meta-row">
                      <span className="card-tag">{item.tag}</span>
                      <span className="card-num">// {item.num}</span>
                    </div>
                    <div className="card-name">{item.name}</div>
                    <p className="card-desc">{item.desc}</p>

                    {/* NEW PRICE CONTAINER SECTIONS */}
                    <div style={{
                      borderTop: "1px dashed var(--border)",
                      paddingTop: "16px",
                      marginBottom: "24px"
                    }}>
                      {item.prices.map((p, idx) => (
                        <div key={idx} style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginBottom: item.prices.length > 1 ? "8px" : "0"
                        }}>
                          <span style={{ fontSize: "13px", color: "var(--color-muted)", fontWeight: 300 }}>
                            {p.label}
                          </span>
                          <span style={{ fontFamily: "var(--serif)", fontSize: "18px", fontWeight: 600, color: "var(--color-dark)" }}>
                            {p.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button className="btn-luxury-outline" onClick={toWA} style={{ width: "100%", padding: "14px", fontSize: "11px", letterSpacing: "1px" }}>
                    Pesan Hidangan Ini via WA
                  </button>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY & ABOUT SECTION */}
      <section id="tentang" className="about-section">
        <div className="about-visual">
          <span className="about-big-emoji">👩‍🍳</span>
        </div>

        <div className="about-content">
          <AnimSection>
            <span className="section-eyebrow">Our Philosophy</span>
            <h2 className="section-h2">Dibuat Teliti secara <em>Handmade</em></h2>
            <p className="about-body">
              Setiap elemen rasa di Raswangi Kitchen melewati kurasi ketat. Kami menolak penggunaan bahan pengawet instan dan tetap mempertahankan metode pengolahan bumbu tradisional demi menjaga integritas cita rasa warisan yang murni dan otentik.
            </p>
            <p className="about-body">
              Seluruh layanan kami dirancang khusus secara personal untuk melayani kebutuhan acara syukuran, hajatan keluarga, bingkisan premium kantor, hingga camilan santai berkualitas tinggi di Pekanbaru.
            </p>

            <div className="about-features">
              {[
                ["🌾", "Integritas Bahan", "Hanya menggunakan komoditas segar pilihan lokal."],
                ["🤲", "Seni Buatan Tangan", "Semua dicetak lembar demi lembar dengan teliti."],
                ["⏱️", "Ketepatan Waktu", "Sistem logistik ketat demi kesegaran hidangan."],
                ["💚", "Resep Warisan", "Bumbu autentik murni tanpa penyedap berlebih."],
              ].map(([icon, label, sub]) => (
                <div key={label} className="feature-item">
                  <div className="feature-icon">{icon}</div>
                  <div className="feature-label">{label}</div>
                  <div className="feature-sub">{sub}</div>
                </div>
              ))}
            </div>
          </AnimSection>
        </div>
      </section>

      {/* NEWLY LAUNCHED / MILESTONE SECTION (REPLACED REPUTATION) */}
      <section id="milestone" className="launch-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <AnimSection>
            <div className="launch-header">
              <div>
                <span className="section-eyebrow">Our Milestone</span>
                <h2 className="section-h2" style={{ marginBottom: 0 }}>Menyambut Perjalanan <em>Baru</em></h2>
              </div>
              <span style={{ fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", fontWeight: 600, color: "var(--gold-dark)", border: "1px solid var(--gold)", padding: "10px 20px" }}>
                ✦ Grand Launching ✦
              </span>
            </div>
          </AnimSection>

          <div className="launch-grid">
            {LAUNCH_NOTES.map((note, i) => (
              <AnimSection key={i} delay={i * 0.1}>
                <div className="launch-card">
                  <div>
                    <span className="launch-tag">// {note.label}</span>
                    <div className="launch-title">{note.title}</div>
                    <p className="launch-text">{note.text}</p>
                  </div>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & CONCIERGE INFORMATION */}
      <section id="lokasi" className="loc-section">
        <div style={{ maxWidth: "1400px", margin: "0 auto", width: "100%" }}>
          <AnimSection>
            <span className="section-eyebrow">Concierge</span>
            <div className="section-h2" style={{ margin: 0 }}>Lokasi & <em>Sistem Layanan</em></div>
          </AnimSection>

          <div className="loc-grid">
            {[
              { icon: "📍", label: "Alamat Kurasi", value: "Pekanbaru, Riau", sub: "Melayani pengiriman eksklusif area Pekanbaru kota & sekitarnya." },
              { icon: "💬", label: "WhatsApp Order", value: "0895-1913-9248", sub: "Pintu utama pemesanan, konsultasi porsi, dan jadwal kirim.", action: toWA },
              { icon: "🕐", label: "Waktu Pelayanan", value: "08.00 – 20.00 WIB", sub: "Dapur buka setiap hari untuk melayani konfirmasi Anda." },
              { icon: "📦", label: "Ketentuan Dapur", value: "Sistem Pre-Order", sub: "Wajib melakukan reservasi pesanan minimal 1 hari sebelumnya (H-1)." },
            ].map((info, i) => (
              <AnimSection key={i} delay={i * 0.08}>
                <div className={`loc-card ${info.action ? "clickable" : ""}`} onClick={info.action}>
                  <span className="loc-icon">{info.icon}</span>
                  <span className="loc-label">{info.label}</span>
                  <div className="loc-value">{info.value}</div>
                  <p className="loc-sub">{info.sub}</p>
                </div>
              </AnimSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INQUIRIES SECTION */}
      <section className="cta-section">
        <AnimSection>
          <div className="cta-inner">
            <span className="section-eyebrow">Inquiries & Reservations</span>
            <h2 className="cta-h2">Sempurnakan Jamuan <em>Momen Penting</em> Anda</h2>
            <div style={{ width: "60px", height: "1px", background: "var(--gold)", margin: "0 auto 36px" }} />
            <p style={{ fontSize: "16px", color: "var(--color-muted)", lineHeight: 1.8, marginBottom: "48px", fontWeight: 300 }}>
              Setiap pesanan diolah secara personal dengan kuota terbatas setiap harinya demi kenyamanan cita rasa. Hubungi kami langsung melalui WhatsApp atau Instagram DM untuk mengamankan slot Anda hari ini.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center", gap: "16px" }}>
              <button className="btn-luxury" onClick={toWA} style={{ padding: "18px 36px" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Hubungi via WhatsApp
              </button>
              <button className="btn-luxury-outline" onClick={toIG} style={{ padding: "18px 36px" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", verticalAlign: "middle" }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
                Kirim DM Instagram
              </button>
            </div>
          </div>
        </AnimSection>
      </section>

      {/* FOOTER LUXURY */}
      <footer>
        <div>
          <div className="footer-logo">RASWANGI KITCHEN</div>
          <div className="footer-sub">Artisanal Culinary Service — Pekanbaru, Riau</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-end" }}>
          <div className="footer-links">
            <a href="https://wa.me/6289519139248" target="_blank" rel="noreferrer" className="footer-link-item">WhatsApp</a>
            <a href="https://www.instagram.com/raswangi.kitchen" target="_blank" rel="noreferrer" className="footer-link-item">Instagram</a>
          </div>
          <div className="footer-copy">© 2026 Raswangi Kitchen. All rights reserved. Crafted for Excellence.</div>
        </div>
      </footer>
    </div>
  );
}