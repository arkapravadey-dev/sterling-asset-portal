import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  PieChart,
  Shield,
  Users,
  BarChart3,
  Briefcase,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Investment Management",
    description:
      "Bespoke portfolio construction and active management across asset classes, tailored to your risk profile and financial objectives.",
  },
  {
    icon: PieChart,
    title: "Wealth Advisory",
    description:
      "Comprehensive wealth planning integrating investments, tax optimization, estate planning, and philanthropy strategies.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Sophisticated hedging strategies and portfolio protection mechanisms to preserve capital through market cycles.",
  },
  {
    icon: Users,
    title: "Family Office Services",
    description:
      "Complete multi-generational wealth stewardship including governance, succession planning, and lifestyle management.",
  },
  {
    icon: BarChart3,
    title: "Alternative Investments",
    description:
      "Curated access to private equity, hedge funds, real estate, and other alternative asset classes for portfolio diversification.",
  },
  {
    icon: Briefcase,
    title: "Institutional Solutions",
    description:
      "Customized investment programs for endowments, foundations, and corporate treasuries with rigorous fiduciary oversight.",
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-medium tracking-[0.2em] uppercase">
            Our Expertise
          </span>
          <h2 className="heading-section text-foreground mt-4 mb-4">
            Comprehensive Financial Services
          </h2>
          <div className="divider-gold" />
          <p className="text-body text-muted-foreground max-w-2xl mx-auto mt-6">
            From portfolio management to multi-generational wealth planning, we offer 
            a full spectrum of services designed to meet your unique financial needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="card-elevated p-8 group cursor-pointer"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-secondary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
