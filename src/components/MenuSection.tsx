import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const items = [
  { name: "1 Piece Chicken", price: 150, image: gallery1, desc: "Crispy golden fried chicken" },
  { name: "2 Piece Combo", price: 350, image: gallery3, desc: "Chicken + Chips" },
  { name: "Chips", price: 150, image: gallery2, desc: "Golden crispy fries" },
  { name: "Soda", price: 100, image: gallery4, desc: "Ice cold refreshment" },
];

const MenuSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="menu" className="py-20 md:py-28 bg-card">
      <div className="container" ref={ref}>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Our Menu</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-balance">Taste the Crunch</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="group bg-background rounded-xl overflow-hidden shadow-md shadow-foreground/5 hover:shadow-xl hover:shadow-foreground/10 transition-shadow"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                <p className="text-xl font-extrabold text-primary mt-3">
                  KES {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
