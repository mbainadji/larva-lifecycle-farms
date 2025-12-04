import { Leaf, Target, Users } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Leaf,
      title: "Élevage Durable",
      description:
        "Nous promouvons des pratiques d'élevage respectueuses de l'environnement et durables.",
    },
    {
      icon: Target,
      title: "Expertise Reconnue",
      description:
        "Des années d'expérience dans l'élevage et la formation professionnelle.",
    },
    {
      icon: Users,
      title: "Accompagnement",
      description:
        "Un suivi personnalisé pour garantir le succès de votre projet d'élevage.",
    },
  ];

  return (
    <section id="apropos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-body mb-4">
            À Propos de Nous
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Votre Partenaire en <span className="text-primary">Élevage d'Hannetons</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            FOSS Production est spécialisé dans la formation professionnelle sur
            l'élevage des hannetons et la vente d'intrants de qualité. Notre
            mission est de vous accompagner dans chaque étape de votre projet
            d'élevage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
