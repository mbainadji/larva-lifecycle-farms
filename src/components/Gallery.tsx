import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      alt: "Environnement d'élevage",
      category: "Élevage",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop",
      alt: "Formation pratique",
      category: "Formation",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      alt: "Biodiversité",
      category: "Nature",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      alt: "Habitat naturel",
      category: "Élevage",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      alt: "Environnement sain",
      category: "Nature",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      alt: "Paysage agricole",
      category: "Formation",
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer animate-fade-in-up shadow-soft hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-accent/90 text-accent-foreground text-xs rounded-full mb-2">
                    {image.category}
                  </span>
                  <p className="font-body text-cream text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-cream hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] rounded-lg shadow-elevated animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
