import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import Dock from "../effects/Dock";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const dockItems = [
    {
      icon: <Mail size={26} />,
      label: "Email",
      onClick: () => window.open("mailto:JohanHdezRy@gmail.com"),
    },
    {
      icon: <Github size={26} />,
      label: "GitHub",
      onClick: () => window.open("https://github.com/JohanHdezRy", "_blank"),
    },
    {
      icon: <Linkedin size={26} />,
      label: "LinkedIn",
      onClick: () =>
        window.open(
          "https://linkedin.com/in/johan-hernandez-8753b0382",
          "_blank",
        ),
    },
    {
      icon: <Phone size={26} />,
      label: t.contact.phone,
      onClick: () => window.open("https://wa.me/529873045620", "_blank"),
    },
  ];

  return (
    <section className="section contact-bg" id="contact" ref={ref}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: "3rem" }}
      >
        <div className="contact-wrapper">
          <p className="section-label">{t.contact.label}</p>
          <h2 className="section-title">{t.contact.heading}</h2>
          <p className="contact-sub">{t.contact.sub}</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "2rem",
        }}
      >
        <Dock
          items={dockItems}
          magnification={90}
          baseItemSize={60}
          panelHeight={76}
          distance={180}
        />
      </motion.div>
    </section>
  );
}
