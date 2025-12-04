import { Button } from "@/components/ui/CustomButton";
import { MessageCircle, GraduationCap, Package, BookOpen, Truck } from "lucide-react";

const Services = () => {
  const handleWhatsApp = (service: string) => {
    const phone = "237659502242";
    const message = encodeURIComponent(
      `Bonjour FOSS Production! Je suis intéressé(e) par: ${service}. Pouvez-vous me donner plus d'informations?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const services = [
    {
      icon: GraduationCap,
      title: "Formation Complète",
      description:
        "Formation théorique et pratique sur l'élevage des hannetons. Apprenez les techniques professionnelles de A à Z.",
      features: ["Cours théoriques", "Pratique sur le terrain", "Certification"],
    },
    {
      icon: Package,
      title: "Vente d'Intrants",
      description:
        "Tous les intrants nécessaires pour démarrer et maintenir votre élevage d'hannetons avec succès.",
      features: ["Substrats de qualité", "Équipements", "Suppléments nutritifs"],
    },
    {
      icon: BookOpen,
      title: "Conseil & Suivi",
      description:
        "Accompagnement personnalisé tout au long de votre projet d'élevage pour garantir votre réussite.",
      features: ["Diagnostic initial", "Plan d'action", "Support continu"],
    },
    {
      icon: Truck,
      title: "Livraison",
      description:
        "Service de livraison rapide et sécurisé de tous nos produits et intrants à votre porte.",
      features: ["Livraison rapide", "Emballage sécurisé", "Suivi de commande"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-body mb-4">
            Nos Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Services & <span className="text-primary">Produits</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Découvrez notre gamme complète de services et produits pour réussir
            votre élevage d'hannetons.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm font-body text-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="whatsapp"
                  size="sm"
                  onClick={() => handleWhatsApp(service.title)}
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Commander via WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
