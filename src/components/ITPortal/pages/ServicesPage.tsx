import { SERVICES, SCOPE, GENERAL_REQUIREMENTS } from "../constants";

export default function ServicesPage() {
  return (
    <div style={{ 
      fontFamily: "'Segoe UI', sans-serif", 
      padding: "60px", 
      background: "#f8fafc", 
      minHeight: "100vh" 
    }}>
      <div style={{ textAlign: "center", marginBottom: 50 }}>
        <div style={{ 
          color: "#1a56db", 
          fontWeight: 700, 
          fontSize: 12, 
          letterSpacing: 3, 
          textTransform: "uppercase", 
          marginBottom: 8 
        }}>
          WHAT WE DO
        </div>
        <h2 style={{ 
          fontSize: 38, 
          fontWeight: 900, 
          color: "#1a1a2e", 
          margin: "0 0 12px" 
        }}>
          IT Services & Support
        </h2>
        <p style={{ 
          color: "#6b7280", 
          maxWidth: 520, 
          margin: "0 auto", 
          fontSize: 16 
        }}>
          Comprehensive technology services designed to keep VISAYASMED Hospital running at peak performance.
        </p>
      </div>

      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(4, 1fr)", 
        gap: 20, 
        maxWidth: 1100, 
        margin: "0 auto 60px" 
      }}>
        {SERVICES.map(s => (
          <div 
            key={s.title} 
            style={{ 
              background: "white", 
              borderRadius: 16, 
              padding: "28px 22px", 
              boxShadow: "0 2px 12px rgba(0,0,0,0.06)", 
              transition: "transform 0.2s, box-shadow 0.2s" 
            }}
            onMouseEnter={e => { 
              e.currentTarget.style.transform = "translateY(-4px)"; 
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)"; 
            }}
            onMouseLeave={e => { 
              e.currentTarget.style.transform = ""; 
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)"; 
            }}
          >
            <div style={{ 
              background: s.color, 
              width: 48, 
              height: 48, 
              borderRadius: 12, 
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center", 
              fontSize: 22, 
              marginBottom: 16 
            }}>
              {s.icon}
            </div>
            <h3 style={{ 
              fontWeight: 700, 
              fontSize: 15, 
              color: "#1a1a2e", 
              margin: "0 0 10px", 
              lineHeight: 1.4 
            }}>
              {s.title}
            </h3>
            <p style={{ 
              fontSize: 13, 
              color: "#6b7280", 
              lineHeight: 1.6, 
              margin: "0 0 16px" 
            }}>
              {s.desc}
            </p>
            <span style={{ 
              color: "#1a56db", 
              fontSize: 13, 
              fontWeight: 600, 
              cursor: "pointer" 
            }}>
              {s.link}
            </span>
          </div>
        ))}
      </div>

      {/* Scope & Responsibilities */}
      <div style={{ 
        maxWidth: 1100, 
        margin: "0 auto", 
        background: "white", 
        borderRadius: 20, 
        padding: "48px", 
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)" 
      }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ 
            color: "#1a56db", 
            fontWeight: 700, 
            fontSize: 12, 
            letterSpacing: 3, 
            textTransform: "uppercase", 
            marginBottom: 8 
          }}>
            SCOPE
          </div>
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 800, 
            color: "#1a1a2e", 
            margin: 0 
          }}>
            Responsibilities
          </h2>
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap: 16 
        }}>
          {SCOPE.map(s => (
            <div key={s.title} style={{ 
              textAlign: "center", 
              padding: "20px 16px", 
              background: "#f8fafc", 
              borderRadius: 12 
            }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
              <div style={{ 
                fontWeight: 700, 
                fontSize: 13, 
                color: "#1a1a2e", 
                marginBottom: 8, 
                letterSpacing: 0.5 
              }}>
                {s.title}
              </div>
              <p style={{ 
                fontSize: 12, 
                color: "#6b7280", 
                lineHeight: 1.5, 
                margin: 0 
              }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* General Requirements Full */}
      <div style={{ 
        maxWidth: 1100, 
        margin: "40px auto 0", 
        background: "#0f2c6f", 
        borderRadius: 20, 
        padding: "48px", 
        color: "white" 
      }}>
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ 
            color: "#93c5fd", 
            fontWeight: 700, 
            fontSize: 12, 
            letterSpacing: 3, 
            textTransform: "uppercase", 
            marginBottom: 8 
          }}>
            ACCEPTABLE USE STANDARD
          </div>
          <h2 style={{ 
            fontSize: 28, 
            fontWeight: 800, 
            margin: 0 
          }}>
            General Requirements for All Employees
          </h2>
        </div>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gap: 16 
        }}>
          {GENERAL_REQUIREMENTS.map(req => (
            <div key={req.num} style={{ 
              background: "rgba(255,255,255,0.08)", 
              borderRadius: 12, 
              padding: "20px 22px", 
              display: "flex", 
              gap: 14, 
              alignItems: "flex-start", 
              border: "1px solid rgba(255,255,255,0.12)" 
            }}>
              <span style={{ 
                background: "#1a56db", 
                color: "white", 
                borderRadius: 8, 
                padding: "4px 10px", 
                fontWeight: 800, 
                fontSize: 13, 
                flexShrink: 0 
              }}>
                {req.num}
              </span>
              <p style={{ 
                margin: 0, 
                fontSize: 13, 
                color: "rgba(255,255,255,0.85)", 
                lineHeight: 1.6 
              }}>
                {req.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
