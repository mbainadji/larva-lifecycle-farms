import { useState } from "react";
import { Button } from "@/components/ui/CustomButton";
import { MessageCircle, Phone, MapPin, Mail, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const phoneNumber = "237659502242";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = () => {
    if (!formData.name.trim() || !formData.message.trim()) {
      toast.error("Veuillez remplir au moins votre nom et message.");
      return;
    }

    const message = encodeURIComponent(
      `Bonjour FOSS Production!\n\n` +
        `Nom: ${formData.name}\n` +
        `Email: ${formData.email || "Non fourni"}\n` +
        `Sujet: ${formData.subject || "Demande générale"}\n\n` +
        `Message:\n${formData.message}`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
    toast.success("Redirection vers WhatsApp...");
  };

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
            WhatsApp ou remplissez le formulaire ci-dessous.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
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

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Envoyez un Message
            </h3>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                handleWhatsAppSubmit();
              }}
            >
              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Nom Complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Sujet
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="Formation">Formation</option>
                  <option value="Achat d'intrants">Achat d'intrants</option>
                  <option value="Conseil">Conseil</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block font-body text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="lg"
                className="w-full"
              >
                <Send className="w-5 h-5" />
                Envoyer via WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
