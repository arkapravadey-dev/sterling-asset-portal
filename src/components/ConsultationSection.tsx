import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Phone, Video } from "lucide-react";

const consultationOptions = [
  {
    icon: Phone,
    title: "Phone Consultation",
    description: "A 30-minute introductory call to discuss your financial goals and how we can help.",
  },
  {
    icon: Video,
    title: "Video Meeting",
    description: "A comprehensive virtual meeting for an in-depth discussion of your portfolio needs.",
  },
  {
    icon: Calendar,
    title: "In-Person Meeting",
    description: "Meet our team at our office for a personalized, face-to-face consultation.",
  },
];

export const ConsultationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="consultation" className="section-padding bg-background">
      <div className="container-narrow mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary text-sm font-medium tracking-[0.2em] uppercase">
              Get Started
            </span>
            <h2 className="heading-section text-foreground mt-4 mb-6">
              Schedule Your Complimentary Consultation
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              Take the first step towards securing your financial future. Our team of 
              experienced advisors is ready to understand your unique situation and craft 
              a personalized strategy to help you achieve your goals.
            </p>
            <p className="text-body-sm text-muted-foreground mb-8">
              During your consultation, we'll discuss your current financial position, 
              understand your objectives, and outline how our services can benefit you. 
              There's no obligation — just a conversation about your future.
            </p>
            <button onClick={scrollToContact} className="btn-gold">
              Request Consultation
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {consultationOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-5 p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group"
                onClick={scrollToContact}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                  <option.icon className="w-5 h-5 text-primary-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
