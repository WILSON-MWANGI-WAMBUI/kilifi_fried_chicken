import { Phone, MapPin, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Contact = () => {
  const headingRef = useScrollReveal();
  const infoRef = useScrollReveal({ delay: 100, direction: "left" });
  const mapRef = useScrollReveal({ delay: 200, direction: "right" });

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12" ref={headingRef}>
          <span className="text-sm font-semibold text-accent uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-balance">Find Us Here</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col gap-6" ref={infoRef}>
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <a href="tel:0119425260" className="text-primary font-semibold hover:underline">
                  0119 425260
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold">Address</h3>
                <p className="text-muted-foreground">Kibaoni, Opposite Pwani University, Kilifi</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold">Hours</h3>
                <p className="text-muted-foreground">Open daily until 1:00 AM</p>
              </div>
            </div>
          </div>

          <div ref={mapRef} className="aspect-video md:aspect-auto md:min-h-[320px] rounded-xl overflow-hidden shadow-md">
            <iframe
              title="Kilifi Fried Chicken Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5!2d39.85!3d-3.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z9RHX+HM+Kilifi!5e0!3m2!1sen!2ske!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
