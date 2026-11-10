import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Home from "./Home";

const navItems = [
  { label: "A essência", href: "#essencia" },
  { label: "Serviços", href: "#servicos" },
  { label: "O espaço", href: "#espaco" },
];
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  // make sure to consider if you need authentication for certain routes
  return (
    <div className="min-h-screen bg-ivory text-espresso">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Amélia Vaidosa — início">
            <span className="brand-mark">AV</span>
            <span className="brand-name">
              <strong>Amélia</strong>
              <em>Vaidosa</em>
            </span>
          </a>

          <nav className={`desktop-nav ${menuOpen ? "desktop-nav--open" : ""}`} aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="https://wa.me/5551984579737?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20na%20Amélia%20Vaidosa." target="_blank" rel="noreferrer">
            Agendar horário <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>

          <button className="mobile-menu-button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mobile-nav-panel">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                {item.label}
                <ArrowUpRight size={15} />
              </a>
            ))}
          </div>
        )}
      </header>
      <Home />
    </div>
  );
}
