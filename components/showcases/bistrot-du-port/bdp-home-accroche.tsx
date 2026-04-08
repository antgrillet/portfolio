"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function BdpHomeAccroche() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section ref={ref} style={{ background: "#021222", padding: "5rem 2rem" }}>
      <div className="mx-auto max-w-3xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
            color: "#b8cdd8",
            lineHeight: 1.7,
            fontStyle: "italic",
          }}
        >
          &quot;Le bistrot vous ouvre ses portes que ce soit pour le
          petit-déjeuner, une pause gourmande, à l&apos;heure du déjeuner et du
          dîner.&quot;
        </motion.p>
      </div>
    </section>
  );
}
