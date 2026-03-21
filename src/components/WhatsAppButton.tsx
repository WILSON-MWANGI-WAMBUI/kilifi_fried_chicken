import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/254119425260"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed bottom-6 right-6 z-50 bg-[hsl(142,70%,45%)] text-white p-4 rounded-full shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
