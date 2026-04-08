"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { bdpImg } from "./assets";
import { liveHref } from "./live-site";

const CARDS = [
  {
    title: "La Carte",
    desc: "Retrouvez notre carte et les suggestions du chef, renouvelées chaque semaine selon les arrivages.",
    path: "/la-carte",
    cta: "Voir la carte",
    img: "/images/page2/DSCF9324-scaled.jpg",
  },
  {
    title: "Évènements",
    desc: "Vue imprenable sur le Lac du Bourget. Plusieurs formules pour vos évènements personnels et d'entreprise.",
    path: "/evenements",
    cta: "Nos formules",
    img: "/images/page4/event-300x268.jpg",
  },
  {
    title: "Nous trouver",
    desc: "2 Bld Robert Barrier, Le Grand Port — Aix-les-Bains. Ouvert 7j/7 de 9h à minuit.",
    path: "/contact",
    cta: "Accès & contact",
    img: "/images/page1/DSCF9091-scaled-e1764750297856.jpg",
  },
];

export function BdpHomeCtas() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{ background: "#021222", padding: "5rem 2rem" }}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
        {CARDS.map(({ title, desc, path, cta, img }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            className="flex flex-col"
          >
            <div
              style={{
                overflow: "hidden",
                marginBottom: "1.5rem",
                height: "220px",
              }}
            >
              <img
                src={bdpImg(img)}
                alt={title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1.04)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLImageElement).style.transform =
                    "scale(1)";
                }}
              />
            </div>
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.25rem",
                color: "#f5f0e8",
                fontWeight: 400,
                marginBottom: "0.75rem",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontFamily: "system-ui",
                fontSize: "0.88rem",
                color: "rgba(245,240,232,0.55)",
                lineHeight: 1.65,
                flex: 1,
                marginBottom: "1.5rem",
              }}
            >
              {desc}
            </p>
            <a
              href={liveHref(path)}
              style={{
                fontFamily: "system-ui",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.6)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(245,240,232,0.25)",
                paddingBottom: "2px",
                alignSelf: "flex-start",
              }}
            >
              {cta} →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
