import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver exceptional investment outcomes through disciplined strategies, rigorous research, and an unwavering commitment to our clients' financial well-being.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted partner for families and institutions seeking to build, preserve, and transfer wealth across generations.",
  },
  {
    icon: Heart,
    title: "Our Values",
    description:
      "Integrity in every interaction. Excellence in execution. Transparency in communication. Client interests above all else.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-medium tracking-[0.2em] uppercase">
            Who We Are
          </span>
          <h2 className="heading-section text-foreground mt-4 mb-4">
            A Legacy of Trust & Excellence
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-body text-muted-foreground leading-relaxed">
            Founded on the principles of prudent stewardship and client-first service, 
            Apex Capital has grown to become a trusted partner for high-net-worth individuals, 
            families, and institutional investors. With decades of combined experience across 
            global markets, our team brings sophisticated investment acumen and personalized 
            attention to every relationship.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors">
                <value.icon className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                {value.title}
              </h3>
              <p className="text-body-sm text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
