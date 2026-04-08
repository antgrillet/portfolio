"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const HORAIRES = [
  ["Lundi – Vendredi", "Midi 12h–14h15", "Soir 19h–22h"],
  ["Samedi", "Midi 12h–14h30", "Soir 19h–22h30"],
  ["Dimanche", "Midi 12h–15h00", "Soir 19h–22h"],
];

export function BdpHomeHoraires() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{ background: "#003548", padding: "4rem 2rem" }}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginBottom: "1.5rem",
              fontWeight: 400,
            }}
          >
            Horaires d&apos;ouverture
          </h2>
          {HORAIRES.map(([jour, midi, soir]) => (
            <div
              key={jour}
              className="mb-3 flex justify-between border-b border-white/10 pb-3"
            >
              <span
                style={{
                  color: "rgba(245,240,232,0.6)",
                  fontSize: "0.9rem",
                  fontFamily: "system-ui",
                }}
              >
                {jour}
              </span>
              <span
                style={{
                  color: "#f5f0e8",
                  fontSize: "0.9rem",
                  fontFamily: "system-ui",
                  textAlign: "right",
                }}
              >
                {midi}
                <br />
                {soir}
              </span>
            </div>
          ))}
          <p
            style={{
              fontFamily: "system-ui",
              fontSize: "0.8rem",
              color: "rgba(245,240,232,0.45)",
              marginTop: "1rem",
            }}
          >
            Bar ouvert tous les jours de 9h à minuit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.5rem",
              color: "#f5f0e8",
              marginBottom: "1rem",
              fontWeight: 400,
            }}
          >
            Maître Restaurateur
          </h2>
          <p
            style={{
              color: "rgba(245,240,232,0.65)",
              fontSize: "0.9rem",
              lineHeight: 1.7,
              fontFamily: "system-ui",
              marginBottom: "2rem",
            }}
          >
            Le seul label de la profession reconnu par l&apos;État. Une cuisine
            entièrement faite maison, à partir de produits bruts, frais, de
            terroir, toujours de saison en faisant appel aux producteurs
            locaux.
          </p>

          <div
            style={{
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(245,240,232,0.1)",
            }}
          >
            <p
              style={{
                fontFamily: "system-ui",
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.35)",
                marginBottom: "0.75rem",
              }}
            >
              Adresse
            </p>
            <p
              style={{
                fontFamily: "system-ui",
                fontSize: "0.9rem",
                color: "rgba(245,240,232,0.7)",
                lineHeight: 1.6,
              }}
            >
              2 Bld Robert Barrier
              <br />
              Le Grand Port, Aix-les-Bains
              <br />
              04 79 63 42 05
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
