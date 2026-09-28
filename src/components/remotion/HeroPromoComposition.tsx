import React from "react";
import {
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
  AbsoluteFill,
} from "remotion";

export const HeroPromoComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Scene timings (3 scenes in 240 frames total @ 30fps)
  // Scene 1: 0 - 80 (Identity & Medical Council)
  // Scene 2: 80 - 160 (Aarogya Dental Clinic & Surgical Mastery)
  // Scene 3: 160 - 240 (Published Author & DefaultDose Philosophy)

  const sceneIndex = frame < 80 ? 0 : frame < 160 ? 1 : 2;
  const localFrame = frame % 80;

  // Cinematic fade transitions between scenes
  const sceneOpacity = interpolate(
    localFrame,
    [0, 10, 70, 79],
    [0, 1, 1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  // Spring scale
  const scale = spring({
    frame: localFrame,
    fps,
    config: { damping: 14, stiffness: 100 },
  });

  // Animated background audio-pulse frequency bars
  const bars = Array.from({ length: 28 });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0F172A",
        fontFamily: "system-ui, sans-serif",
        color: "#FFFFFF",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Dynamic Background Gradients */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          backgroundColor: sceneIndex === 2 ? "rgba(217, 119, 6, 0.15)" : "rgba(13, 148, 136, 0.18)",
          filter: "blur(90px)",
          transform: `translate(${Math.sin(frame / 20) * 40}px, ${Math.cos(frame / 25) * 40}px)`,
        }}
      />

      {/* Futuristic Dental Frequency Wave at Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 25,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          gap: 6,
          height: 60,
          opacity: 0.45,
        }}
      >
        {bars.map((_, i) => {
          const barHeight = Math.sin((frame + i * 8) / 8) * 22 + 25;
          return (
            <div
              key={i}
              style={{
                width: 5,
                height: `${barHeight}px`,
                backgroundColor: i % 2 === 0 ? "#0D9488" : "#D97706",
                borderRadius: 4,
                transition: "height 0.1s ease",
              }}
            />
          );
        })}
      </div>

      {/* Frame Counter & Live Tag */}
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 30,
          display: "flex",
          alignItems: "center",
          gap: 10,
          fontSize: 12,
          fontFamily: "monospace",
          color: "#94A3B8",
          letterSpacing: 1.5,
        }}
      >
        <span
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            backgroundColor: "#0D9488",
            boxShadow: "0 0 10px #0D9488",
          }}
        />
        <span>REMOTION DYNAMIC SHOWCASE • 30 FPS</span>
      </div>

      {/* Scene Progress Indicators */}
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 30,
          display: "flex",
          gap: 6,
        }}
      >
        {[0, 1, 2].map((idx) => (
          <div
            key={idx}
            style={{
              width: 32,
              height: 4,
              borderRadius: 2,
              backgroundColor: sceneIndex === idx ? "#0D9488" : "rgba(255, 255, 255, 0.2)",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
      </div>

      {/* SCENE 1: Identity & Credentials */}
      {sceneIndex === 0 && (
        <div
          style={{
            opacity: sceneOpacity,
            transform: `scale(${scale})`,
            textAlign: "center",
            maxWidth: 850,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(13, 148, 136, 0.2)",
              border: "1px solid rgba(13, 148, 136, 0.5)",
              color: "#2DD4BF",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            ★ NEPAL MEDICAL COUNCIL REGISTRATION #13350
          </div>

          <h1
            style={{
              fontSize: 52,
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.15,
              margin: 0,
              background: "linear-gradient(to right, #FFFFFF, #E2E8F0, #94A3B8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dr. Ratna Kumar Mishra
          </h1>

          <p
            style={{
              fontSize: 22,
              color: "#38BDF8",
              marginTop: 12,
              fontWeight: 500,
            }}
          >
            Senior Dental Surgeon • B.D.S. (BPKIHS Dharan)
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 20,
              marginTop: 20,
              fontSize: 14,
              color: "#94A3B8",
            }}
          >
            <span>Restoring Smiles</span>
            <span>•</span>
            <span>Microscopic Precision</span>
            <span>•</span>
            <span>Sharing Knowledge</span>
          </div>
        </div>
      )}

      {/* SCENE 2: Aarogya Dental Clinic & Clinical Stats with Official Board */}
      {sceneIndex === 1 && (
        <div
          style={{
            opacity: sceneOpacity,
            transform: `scale(${scale})`,
            textAlign: "center",
            maxWidth: 880,
            padding: "10px 20px",
          }}
        >
          {/* Logo & Clinic Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 14,
              marginBottom: 10,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                backgroundColor: "#FFFFFF",
                padding: 4,
                boxShadow: "0 0 20px rgba(13, 148, 136, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
              }}
            >
              <img
                src="/images/aarogya-dental-clinic-logo.jpg"
                alt="Aarogya Logo"
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
            
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  color: "#2DD4BF",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  fontFamily: "monospace",
                  textTransform: "uppercase",
                }}
              >
                AAROGYA DENTAL CLINIC • DAMAK-1, JHAPA
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#FFFFFF",
                  lineHeight: 1.2,
                }}
              >
                15+ Years Surgical & Aesthetic Precision
              </div>
            </div>
          </div>

          {/* Animated 3D Floating Official Signboard Card */}
          <div
            style={{
              position: "relative",
              width: 520,
              maxWidth: "95%",
              height: 125,
              borderRadius: 16,
              overflow: "hidden",
              border: "2px solid rgba(220, 38, 38, 0.7)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(220, 38, 38, 0.3)",
              margin: "8px auto",
              transform: `perspective(600px) rotateX(${Math.sin(frame / 15) * 3}deg) rotateY(${Math.cos(frame / 20) * 4}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <img
              src="/images/aarogya-official-signboard.jpg"
              alt="Official Signboard"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Dynamic Sweep Light */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${((localFrame * 3) % 180) - 40}%`,
                width: 70,
                background: "linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent)",
                transform: "skewX(-20deg)",
                pointerEvents: "none",
              }}
            />
            {/* Official Credentials Floating Pill */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: "rgba(15, 23, 42, 0.92)",
                padding: "3px 12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                fontSize: 10,
                fontFamily: "monospace",
                color: "#E2E8F0",
                backdropFilter: "blur(4px)",
              }}
            >
              <span style={{ color: "#FBBF24", fontWeight: 700 }}>
                ★ REGD: 01-32-0703 • PAN 118898500 • NMC 13350
              </span>
              <span style={{ color: "#38BDF8", fontWeight: 600 }}>
                दमक-१, झापा • ९८०११०९०२२
              </span>
            </div>
          </div>

          {/* Real Clinical Milestones */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 36,
              marginTop: 14,
            }}
          >
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#2DD4BF" }}>12,000+</div>
              <div style={{ fontSize: 11, color: "#94A3B8" }}>Patients Treated</div>
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#38BDF8" }}>18,500+</div>
              <div style={{ fontSize: 11, color: "#94A3B8" }}>Procedures Done</div>
            </div>
            <div>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#D97706" }}>99.4%</div>
              <div style={{ fontSize: 11, color: "#94A3B8" }}>Patient Trust</div>
            </div>
          </div>
        </div>
      )}

      {/* SCENE 3: Published Author & Philosophy */}
      {sceneIndex === 2 && (
        <div
          style={{
            opacity: sceneOpacity,
            transform: `scale(${scale})`,
            textAlign: "center",
            maxWidth: 850,
            padding: 20,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 20,
              backgroundColor: "rgba(217, 119, 6, 0.2)",
              border: "1px solid rgba(217, 119, 6, 0.5)",
              color: "#FBBF24",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            PUBLISHED AUTHOR & DISRUPTOR
          </div>

          <h1
            style={{
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.15,
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            The Lost Book & The Crash Book
          </h1>

          <p
            style={{
              fontSize: 20,
              color: "#E2E8F0",
              fontStyle: "italic",
              marginTop: 16,
              maxWidth: 720,
              marginInline: "auto",
              lineHeight: 1.5,
            }}
          >
            “Medicine repairs the physical body; literature illuminates the sanctuary of the soul.”
          </p>

          <div
            style={{
              marginTop: 20,
              fontSize: 14,
              fontFamily: "monospace",
              color: "#FBBF24",
              fontWeight: 600,
              letterSpacing: 2,
            }}
          >
            POET • DENTIST • DREAMER • DISRUPTOR
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
