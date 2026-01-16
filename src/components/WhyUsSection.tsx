import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Clock, FileCheck, Headphones } from "lucide-react";

const differentiators = [
  {
    icon: Award,
    title: "Proven Expertise",
    stat: "25+",
    statLabel: "Years Combined Experience",
    description:
      "Our team of seasoned professionals brings deep expertise across global markets and asset classes.",
  },
  {
    icon: Clock,
    title: "Long-Term Focus",
    stat: "10yr",
    statLabel: "Average Client Relationship",
    description:
      "We build enduring partnerships focused on sustainable wealth creation, not short-term gains.",
  },
  {
    icon: FileCheck,
    title: "Transparent Reporting",
    stat: "100%",
    statLabel: "Fee Transparency",
    description:
      "Clear, comprehensive reporting with no hidden fees. You always know exactly where you stand.",
  },
  {
    icon: Headphones,
    title: "Dedicated Service",
    stat: "24/7",
    statLabel: "Client Support",
    description:
      "Direct access to your advisory team. We're always available when you need us most.",
  },
];

export const WhyUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-medium tracking-[0.2em] uppercase">
            The Apex Difference
          </span>
          <h2 className="heading-section mt-4 mb-4">
            Why Clients Choose Us
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-secondary/30 mb-6 group-hover:border-secondary group-hover:bg-secondary/10 transition-all duration-300">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              
              <div className="mb-4">
                <span className="block font-serif text-4xl font-medium text-secondary">
                  {item.stat}
                </span>
                <span className="text-xs tracking-wider uppercase text-primary-foreground/60">
                  {item.statLabel}
                </span>
              </div>

              <h3 className="font-serif text-lg font-medium mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
