import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--cream)) 2px, transparent 0)`,
          backgroundSize: "50px 50px"
        }} />
      </div>

      {/* Gold Accent Line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-secondary to-transparent" />

      <div className="container-narrow mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-secondary text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6">
              Asset Management Excellence
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-primary-foreground mb-8"
          >
            Building Wealth.{" "}
            <span className="text-secondary">Preserving Legacy.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-body text-primary-foreground/80 max-w-2xl mx-auto mb-12"
          >
            We are a premier asset management firm dedicated to helping discerning clients 
            grow, protect, and transfer their wealth across generations through sophisticated 
            investment strategies and personalized advisory services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("#consultation")}
              className="btn-secondary"
            >
              Book a Consultation
            </button>
            <button
              onClick={() => scrollToSection("#services")}
              className="btn-primary bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              Explore Services
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => scrollToSection("#about")}
          className="text-primary-foreground/60 hover:text-secondary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown size={28} />
        </motion.button>
      </motion.div>
    </section>
  );
};
