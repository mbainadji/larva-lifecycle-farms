import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const Gallery = () => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: gallery1,
      alt: "Larves de hannetons dans leur habitat naturel",
    },
    {
      id: 2,
      src: gallery2,
      alt: "Production de larves de hannetons",
    },
    {
      id: 3,
      src: gallery3,
      alt: "Larves prêtes pour la vente",
    },
    {
      id: 4,
      src: gallery4,
      alt: "Gros plan sur nos larves de qualité",
    },
  ];

  return (
    <section id="galerie" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-body mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Notre <span className="text-primary">Galerie</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Découvrez en images notre activité et nos installations d'élevage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-soft animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
