import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import { useScrollReveal, useStaggerReveal } from "@/hooks/useScrollReveal";

const images = [
  { src: g1, alt: "Crispy fried chicken bucket" },
  { src: g2, alt: "Golden french fries" },
  { src: g3, alt: "Chicken combo meal" },
  { src: g5, alt: "Spicy chicken wings" },
  { src: g6, alt: "Happy customers dining" },
  { src: g4, alt: "Refreshing drinks" },
];

const Gallery = () => {
  const headingRef = useScrollReveal();
  const imgRefs = useStaggerReveal(images.length, 80, 100);

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12" ref={headingRef}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-balance">See What's Cooking</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              ref={imgRefs[i]}
              className="aspect-square overflow-hidden rounded-xl group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
