import { liveHref } from "./live-site";

export function BdpSiteFooter() {
  return (
    <footer
      style={{
        background: "#021222",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-10 py-16 md:grid-cols-2 xl:grid-cols-4 xl:gap-12">
        <div>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "#f5f0e8",
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Le Bistrot du Port
          </p>
          <p
            style={{
              fontFamily: "system-ui",
              fontSize: "0.85rem",
              color: "rgba(245,240,232,0.45)",
              lineHeight: 1.7,
              maxWidth: "260px",
            }}
          >
            Cuisine authentique faite maison, produits frais et de saison, dans
            un cadre privilégié face au Lac du Bourget.
          </p>
          <p
            style={{
              marginTop: "1.25rem",
              fontFamily: "system-ui",
              fontSize: "0.72rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.3)",
            }}
          >
            Maître Restaurateur — Label d&apos;État
          </p>
        </div>

        <div>
          <p
            style={{
              fontFamily: "system-ui",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "1.25rem",
            }}
          >
            Horaires
          </p>
          {[
            ["Lun – Ven", "12h–14h15 · 19h–22h"],
            ["Samedi", "12h–14h30 · 19h–22h30"],
            ["Dimanche", "12h–15h · 19h–22h"],
            ["Bar", "9h – 00h"],
          ].map(([j, h]) => (
            <div key={j} style={{ marginBottom: "0.6rem" }}>
              <p
                style={{
                  fontFamily: "system-ui",
                  fontSize: "0.72rem",
                  color: "rgba(245,240,232,0.35)",
                  marginBottom: "0.1rem",
                }}
              >
                {j}
              </p>
              <p
                style={{
                  fontFamily: "system-ui",
                  fontSize: "0.8rem",
                  color: "rgba(245,240,232,0.65)",
                }}
              >
                {h}
              </p>
            </div>
          ))}
        </div>

        <div>
          <p
            style={{
              fontFamily: "system-ui",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "1.25rem",
            }}
          >
            Contact
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              {
                l: "Adresse",
                v: "2 Bld Robert Barrier\nLe Grand Port, Aix-les-Bains",
              },
              { l: "Téléphone", v: "04 79 63 42 05" },
              { l: "Réservations groupes", v: "06 64 33 26 17" },
              { l: "Email", v: "lebistrotduport.aixlesbains\n@orange.fr" },
            ].map(({ l, v }) => (
              <div key={l}>
                <p
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "0.62rem",
                    color: "rgba(245,240,232,0.3)",
                    marginBottom: "0.15rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </p>
                <p
                  style={{
                    fontFamily: "system-ui",
                    fontSize: "0.8rem",
                    color: "rgba(245,240,232,0.6)",
                    lineHeight: 1.5,
                    whiteSpace: "pre-line",
                  }}
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p
            style={{
              fontFamily: "system-ui",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(245,240,232,0.35)",
              marginBottom: "1.25rem",
            }}
          >
            Navigation
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            {[
              { label: "La Carte", path: "/la-carte" },
              { label: "Maître Restaurateur", path: "/maitre-restaurateur" },
              { label: "Évènements", path: "/evenements" },
              { label: "Contact", path: "/contact" },
              { label: "Recrutement", path: "/recrutement" },
            ].map(({ label, path }) => (
              <a
                key={path}
                href={liveHref(path)}
                style={{
                  fontFamily: "system-ui",
                  fontSize: "0.82rem",
                  color: "rgba(245,240,232,0.5)",
                  textDecoration: "none",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "1.25rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1280px",
          margin: "0 auto",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "system-ui",
            fontSize: "0.72rem",
            color: "rgba(245,240,232,0.25)",
            letterSpacing: "0.06em",
          }}
        >
          © {new Date().getFullYear()} Le Bistrot du Port — Aix-les-Bains
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          <a
            href={liveHref("/")}
            style={{
              fontFamily: "system-ui",
              fontSize: "0.72rem",
              color: "rgba(245,240,232,0.25)",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            Mentions légales
          </a>
          <a
            href="https://www.instagram.com/lopincommunication/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "system-ui",
              fontSize: "0.72rem",
              color: "rgba(245,240,232,0.25)",
              textDecoration: "none",
              letterSpacing: "0.06em",
            }}
          >
            Site par Lopin
          </a>
        </div>
      </div>
    </footer>
  );
}
