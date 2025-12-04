import { Button } from "@/components/ui/CustomButton";
import { MessageCircle, Phone, MapPin, Mail } from "lucide-react";

const Contact = () => {
  const phoneNumber = "237659502242";

  const handleDirectWhatsApp = () => {
    const message = encodeURIComponent(
      "Bonjour FOSS Production! Je souhaite avoir plus d'informations."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-body mb-4">
            Contact
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Contactez-<span className="text-primary">Nous</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Une question? Besoin d'informations? Contactez-nous directement via
            WhatsApp.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Informations de Contact
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">
                    Téléphone
                  </p>
                  <a
                    href={`tel:+${phoneNumber}`}
                    className="font-body text-muted-foreground hover:text-primary transition-colors"
                  >
                    +237 659 502 242
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">
                    Adresse
                  </p>
                  <p className="font-body text-muted-foreground">
                    FOSS Production, Cameroun
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body font-medium text-foreground">
                    WhatsApp
                  </p>
                  <p className="font-body text-muted-foreground">
                    Disponible 7j/7
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button
                variant="whatsapp"
                size="lg"
                onClick={handleDirectWhatsApp}
                className="w-full"
              >
                <MessageCircle className="w-5 h-5" />
                Contacter via WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
