import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    const phone = "237659502242";
    const message = encodeURIComponent(
      "Bonjour FOSS Production! Je souhaite avoir plus d'informations."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <footer className="bg-forest text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              FOSS <span className="text-gold">Production</span>
            </h3>
            <p className="font-body text-cream/80 text-sm leading-relaxed mb-4">
              Expert en formation sur l'élevage des hannetons et vente
              d'intrants de qualité pour votre réussite.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              Liens Rapides
            </h4>
            <ul className="space-y-2">
              {["Accueil", "À Propos", "Services", "Galerie", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace("à ", "a").replace(" ", "")}`}
                      className="font-body text-cream/80 hover:text-gold transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
            <p className="font-body text-cream/80 text-sm mb-2">
              📞 +237 659 502 242
            </p>
            <p className="font-body text-cream/80 text-sm mb-4">
              📍 FOSS Production, Cameroun
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg font-body text-sm hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-8 text-center">
          <p className="font-body text-cream/60 text-sm">
            © {currentYear} FOSS Production. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
