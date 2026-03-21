import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Reviews = () => {
  const ref = useScrollReveal();

  return (
    <section id="reviews" className="py-20 md:py-28 bg-card">
      <div className="container" ref={ref}>
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-balance">What People Say</h2>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="bg-background rounded-2xl p-8 shadow-md shadow-foreground/5 text-center">
            <div className="flex items-center justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-6 h-6 text-secondary fill-secondary" />
              ))}
            </div>
            <p className="text-2xl font-extrabold text-primary mb-4">5.0</p>
            <blockquote className="text-foreground/80 text-lg leading-relaxed italic">
              "Nice place to visit if you are near Pwani University"
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">— Google Review</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
