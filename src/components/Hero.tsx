import { Button } from "@/components/ui/CustomButton";
import { MessageCircle, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-beetles.jpg";

const Hero = () => {
  const handleWhatsApp = () => {
    const phone = "237659502242";
    const message = encodeURIComponent(
      "Bonjour FOSS Production! Je souhaite avoir plus d'informations sur vos services."
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#apropos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Élevage d'hannetons - FOSS Production"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl animate-fade-in-up px-2 sm:px-0">
          <span className="inline-block px-3 sm:px-4 py-2 bg-accent/20 text-cream rounded-full text-xs sm:text-sm font-body mb-4 sm:mb-6">
            Expert en élevage d'insectes
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 sm:mb-6 leading-tight">
            Formation & Intrants pour l'Élevage d'
            <span className="text-gold">Hannetons</span>
          </h1>
          <p className="font-body text-base sm:text-lg md:text-xl text-cream/90 mb-6 sm:mb-8 leading-relaxed">
            Découvrez notre expertise dans l'élevage d'hannetons. Formation
            professionnelle et vente d'intrants de qualité pour réussir votre
            projet d'élevage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="whatsapp"
              size="lg"
              onClick={handleWhatsApp}
              className="group"
            >
              <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
              Contactez-nous sur WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-cream text-cream hover:bg-cream hover:text-forest"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition-colors"
        >
          <span className="text-sm font-body">Découvrir</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
