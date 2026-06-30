import { useState, useEffect } from 'react';
import { ChevronDown, MapPin, Clock, UserPlus, Armchair, Instagram, MessageCircle } from 'lucide-react';

const WHATSAPP_LISTA = 'https://wa.me/393245673988?text=Ciao%2C%20vorrei%20entrare%20in%20lista%20per%20ALGORITMO%20-%20BLACKSUN%20del%2003%2F07.%0A%0ANome%20e%20cognome%3A%0ANumero%20di%20persone%3A';
const WHATSAPP_TAVOLI = 'https://wa.me/393245673988?text=Ciao%2C%20vorrei%20ricevere%20informazioni%20e%20prenotare%20un%20tavolo%20per%20ALGORITMO%20-%20BLACKSUN%20del%2003%2F07.%0A%0ANome%20e%20cognome%3A%0ANumero%20di%20persone%3A';
const GOOGLE_MAPS = 'https://www.google.com/maps/search/?api=1&query=Opera129%20Via%20Casilina%2081';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-dark/95 backdrop-blur-sm border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <a href="#" className="flex items-center gap-3">
          <img
            src="/algorio_bianoc-Photoroom.png"
            alt="ALGORITMO"
            className="h-10 w-auto logo-glow"
          />
          <span className="font-display text-2xl tracking-wider text-white">
            ALGORITMO
          </span>
        </a>
        <a
          href={WHATSAPP_LISTA}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 text-sm font-display uppercase tracking-wider border border-magenta/60 text-magenta hover:bg-magenta hover:text-white transition-all duration-300"
        >
          Liste Aperte
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose/30 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal/30 rounded-full blur-[100px]" />
        <div className="absolute inset-0 overlay-gradient" />
        <div className="absolute inset-0 noise-overlay" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 text-center pt-20 pb-32 md:pb-40">
        <img
          src="/algorio_bianoc-Photoroom.png"
          alt="ALGORITMO"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-6 opacity-0 animate-fade-up logo-glow"
          style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}
        />
        <h1
          className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider text-white opacity-0 animate-fade-up"
          style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}
        >
          ALGORITMO
        </h1>

        <p
          className="text-sm md:text-lg tracking-[0.4em] text-gray-400 uppercase opacity-0 animate-fade-up mt-2"
          style={{ animationDelay: '150ms', animationFillMode: 'forwards' }}
        >
          terrazza euphoria
        </p>

        <h2
          className="font-display text-7xl md:text-9xl lg:text-[12rem] tracking-wider text-gradient-rose mt-2 opacity-0 animate-fade-up rose-glow"
          style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}
        >
          BLACKSUN
        </h2>

        <div
          className="mt-8 space-y-2 opacity-0 animate-fade-up"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
        >
          <p className="text-2xl md:text-3xl font-display tracking-widest text-sand">
            03.07.2026
          </p>
          <p className="text-lg md:text-xl tracking-wide text-gray-400">
            OPERA129 — VIA CASILINA 81
          </p>
        </div>

        <div
          className="mt-10 space-y-1 opacity-0 animate-fade-up"
          style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
        >
          <p className="text-xl md:text-2xl font-display tracking-wider text-white/90">
            KYMANI J · TERRY IARUSCI
          </p>
          <p className="text-sm tracking-widest text-rose uppercase">
            garden room start
          </p>
          <p className="text-sm text-gray-400 mt-2">
            19:00 → LATE
          </p>
        </div>

        <div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
        >
          <a
            href={WHATSAPP_LISTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-w-[200px]"
          >
            <UserPlus className="mr-2 w-5 h-5" />
            ENTRA IN LISTA
          </a>
          <a
            href={WHATSAPP_TAVOLI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-w-[200px]"
          >
            <Armchair className="mr-2 w-5 h-5" />
            PRENOTA UN TAVOLO
          </a>
        </div>

        <p
          className="mt-6 text-sm text-gray-500 opacity-0 animate-fade-up"
          style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
        >
          Capienza limitata. Accesso esclusivamente in lista.
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scroll-hint">
        <ChevronDown className="w-8 h-8 text-white/40" />
      </div>
    </section>
  );
}

function Manifesto() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-dark to-dark" />
      <div className="absolute inset-0 texture-overlay" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight tracking-wide text-white">
          CI AVETE DATO TANTA ENERGIA.
          <br />
          <span className="text-gradient-rose">NOI VE NE DAREMO ALTRETTANTA.</span>
        </h2>

        <div className="mt-12 h-px bg-gradient-to-r from-transparent via-rose via-teal to-transparent" />

        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
          Tre artisti che hanno già incendiato i dancefloor italiani ed europei.
          <br />
          Il 03 luglio arrivano a OPERA129 per una nuova notte firmata ALGORITMO.
        </p>
      </div>
    </section>
  );
}

function Lineup() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-dark via-charcoal to-dark">
      <div className="absolute inset-0 noise-overlay" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-rose/15 rounded-full blur-[90px]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal/15 rounded-full blur-[90px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="font-display text-7xl md:text-9xl lg:text-[10rem] tracking-tight text-center text-gradient-rose mb-4">
          WAKE UP
        </h1>
        <p className="text-center font-display text-2xl md:text-3xl tracking-wider text-white mb-12">
          start 22:00
        </p>
        <h2 className="text-center text-sm tracking-[0.4em] text-white uppercase mb-12">
          THE LINE-UP
        </h2>

        <div className="space-y-8">
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose/20 via-magenta/10 to-teal/20 blur-3xl opacity-60" />
            <h3 className="relative font-display text-7xl md:text-9xl lg:text-[10rem] tracking-tight text-center text-white hover:text-gradient-rose transition-all duration-500">
              BLACKSUN
            </h3>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-rose/40 via-teal/40 to-transparent" />

          <h4 className="font-display text-5xl md:text-7xl tracking-wider text-center text-white/80 hover:text-magenta transition-colors duration-300">
            KYMANI J
          </h4>

          <div className="h-px bg-gradient-to-r from-transparent via-rose/40 via-teal/40 to-transparent" />

          <h4 className="font-display text-5xl md:text-7xl tracking-wider text-center text-white/80 hover:text-magenta transition-colors duration-300">
            TERRY IARUSCI
          </h4>
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-lg md:text-xl tracking-widest text-rose uppercase">
            garden room start
          </p>
          <p className="mt-2 text-gray-400">FROM 19:00</p>
        </div>
      </div>
    </section>
  );
}

function Access() {
  return (
    <section className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-sm tracking-[0.4em] text-rose uppercase mb-16">
          ACCESS
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose/10 to-transparent rounded-sm" />
            <div className="relative p-8 md:p-12 border border-rose/20 rounded-sm hover:border-rose/40 transition-all duration-500">
              <h3 className="font-display text-5xl md:text-6xl tracking-wider text-white mb-6">
                LISTA
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-2xl md:text-3xl font-display text-gradient-rose">
                  FREE ENTRY + DRINK €15
                </p>
                <ul className="space-y-2 text-gray-400">
                  <li>Ingresso consentito esclusivamente in lista.</li>
                  <li>Selezione all'ingresso.</li>
                  <li>18+.</li>
                </ul>
              </div>

              <a
                href={WHATSAPP_LISTA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full"
              >
                <UserPlus className="mr-2 w-5 h-5" />
                ENTRA IN LISTA
              </a>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-teal/10 to-transparent rounded-sm" />
            <div className="relative p-8 md:p-12 border border-teal/20 rounded-sm hover:border-teal/40 transition-all duration-500">
              <h3 className="font-display text-5xl md:text-6xl tracking-wider text-white mb-6">
                TAVOLI
              </h3>

              <div className="space-y-4 mb-8">
                <p className="text-2xl md:text-3xl font-display text-gradient-rose">
                €40 A PERSONA, CONSUMABILI
              </p>
                <ul className="space-y-2 text-gray-400">
                  <li>Minimo 10 persone.</li>
                  <li>Contattaci per disponibilità e dettagli.</li>
                </ul>
              </div>

              <a
                href={WHATSAPP_TAVOLI}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full"
              >
                <Armchair className="mr-2 w-5 h-5" />
                PRENOTA UN TAVOLO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Location() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-dark to-dark" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-rose/15 rounded-full blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-teal/15 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-6xl md:text-8xl tracking-wider text-white mb-8">
          TERRAZZA EUPHORIA
        </h2>

        <div className="flex items-center justify-center gap-2 text-white text-xl mb-6">
          <MapPin className="w-5 h-5" />
          <p className="font-display tracking-wider">OPERA129 · Via Casilina 81</p>
        </div>

        <p className="text-gray-300 mb-4">
          Ampio parcheggio disponibile.
        </p>
        <p className="text-rose font-display tracking-wide">
          Arriva presto: la capienza è limitata.
        </p>

        <a
          href={GOOGLE_MAPS}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary mt-8 inline-flex"
        >
          <MapPin className="mr-2 w-5 h-5" />
          APRI MAPPA
        </a>
      </div>
    </section>
  );
}

function Info() {
  const infos = [
    { icon: 'SELECT', text: 'Selezione all\'ingresso' },
    { icon: '18+', text: '18+' },
    { icon: 'SOUND', text: 'Sound System' },
    { icon: 'VISUAL', text: 'Visual' },
    { icon: 'DANCE', text: '2 Dance Floor' },
    { icon: 'VIOLENCE', text: 'No Violence' },
    { icon: 'EARLY', text: 'Arriva Presto' },
    { icon: 'LIMITED', text: 'Capienza Limitata' },
    { icon: 'LIST', text: 'Accesso Solo in Lista' },
  ];

  return (
    <section className="section-padding bg-charcoal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-sm tracking-[0.4em] text-rose uppercase mb-12">
          GOOD TO KNOW
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {infos.map((info, index) => (
            <div
              key={index}
              className="p-6 border border-rose/10 text-center hover:border-rose/30 hover:bg-rose/5 transition-all duration-300"
            >
              <p className="font-display text-lg text-white">{info.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose/30 via-dark to-teal/10" />
      <div className="absolute inset-0 texture-overlay" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <img
          src="/algorio_bianoc-Photoroom.png"
          alt="ALGORITMO"
          className="w-20 h-20 mx-auto mb-6 logo-glow"
        />
        <h2 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider text-white mb-8">
          NON RESTARE FUORI.
        </h2>

        <div className="space-y-4 mb-12">
          <p className="text-xl md:text-2xl font-display tracking-wider text-white/80">
            BLACKSUN · KYMANI J · TERRY IARUSCI
          </p>
          <p className="text-lg text-sand">VENERDÌ 03 LUGLIO</p>
          <p className="text-gray-400">OPERA129 — VIA CASILINA 81</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_LISTA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary min-w-[200px]"
          >
            <UserPlus className="mr-2 w-5 h-5" />
            ENTRA IN LISTA
          </a>
          <a
            href={WHATSAPP_TAVOLI}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary min-w-[200px]"
          >
            <Armchair className="mr-2 w-5 h-5" />
            PRENOTA UN TAVOLO
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 bg-dark border-t border-rose/10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-8 md:gap-12 mb-8">
          <img
            src="/logo opera.png"
            alt="OPERA Centoventinove"
            className="h-20 md:h-28 w-auto"
          />
          <img
            src="/algorio_bianoc-Photoroom.png"
            alt="ALGORITMO"
            className="h-20 md:h-28 w-auto logo-glow"
          />
          <img
            src="/LOGO EUPHORIA.jpeg"
            alt="EUPHORIA 129"
            className="h-20 md:h-28 w-auto"
          />
        </div>

        <div className="flex items-center justify-center gap-8">
          <a
            href="https://instagram.com/algoritmo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span>@algoritmo</span>
          </a>
          <a
            href={WHATSAPP_LISTA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>+39 324 567 3988</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-dark/95 backdrop-blur-sm border-t border-white/10">
      <div className="flex">
        <a
          href={WHATSAPP_LISTA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sticky bg-magenta text-white"
        >
          LISTA
        </a>
        <a
          href={WHATSAPP_TAVOLI}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-sticky bg-white/10 text-white border-l border-white/10"
        >
          TAVOLI
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Lineup />
        <Access />
        <Location />
        <Info />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;
