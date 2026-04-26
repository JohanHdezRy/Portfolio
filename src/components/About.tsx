import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import handsome from "../imgs/handsome.png";
import ProfileCard from "../effects/ProfileCard";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">{t.about.label}</p>
          <h2 className="section-title">{t.about.heading}</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-profile-wrap"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ProfileCard
              avatarUrl={handsome}
              name="Johan H R"
              title="Computer Systems Engineer"
              handle="JohanHdezRy"
              status={t.about.status}
              contactText={t.about.contactText}
              behindGlowColor="rgba(79, 126, 248, 0.6)"
              innerGradient="linear-gradient(145deg, #1a1a3e99 0%, #4f7ef844 100%)"
              onContactClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Johan B. Hernandez Raya</h3>
            <p>{t.about.bio1}</p>
            <p>{t.about.bio2}</p>
            <div className="about-chips">
              {t.about.softSkills.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
