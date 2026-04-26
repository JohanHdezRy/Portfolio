import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" id="experience" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "2.5rem" }}
        >
          <p className="section-label">{t.experience.label}</p>
          <h2 className="section-title">{t.experience.heading}</h2>
        </motion.div>

        <div className="exp-cards">
          {t.experience.items.map((item, i) => {
            const [org, location] = item.org.split(" · ");
            return (
              <motion.div
                key={item.title}
                className="exp-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
              >
                <div className="exp-card-header">
                  <div className="exp-card-left">
                    <h3 className="exp-card-title">{item.title}</h3>
                    <span className="exp-card-org grad-text">{org}</span>
                  </div>
                  <div className="exp-card-meta">
                    {location && (
                      <span className="exp-meta-item">
                        <MapPin size={12} />
                        {location}
                      </span>
                    )}
                    <span className="exp-meta-item">
                      <Calendar size={12} />
                      {item.period}
                    </span>
                  </div>
                </div>
                <ul className="exp-card-desc">
                  {item.desc.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
