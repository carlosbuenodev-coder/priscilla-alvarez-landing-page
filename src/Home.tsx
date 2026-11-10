import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  CircleDot,
  Droplets,
  Eye,
  Instagram,
  MapPin,
  ScanFace,
  Scissors,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";

const whatsappUrl = "https://wa.me/5551984579737?text=Olá%2C%20gostaria%20de%20agendar%20um%20horário%20na%20Amélia%20Vaidosa.";
const instagramUrl = "https://www.instagram.com/amelia.vaidosa/";

const services = [
  { number: "01", title: "Manicure & pedicure", text: "Cuidado preciso, acabamento impecável e um momento só seu.", icon: Sparkles },
  { number: "02", title: "Alongamento de unhas", text: "Estrutura, delicadeza e personalidade para as suas mãos.", icon: Star },
  { number: "03", title: "Esmaltação em gel", text: "Brilho intenso e durabilidade para acompanhar sua rotina.", icon: Waves },
  { number: "04", title: "Corte feminino", text: "Um corte pensado para valorizar sua beleza e seu movimento.", icon: Scissors },
  { number: "05", title: "Cílios", text: "Olhar marcante e delicado, realçando sua beleza natural.", icon: Eye },
  { number: "06", title: "Sobrancelhas", text: "Harmonia e definição para valorizar a expressão do seu rosto.", icon: Star },
  { number: "07", title: "Limpeza de pele", text: "Renovação, frescor e cuidado profundo para a sua pele.", icon: Droplets },
  { number: "08", title: "Lash Lifting", text: "Curvatura e destaque para os cílios com efeito natural.", icon: Eye },
  { number: "09", title: "Brow Lamination", text: "Sobrancelhas alinhadas, preenchidas e com acabamento sofisticado.", icon: Sparkles },
  { number: "10", title: "Dermaplaning facial", text: "Pele mais lisa, luminosa e preparada para receber seus cuidados.", icon: ScanFace },
  { number: "11", title: "Design de sobrancelhas", text: "Formato personalizado para equilibrar e emoldurar o seu olhar.", icon: CircleDot },
  { number: "12", title: "Estética avançada", text: "Protocolos especializados para cuidar da sua beleza por inteiro.", icon: Sparkles },
];

const fallbackGallery = [
  { src: "/assets/images/priscilla-alvarez.jpg", alt: "Priscilla Álvarez, proprietária da Amélia Vaidosa", label: "Priscilla Álvarez" },
  { src: "/assets/images/nail-art.jpg", alt: "Unhas pretas com detalhes em glitter", label: "Nail art" },
  { src: "/assets/images/pedicure.jpg", alt: "Pedicure com esmaltação delicada", label: "Pedicure" },
  { src: "/assets/images/cilios-volume-5d.jpg", alt: "Cílios com volume 5D marrom", label: "Cílios" },
];

export default function Home() {
  const gallery = fallbackGallery;

  return (
    <main>
      <section id="inicio" className="hero-section">
        <div className="hero-grain" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy reveal-up">
            <p className="eyebrow"><span className="eyebrow-line" /> Beleza com intenção</p>
            <h1>Suas mãos<br /><i>contam</i> histórias.</h1>
            <p className="hero-description">Um espaço para você desacelerar, se cuidar e sair ainda mais vaidosa. Especialidade, acolhimento e beleza em cada detalhe.</p>
            <div className="hero-actions">
              <a className="button button--dark" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar meu horário <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#servicos">Conhecer serviços <ArrowDown size={15} /></a>
            </div>
            <div className="hero-signature">
              <div className="signature-line" />
              <div>
                <span>por</span>
                <strong>Priscilla Álvarez</strong>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal-up reveal-delay-1">
            <div className="hero-image-frame">
              <img src="/assets/images/priscilla-alvarez.jpg" alt="Priscilla Álvarez, proprietária da Amélia Vaidosa" />
            </div>
            <div className="hero-stamp" aria-hidden="true"><span>cuidado</span><strong>com<br />alma</strong></div>
            <div className="hero-caption"><span>01</span><span>Amélia Vaidosa<br />Gravataí · RS</span></div>
          </div>
        </div>
        <div className="hero-bottom-note container"><span>role para descobrir</span><span className="scroll-line" /></div>
      </section>

      <section className="trust-strip" aria-label="Diferenciais">
        <div className="container trust-grid">
          <div><span className="trust-number">01</span><p>Especialista em unhas</p></div>
          <div><span className="trust-number">02</span><p>Atendimento personalizado</p></div>
          <div><span className="trust-number">03</span><p>Centro de Gravataí</p></div>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="trust-instagram"><Instagram size={17} /> @amelia.vaidosa</a>
        </div>
      </section>

      <section id="essencia" className="essence-section section-padding">
        <div className="container essence-grid">
          <div className="essence-aside reveal-up">
            <span className="section-index">02 / a essência</span>
            <div className="vertical-rule" />
            <p>Beleza não é excesso.<br /><em>É presença.</em></p>
          </div>
          <div className="essence-content reveal-up reveal-delay-1">
            <p className="eyebrow">Sobre a profissional</p>
            <h2>Um olhar apurado<br />para <i>revelar</i> você.</h2>
            <div className="essence-text-grid">
              <p>À frente da Amélia Vaidosa, <strong>Priscilla Álvarez</strong> transformou sua paixão por unhas em uma experiência completa de cuidado e autoestima.</p>
              <p>Renomada por seu trabalho minucioso e por entender que cada detalhe importa, Priscilla recebe cada cliente com escuta, técnica e um toque de beleza que é só seu.</p>
            </div>
            <a className="text-link text-link--dark" href={whatsappUrl} target="_blank" rel="noreferrer">Falar com a Priscilla <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="servicos" className="services-section section-padding">
        <div className="container">
          <div className="section-heading reveal-up">
            <div><span className="section-index">03 / serviços</span><h2>Seu ritual<br /><i>de beleza.</i></h2></div>
            <p>Da primeira camada ao último detalhe, tudo é pensado para você se sentir bem na sua própria pele.</p>
          </div>
          <div className="services-list">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <a className="service-row reveal-up" href={whatsappUrl} target="_blank" rel="noreferrer" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon"><Icon size={23} strokeWidth={1.5} /></span>
                  <span className="service-title">{service.title}</span>
                  <span className="service-text">{service.text}</span>
                  <span className="service-arrow"><ArrowUpRight size={20} /></span>
                </a>
              );
            })}
          </div>
          <div className="services-footer"><span>Também oferecemos cursos e produtos para manicure.</span><a href={whatsappUrl} target="_blank" rel="noreferrer">Quero saber mais <ArrowUpRight size={15} /></a></div>
        </div>
      </section>

      <section id="espaco" className="gallery-section section-padding">
        <div className="container">
          <div className="gallery-heading reveal-up"><span className="section-index">04 / o espaço</span><h2>Detalhes que<br /><i>ficam.</i></h2><p>Um ambiente acolhedor no centro de Gravataí para transformar seu autocuidado em um momento especial.</p></div>
          <div className="gallery-grid">
            {gallery.map((item, index) => <figure className={`gallery-card gallery-card--${index + 1} reveal-up`} key={item.label}><img src={item.src} alt={item.alt} loading="lazy" /><figcaption><span>0{index + 1}</span>{item.label}</figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-glow" aria-hidden="true" />
        <div className="container booking-grid">
          <div className="booking-copy"><span className="section-index section-index--light">05 / seu próximo momento</span><h2>Vamos cuidar<br /><i>de você?</i></h2><p>Escolha seu serviço, respire fundo e deixe o resto com a gente.</p></div>
          <div className="booking-card"><div className="booking-card-top"><CalendarDays size={24} /><span>Agendamentos</span></div><h3>Seu horário começa<br />com uma mensagem.</h3><a className="button button--light" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar pelo WhatsApp <ArrowUpRight size={17} /></a><div className="booking-contact"><MapPin size={15} /><span>Rua Dr. Luiz Bastos do Prado, 1505<br />sala 301 · Centro · Gravataí/RS</span></div></div>
        </div>
      </section>

      <section className="location-section section-padding"><div className="container location-grid"><div><span className="section-index">06 / encontre a gente</span><h2>Seu cuidado<br /><i>tem endereço.</i></h2></div><div className="location-details"><div className="location-detail"><MapPin size={20} /><div><span>Onde estamos</span><strong>Rua Dr. Luiz Bastos do Prado, 1505<br />sala 301 · Centro · Gravataí/RS</strong></div></div><div className="location-detail"><Instagram size={20} /><div><span>Fale com a gente</span><strong>@amelia.vaidosa<br />(51) 98457-9737</strong></div></div><a className="text-link text-link--dark" href="https://www.google.com/maps/search/?api=1&query=Rua+Dr.+Luiz+Bastos+do+Prado%2C+1505%2C+Gravata%C3%AD%2C+RS" target="_blank" rel="noreferrer">Abrir no mapa <ArrowUpRight size={15} /></a></div></div></section>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand brand--footer" href="#inicio"><span className="brand-mark">AV</span><span className="brand-name"><strong>Amélia</strong><em>Vaidosa</em></span></a><p>Beleza com intenção, cuidado com alma.</p><div className="footer-links"><a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={17} /> Instagram</a><a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowUpRight size={15} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Amélia Vaidosa</span><span>Feito com carinho em Gravataí</span></div></footer>
    </main>
  );
}
