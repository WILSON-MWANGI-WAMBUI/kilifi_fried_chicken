import { Phone, MapPin, Star, Clock } from "lucide-react";
import heroImg from "@/assets/hero-chicken.jpg";

const Hero = () => (
  <section id="home" className="relative pt-16 overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Crispy fried chicken" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/70" />
    </div>

    <div className="relative container flex flex-col items-center justify-center text-center py-24 md:py-36 lg:py-44 gap-6">
      <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-sm text-secondary px-4 py-1.5 rounded-full text-sm font-medium animate-fade-up">
        <Star className="w-4 h-4 fill-current" />
        5.0 Rated · Kilifi's Favorite
      </div>

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] max-w-3xl text-balance animate-fade-up-delay-1">
        Crispy, Affordable Chicken Near Pwani University
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4 text-primary-foreground/80 text-sm animate-fade-up-delay-2">
        <span className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" /> Open daily till 1 AM
        </span>
        <span className="flex items-center gap-1.5">
          <MapPin className="w-4 h-4" /> Kibaoni, Opp. Pwani University
        </span>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 animate-fade-up-delay-3">
        <a
          href="tel:0119425260"
          className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold text-base hover:opacity-90 transition-opacity active:scale-[0.97]"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href="https://www.google.com/maps/search/9RHX+HM+Kilifi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground border border-primary-foreground/25 px-8 py-3.5 rounded-lg font-semibold text-base hover:bg-primary-foreground/25 transition-colors active:scale-[0.97]"
        >
          <MapPin className="w-5 h-5" />
          Get Directions
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
